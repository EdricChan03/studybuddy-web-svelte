import type { Component } from 'svelte';

import CalendarIcon from '@lucide/svelte/icons/calendar';
import CircleCheckBigIcon from '@lucide/svelte/icons/circle-check-big';
import CircleHelpIcon from '@lucide/svelte/icons/circle-help';
import HomeIcon from '@lucide/svelte/icons/home';
import InfoIcon from '@lucide/svelte/icons/info';
import NewspaperIcon from '@lucide/svelte/icons/newspaper';
import SettingsIcon from '@lucide/svelte/icons/settings';

export type Link =
  | {
      name: string;
      url: string;
      icon: Component;
    }
  | { separator: true };

export const links: Link[] = [
  { name: 'Home', url: '', icon: HomeIcon },
  { name: 'Tasks', url: 'tasks', icon: CircleCheckBigIcon },
  { name: 'Calendar', url: 'calendar', icon: CalendarIcon },
  { separator: true },
  { name: 'Help', url: 'help', icon: CircleHelpIcon },
  { separator: true },
  { name: 'Settings', url: 'settings', icon: SettingsIcon },
  { name: 'Release notes', url: 'release-notes', icon: NewspaperIcon },
  { separator: true },
  // { name: 'Apps', url: 'apps', icon: 'apps' },
  { name: 'About', url: 'about', icon: InfoIcon }
];
