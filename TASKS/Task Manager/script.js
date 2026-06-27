

class TaskManager {
    constructor() {
        // Initialize task ID counter
        this.taskId = parseInt(localStorage.getItem('taskIdCounter')) || 0;
        
        // Load tasks from localStorage
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // DOM Elements
        this.taskForm = document.getElementById('taskForm');
        this.taskTitleInput = document.getElementById('taskTitle');
        this.taskCategorySelect = document.getElementById('taskCategory');
        this.tasksContainer = document.getElementById('tasksContainer');
        this.themeToggle = document.getElementById('themeToggle');
        
        // Stats elements
        this.totalTasksDisplay = document.getElementById('totalTasks');
        this.completedTasksDisplay = document.getElementById('completedTasks');
        this.pendingTasksDisplay = document.getElementById('pendingTasks');
        
        // Filter elements
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.currentFilter = 'all';
        
        // Search elements
        this.searchBox = document.getElementById('searchBox');
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.closeSearch = document.getElementById('closeSearch');
        
        // Initialize
        this.init();
    }

    // ===== INITIALIZATION =====
    init() {
        // Load theme
        this.loadTheme();
        
        // Render existing tasks
        this.renderTasks();
        
        // Update stats
        this.updateStats();
        
        // Attach event listeners
        this.attachEventListeners();
    }

    // ===== EVENT LISTENERS =====
    attachEventListeners() {
        // Form submission
        this.taskForm.addEventListener('submit', (e) => this.handleAddTask(e));
        
        // Theme toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Event Delegation: Attach single listener to container
        // Instead of attaching listeners to each task card, we listen to parent
        this.tasksContainer.addEventListener('click', (e) => this.handleTaskContainerClick(e));
        
        // Filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
        
        // Search
        this.searchBtn.addEventListener('click', () => this.toggleSearch());
        this.closeSearch.addEventListener('click', () => this.toggleSearch());
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        
        // Clear all button
        document.getElementById('clearAllBtn').addEventListener('click', () => this.clearAllTasks());
    }

    // ===== TASK CREATION - DOM ELEMENT CREATION =====
    handleAddTask(event) {
        event.preventDefault();
        
        // Get form values
        // NOTE: Demonstrates Attributes vs Properties
        const title = this.taskTitleInput.value; // Property: input.value (dynamic, DOM object)
        const category = this.taskCategorySelect.value; // Property
        
        // Validation
        if (title.trim() === '') {
            alert('Please enter a task title');
            return;
        }
        
        // Create task object
        const task = {
            id: ++this.taskId,
            title: title,
            category: category,
            status: 'pending', // Can be 'pending' or 'completed'
            createdAt: new Date().toLocaleDateString()
        };
        
        // Save to tasks array
        this.tasks.push(task);
        
        // Save to localStorage
        this.saveToStorage();
        
        // Create and add task card to DOM
        this.addTaskCardToDOM(task);
        
        // Reset form
        this.taskForm.reset();
        
        // Update stats
        this.updateStats();
        
        // Show success message
        this.showNotification('✅ Task added successfully!');
    }

    // ===== CREATE TASK CARD - DOM MANIPULATION METHODS =====
    addTaskCardToDOM(task) {
        // Remove empty state if exists
        const emptyState = this.tasksContainer.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove(); // Using remove() DOM method
        }
        
        // Create task card using createElement()
        const taskCard = document.createElement('div');
        
        // Set class
        taskCard.classList.add('task-card');
        
        // Set custom data attributes
        // These are ATTRIBUTES, not properties
        taskCard.setAttribute('data-id', task.id);
        taskCard.setAttribute('data-status', task.status);
        taskCard.setAttribute('data-category', task.category);
        
        // Alternative way: using dataset (converts to camelCase)
        taskCard.dataset.id = task.id;
        taskCard.dataset.status = task.status;
        taskCard.dataset.category = task.category;
        
        // Create task content using createElement()
        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        
        // Create title
        const titleElement = document.createElement('div');
        titleElement.classList.add('task-title');
        
        // Using createTextNode() - creates text node
        const titleText = document.createTextNode(task.title);
        titleElement.appendChild(titleText); // Using appendChild()
        
        // Create meta information
        const metaElement = document.createElement('div');
        metaElement.classList.add('task-meta');
        
        // Category badge
        const categoryBadge = document.createElement('span');
        categoryBadge.classList.add('task-category', task.category);
        categoryBadge.appendChild(document.createTextNode(`📁 ${task.category}`));
        
        // Status badge
        const statusBadge = document.createElement('span');
        statusBadge.classList.add('task-status', task.status);
        statusBadge.appendChild(document.createTextNode(`${task.status}`));
        
        // Date
        const dateElement = document.createElement('span');
        dateElement.appendChild(document.createTextNode(`📅 ${task.createdAt}`));
        
        // Append meta items
        metaElement.append(categoryBadge, statusBadge, dateElement); // Using append() for multiple elements
        
        // Append title and meta to content
        taskContent.append(titleElement, metaElement);
        
        // Create action buttons
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-actions');
        
        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('task-btn', 'task-btn-complete');
        completeBtn.appendChild(document.createTextNode('✓ Complete'));
        completeBtn.setAttribute('data-action', 'complete');
        
        // Edit button
        const editBtn = document.createElement('button');
        editBtn.classList.add('task-btn', 'task-btn-edit');
        editBtn.appendChild(document.createTextNode('✏️ Edit'));
        editBtn.setAttribute('data-action', 'edit');
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('task-btn', 'task-btn-delete');
        deleteBtn.appendChild(document.createTextNode('🗑️ Delete'));
        deleteBtn.setAttribute('data-action', 'delete');
        
        // Append buttons
        actionsDiv.append(completeBtn, editBtn, deleteBtn);
        
        // Append content and actions to card
        taskCard.append(taskContent, actionsDiv); // Using append()
        
        // Add to container - using prepend() to add at the top
        this.tasksContainer.prepend(taskCard);
    }

    // ===== EVENT DELEGATION - Handle all task actions =====
    handleTaskContainerClick(event) {
        // Event Delegation: Check if clicked element is a button
        const actionBtn = event.target.closest('[data-action]');
        
        if (!actionBtn) return;
        
        // Find the task card
        const taskCard = actionBtn.closest('[data-id]');
        if (!taskCard) return;
        
        // Get task ID from data attribute
        const taskId = parseInt(taskCard.getAttribute('data-id')); // Using getAttribute()
        
        // Get action
        const action = actionBtn.getAttribute('data-action');
        
        // Handle different actions
        switch(action) {
            case 'complete':
                this.completeTask(taskId, taskCard);
                break;
            case 'edit':
                this.editTask(taskId, taskCard);
                break;
            case 'delete':
                this.deleteTask(taskId, taskCard);
                break;
        }
    }

    // ===== TASK ACTIONS =====
    completeTask(taskId, taskCard) {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) return;
        
        // Toggle status
        task.status = task.status === 'pending' ? 'completed' : 'pending';
        
        // Update attribute
        taskCard.setAttribute('data-status', task.status);
        taskCard.dataset.status = task.status; // Using dataset
        
        // Update UI
        taskCard.classList.toggle('completed');
        const statusBadge = taskCard.querySelector('.task-status');
        statusBadge.textContent = task.status;
        statusBadge.classList.remove('pending', 'completed');
        statusBadge.classList.add(task.status);
        
        // Save
        this.saveToStorage();
        this.updateStats();
        
        // Notification
        const message = task.status === 'completed' ? '✅ Task marked as completed!' : '↩️ Task marked as pending!';
        this.showNotification(message);
    }

    editTask(taskId, taskCard) {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) return;
        
        const newTitle = prompt('Edit task title:', task.title);
        if (newTitle && newTitle.trim() !== '') {
            task.title = newTitle;
            
            // Update DOM
            const titleElement = taskCard.querySelector('.task-title');
            titleElement.textContent = newTitle;
            
            // Save
            this.saveToStorage();
            this.showNotification('✏️ Task updated successfully!');
        }
    }

    deleteTask(taskId, taskCard) {
        if (confirm('Are you sure you want to delete this task?')) {
            // Remove from array
            this.tasks = this.tasks.filter(t => t.id !== taskId);
            
            // Animation class
            taskCard.classList.add('removing');
            
            // Remove from DOM after animation
            setTimeout(() => {
                // Using remove() DOM method
                taskCard.remove();
                
                // Update storage and stats
                this.saveToStorage();
                this.updateStats();
                
                // Show empty state if no tasks
                if (this.tasksContainer.children.length === 0) {
                    this.showEmptyState();
                }
                
                this.showNotification('🗑️ Task deleted!');
            }, 300);
        }
    }

    // ===== TASK RENDERING =====
    renderTasks() {
        // Clear container
        this.tasksContainer.innerHTML = '';
        
        // Get filtered tasks based on current filter
        const filteredTasks = this.getFilteredTasks();
        
        if (filteredTasks.length === 0) {
            this.showEmptyState();
            return;
        }
        
        // Render each task
        filteredTasks.forEach(task => {
            this.addTaskCardToDOM(task);
        });
    }

    // ===== FILTERING =====
    handleFilter(event) {
        const filterValue = event.target.getAttribute('data-filter');
        
        // Update current filter
        this.currentFilter = filterValue;
        
        // Update active button
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Re-render tasks
        this.renderTasks();
    }

    getFilteredTasks() {
        if (this.currentFilter === 'all') {
            return this.tasks;
        }
        return this.tasks.filter(task => task.category === this.currentFilter);
    }

    // ===== SEARCH =====
    toggleSearch() {
        this.searchBox.classList.toggle('hidden');
        if (!this.searchBox.classList.contains('hidden')) {
            this.searchInput.focus();
        } else {
            this.searchInput.value = '';
            this.renderTasks();
        }
    }

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            this.renderTasks();
            return;
        }
        
        // Clear container
        this.tasksContainer.innerHTML = '';
        
        // Filter and render matching tasks
        const matchingTasks = this.tasks.filter(task =>
            task.title.toLowerCase().includes(searchTerm)
        );
        
        if (matchingTasks.length === 0) {
            this.showEmptyState('No matching tasks found');
            return;
        }
        
        matchingTasks.forEach(task => {
            this.addTaskCardToDOM(task);
        });
    }

    // ===== CLEAR ALL TASKS =====
    clearAllTasks() {
        if (this.tasks.length === 0) {
            alert('No tasks to clear');
            return;
        }
        
        if (confirm('Are you sure you want to delete all tasks? This cannot be undone.')) {
            this.tasks = [];
            this.saveToStorage();
            this.tasksContainer.innerHTML = '';
            this.showEmptyState();
            this.updateStats();
            this.showNotification('🗑️ All tasks cleared!');
        }
    }

    // ===== STATISTICS =====
    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.status === 'completed').length;
        const pending = total - completed;
        
        this.totalTasksDisplay.textContent = total;
        this.completedTasksDisplay.textContent = completed;
        this.pendingTasksDisplay.textContent = pending;
    }

    // ===== THEME TOGGLE - Using classList and dataset =====
    toggleTheme() {
        // Get current theme from data attribute
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
        
        // Toggle theme
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Set attribute
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Toggle class on body
        document.body.classList.toggle('dark-mode');
        
        // Update button text
        this.themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        // Save to localStorage
        localStorage.setItem('theme', newTheme);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        // Set initial state
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            this.themeToggle.textContent = '☀️ Light Mode';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.themeToggle.textContent = '🌙 Dark Mode';
        }
    }

    // ===== LOCAL STORAGE =====
    saveToStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        localStorage.setItem('taskIdCounter', this.taskId.toString());
    }

    // ===== UTILITIES =====
    showEmptyState(message = '📝 No tasks yet. Create one to get started!') {
        const emptyState = document.createElement('div');
        emptyState.classList.add('empty-state');
        emptyState.appendChild(document.createTextNode(message));
        this.tasksContainer.appendChild(emptyState);
    }

    showNotification(message) {
        // Create notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.appendChild(document.createTextNode(message));
        document.body.appendChild(notification);
        
        // Remove after 2 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}



// ===== 4. INITIALIZE APPLICATION =====

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Task Manager
    window.taskManager = new TaskManager();
    
    console.log('✅ Task Manager Initialized!');
    console.log('DOM Manipulation:', 'Available');
    console.log('Event Delegation:', 'Active on #tasksContainer');
});