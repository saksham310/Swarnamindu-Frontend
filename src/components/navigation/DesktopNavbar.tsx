import { NavIcon } from './NavIcon';
import { NAV_ITEMS } from '../../constants/nav-items.constants';
import type { User } from '../../interface/user.interface';

interface Props { user: User; onLogout: () => void; }

export const DesktopNavbar = ({ user, onLogout }: Props) => {
    const filteredItems = NAV_ITEMS.filter(item => item.roles.includes(user.role));

    return (
        <nav className="hidden md:flex items-center justify-between px-8 py-3 bg-white border-b sticky top-0 z-50">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="bg-emerald-600 p-1.5 rounded-lg text-white font-bold text-sm">SP</div>
                    <div>
                        <h1 className="text-sm font-bold leading-none">Swarnavindu</h1>
                        <p className="text-[10px] text-gray-400">Prashan Program</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    {filteredItems.map((item) => (
                        <a key={item.label} href={item.path} className="text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors">
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 border-l pl-6">
                <div className="text-right">
                    <p className="text-sm font-bold leading-none">{user.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{user.role}</p>
                </div>
                <button onClick={onLogout} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-all">
                    <NavIcon name="LogOut" size={18} />
                </button>
            </div>
        </nav>
    );
};