// Header.js - Fixed with proper styling
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <div className="text-3xl font-bold tracking-tight">
                        Creator
                        <span className="text-orange-500 dark:text-orange-400">verse</span>
                    </div>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/add"
                                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium"
                            >
                                Add Creator
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;