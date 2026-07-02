// ===== PAGE NAVIGATION =====
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the requested page
    const activePage = document.getElementById(pageName);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to clicked link
    event.target.classList.add('active');
}

// ===== MODAL & BUTTONS =====
function openAddTransactionModal() {
    console.log("🎯 Add Transaction button clicked");
    alert("Add Transaction modal will open here in the next step!");
}

function logout() {
    console.log("👋 Logout clicked");
    alert("Logout functionality will be added in the next step!");
}

// ===== STARTUP =====
console.log("✅ FinTrack Pro is starting up!");
console.log("📁 Navbar is ready!");