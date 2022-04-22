export type Link = {
  name: string;
  url: string;
  icon: string;
} | { separator: true };

export const links: Link[] = [
  { name: 'Home', url: '', icon: 'home' },
  { name: 'Tasks', url: 'tasks', icon: 'task_alt' },
  { name: 'Calendar', url: 'calendar', icon: 'today' },
  { separator: true },
  { name: 'Help', url: 'help', icon: 'help_outline' },
  { separator: true },
  { name: 'Settings', url: 'settings', icon: 'settings' },
  { name: 'Release notes', url: 'release-notes', icon: 'new_releases' },
  { separator: true },
  { name: 'Apps', url: 'apps', icon: 'apps' },
  { name: 'About', url: 'about', icon: 'info' }
];
