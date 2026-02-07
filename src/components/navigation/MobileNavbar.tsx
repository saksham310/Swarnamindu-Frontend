import { Link, useLocation } from 'react-router-dom';
import { NavIcon, type IconName } from './NavIcon';
import { NAV_ITEMS } from '../../constants/nav-items.constants';
import type { User } from '../../interface/user.interface';

export const MobileNavbar = ({ user, onActionClick }: { user: User; onActionClick: () => void }) => {
    const location = useLocation();
    const allowedItems = NAV_ITEMS.filter(i => i.roles.includes(user.role));
    const mobileNav = allowedItems.slice(0, 4);

    const renderNavLink = (item: typeof NAV_ITEMS[0]) => {
        const isActive = location.pathname === item.path;
        return (
            <Link
                key={item.label}
                to={item.path}
                className="flex flex-col items-center gap-1 min-w-[50px] transition-colors"
            >
                <NavIcon
                    name={item.icon as IconName}
                    className={isActive ? "text-emerald-600" : "text-gray-400"}
                />
                <span className={`text-[10px] font-semibold ${isActive ? "text-emerald-600" : "text-gray-400"}`}>
                    {item.label}
                </span>
            </Link>
        );
    };

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pb-safe pt-2 z-50">
            <div className="flex items-center justify-between relative">
                <div className="flex flex-1 justify-around">
                    {mobileNav.slice(0, 2).map(renderNavLink)}
                </div>

                <div className="flex justify-center w-20 relative">
                    <div className="absolute -top-12">
                        <button
                            onClick={onActionClick}
                            className="bg-emerald-600 text-white p-4 rounded-full shadow-lg border-4 border-white active:scale-90 transition-all"
                        >
                            <NavIcon name="Plus" size={28} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 justify-around">
                    {mobileNav.slice(2, 4).map(renderNavLink)}
                </div>
            </div>
        </nav>
    );
};