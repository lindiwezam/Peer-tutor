import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function TutorDashboard() {
    const { user, logout } = useAuth();

    if (!user) return <p>Please log in to access your dashboard.</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
            <p className="text-gray-600 mb-4">Role: {user.role}</p>
            <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>

            <div className="mt-6">
                <h2 className="font-semibold text-lg">Session Requests</h2>
                <p className="text-gray-500">No session requested.</p>
            </div>
        </div>
    );
}

export default TutorDashboard;