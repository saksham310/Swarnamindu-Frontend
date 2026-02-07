import { UserRole } from "./user.constants";

export const NAV_ITEMS = [
  { label: 'Dashboard', path: '/', icon: 'Home', roles: [UserRole.ADMIN, UserRole.USER] },
  { label: 'Screening', path: '/screening', icon: 'Activity', roles: [UserRole.ADMIN, UserRole.USER] },
  { label: 'Analytics', path: '/analytics', icon: 'BarChart3', roles: [UserRole.ADMIN] },
  { label: 'Sync', path: '/sync', icon: 'RefreshCw', roles: [UserRole.ADMIN, UserRole.USER] },
  { label: 'Settings', path: '/settings', icon: 'Settings', roles: [UserRole.ADMIN, UserRole.USER] },
];