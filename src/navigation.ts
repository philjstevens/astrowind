import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
      {text: 'Home', href: getPermalink()},
      {text: 'About', href: getPermalink('/about')},
      {
        text: 'Ski',
        links: [
          { text: 'Sail & Ski', href: getPermalink('/ski/sail-ski') },
          { text: 'Avalanche Courses', href: getPermalink('/ski/avalanche-courses') },
          { text: 'Ski Touring', href: getPermalink('/ski/ski-touring') },
          { text: 'Polar Night', href: getPermalink('/ski/polar-night') },
        ],
      },
      {
        text: 'Climb',
        links: [
          { text: 'North Norway Alpine', href: getPermalink('/climb/north-norway-alpine') },
          { text: 'Alpine Climbing', href: getPermalink('/climb/alpine-climbing') },
          { text: 'Winter Climbing', href: getPermalink('/climb/winter-climbing') },
        ],
      },
      {text: 'Booking', href: getPermalink('/booking')},
      {text: 'Contact', href: getPermalink('/contact')},
  ],
  actions: [{ text: 'Log In', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'More',
      links: [
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'How to Book', href: getPermalink('/booking') },
        { text: 'Contact Us', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Ski',
      links: [
        { text: 'Sail & Ski', href: getPermalink('/ski/sail-ski') },
        { text: 'Avalanche Courses', href: getPermalink('/ski/avalanche-courses') },
        { text: 'Ski Touring', href: getPermalink('/ski/ski-touring') },
        { text: 'Polar Night', href: getPermalink('/ski/polar-night') },
      ],
    },
    {
      title: 'Climb',
      links: [
        { text: 'North Norway Alpine', href: getPermalink('/climb/north-norway-alpine') },
        { text: 'Alpine Climbing', href: getPermalink('/climb/alpine-climbing') },
        { text: 'Winter Climbing', href: getPermalink('/climb/winter-climbing') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
        Copyright Polar Alpine & Ski Ltd, 2024. All rights reserved.
  `,
};
