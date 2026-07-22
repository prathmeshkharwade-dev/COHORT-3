const UserCard = ({ user }) => {
    return (
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-24 relative">
                <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                        <img
                            src={`https://ui-avatars.com/api/?name=${user.name.firstname}+${user.name.lastname}&background=6366f1&color=fff&size=128`}
                            alt="User Avatar"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="pt-16 pb-6 px-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 capitalize">
                        {user.name.firstname} {user.name.lastname}
                    </h2>

                    <p className="text-gray-500">@{user.username}</p>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="font-medium text-gray-500">📧 Email</span>
                        <span className="text-gray-700 text-sm">{user.email}</span>
                    </div>

                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="font-medium text-gray-500">📱 Phone</span>
                        <span className="text-gray-700 text-sm">{user.phone}</span>
                    </div>

                    <div className="flex items-center justify-between border-b pb-3">
                        <span className="font-medium text-gray-500">🆔 User ID</span>
                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                            #{user.id}
                        </span>
                    </div>

                    <div className="border-b pb-3">
                        <p className="font-medium text-gray-500 mb-2">📍 Address</p>

                        <div className="text-sm text-gray-700 space-y-1">
                            <p>
                                {user.address.number}, {user.address.street}
                            </p>

                            <p>
                                {user.address.city}, {user.address.zipcode}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-8 flex gap-3">
                    <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition">
                        View Profile
                    </button>

                    <button className="flex-1 border border-indigo-600 text-indigo-600 py-2.5 rounded-xl font-semibold hover:bg-indigo-50 transition">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;