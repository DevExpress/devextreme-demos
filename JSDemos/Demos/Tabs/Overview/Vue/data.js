const tabsWithText = [
  {
    id: 0,
    text: 'User',
  },
  {
    id: 1,
    text: 'Analytics',
  },
  {
    id: 2,
    text: 'Clients',
  },
  {
    id: 3,
    text: 'Orders',
  },
  {
    id: 4,
    text: 'Favorites',
  },
  {
    id: 5,
    text: 'Search',
  },
];

const tabsWithIconAndText = [
  {
    id: 0,
    text: 'User',
    icon: 'user',
  },
  {
    id: 1,
    text: 'Analytics',
    icon: 'chart',
  },
  {
    id: 2,
    text: 'Clients',
    icon: 'account-box',
  },
  {
    id: 3,
    text: 'Orders',
    icon: 'orders-box',
  },
  {
    id: 4,
    text: 'Favorites',
    icon: 'bookmark',
  },
  {
    id: 5,
    text: 'Search',
    icon: 'search',
  },
];

const tabsWithIcon = [
  {
    id: 0,
    icon: 'user',
  },
  {
    id: 1,
    icon: 'chart',
  },
  {
    id: 2,
    icon: 'account-box',
  },
  {
    id: 3,
    icon: 'orders-box',
  },
  {
    id: 4,
    icon: 'bookmark',
  },
  {
    id: 5,
    icon: 'search',
  },
];

export const orientations = ['horizontal', 'vertical'];

export const stylingModes = [
  'primary',
  'secondary',
];

export const iconPositionsSelectBoxLabel = { 'aria-label': 'Icon positions' };

export const iconPositions = [
  'top',
  'start',
  'end',
  'bottom',
];

export default {
  getTabsWithText() {
    return tabsWithText;
  },
  getTabsWithIconAndText() {
    return tabsWithIconAndText;
  },
  getTabsWithIcon() {
    return tabsWithIcon;
  },
};
