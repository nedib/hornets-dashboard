"use client";

// The logout button helps resolve logout issues referenced in
// Auth0's troubleshooting guide (https://auth0.com/docs/troubleshoot/authentication-issues/check-login-and-logout-issues#login-issues).
// When a user logs out, both Auth0 and the application must clear any stored session data (cookies, localStorage, sessionStorage).
// Then, the user should be redirected to a non-protected URL so that when the client next requests user data,
// the response correctly indicates "no user".

export default function LogoutButton() {
    const handleLogout = () => {
        // Clear, clear, clear, clear
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/api/auth/logout?returnTo=/";
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}
