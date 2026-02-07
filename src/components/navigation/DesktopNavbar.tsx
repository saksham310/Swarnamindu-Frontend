import { Link, useLocation } from 'react-router-dom';
import { NavIcon } from './NavIcon';
import { NAV_ITEMS } from '../../constants/nav-items.constants';
import type { User } from '../../interface/user.interface';

interface Props { user: User; onLogout: () => void; }

export const DesktopNavbar = ({ user, onLogout }: Props) => {
    const location = useLocation();
    const filteredItems = NAV_ITEMS.filter(item => item.roles.includes(user.role));

    return (
        <nav className="hidden md:flex items-center justify-between px-8 py-3 bg-white border-b sticky top-0 z-50">
            <div className="flex items-center gap-10">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-emerald-600 p-1.5 rounded-lg text-white font-bold text-sm">SP</div>
                    <div>
                        <h1 className="text-sm font-bold leading-none text-gray-900">Swarnavindu</h1>
                        <p className="text-[10px] text-gray-400">Prashan Program</p>
                    </div>
                </Link>

                <div className="flex gap-1">
                    {filteredItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                    ? "text-emerald-600 bg-emerald-50"
                                    : "text-gray-500 hover:text-emerald-600 hover:bg-gray-50"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center gap-4 border-l pl-6">
                <div className="text-right">
                    <p className="text-sm font-bold leading-none text-gray-900">{user.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter font-semibold">
                        {user.role}
                    </p>
                </div>
                <button
                    onClick={onLogout}
                    title="Logout"
                    className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-all"
                >
                    <NavIcon name="LogOut" size={18} />
                </button>
            </div>
        </nav>
    );
};