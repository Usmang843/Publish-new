import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    // Check for logged-in status on component mount
    useEffect(() => {
        const sessionDetail = sessionStorage.getItem('currentloggedin');
        if (!sessionDetail) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('currentloggedin'); // Clear the session
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl">Welcome to News CRUD</h1>
            <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
                Log Out
            </button>
        </div>
    );
};

export default Logout;
