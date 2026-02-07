import { NavIcon, type IconName } from './NavIcon';
import { NAV_ITEMS } from '../../constants/nav-items.constants';
import type { User } from '../../interface/user.interface';

export const MobileNavbar = ({ user, onActionClick }: { user: User; onActionClick: () => void }) => {
    const mobileNav = NAV_ITEMS.filter(i => i.roles.includes(user.role)).slice(0, 4);

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pb-safe pt-2 z-50">
            <div className="flex items-center justify-between relative">
                {mobileNav.slice(0, 2).map((item) => (
                    <a key={item.label} href={item.path} className="flex flex-col items-center gap-1 min-w-[50px]">
                        <NavIcon name={item.icon as IconName} className="text-gray-400" />
                        <span className="text-[10px] font-medium text-gray-400">{item.label}</span>
                    </a>
                ))}

                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <button
                        onClick={onActionClick}
                        className="bg-emerald-600 text-white p-4 rounded-full shadow-lg border-4 border-white active:scale-90 transition-all"
                    >
                        <NavIcon name="Plus" size={28} />
                    </button>
                </div>

                <div className="w-10" />

                {mobileNav.slice(2, 4).map((item) => (
                    <a key={item.label} href={item.path} className="flex flex-col items-center gap-1 min-w-[50px]">
                        <NavIcon name={item.icon as IconName} className="text-gray-400" />
                        <span className="text-[10px] font-medium text-gray-400">{item.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
};