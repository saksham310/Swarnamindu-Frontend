import { Home, Activity, BarChart3, RefreshCw, Settings, Plus, LogOut } from 'lucide-react';

const icons = { Home, Activity, BarChart3, RefreshCw, Settings, Plus, LogOut };

export type IconName = keyof typeof icons;

export const NavIcon = ({ name, size = 20, className = "" }: { name: IconName; size?: number; className?: string }) => {
    const IconComponent = icons[name];
    return IconComponent ? <IconComponent size={size} className={className} /> : <Home size={size} />;
};