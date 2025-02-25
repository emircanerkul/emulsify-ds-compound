import breadcrumb from './breadcrumbs/breadcrumbs.twig';
import inlineMenu from './inline/inline-menu.twig';
import mainMenu from './main-menu/main-menu.twig';
import socialMenu from './social/social-menu.twig';

import breadcrumbsData from './breadcrumbs/breadcrumbs.yml';
import inlineMenuData from './inline/inline-menu.yml';
import mainMenuData from './main-menu/main-menu.yml';
import socialMenuData from './social/social-menu.yml';

import './main-menu/main-menu';

import './breadcrumbs/_breadcrumbs.component.scss';
import './inline/_inline-menu.component.scss';

import './main-menu/_00-main-menu.component.scss';
import './main-menu/_01-main-menu-item.component.scss';
import './main-menu/_02-main-menu-link.component.scss';
import './main-menu/_03-main-menu-toggle.component.scss';
import './social/_social-menu.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => breadcrumb(breadcrumbsData);

export const inline = () => inlineMenu(inlineMenuData);

export const main = () => mainMenu(mainMenuData);

export const social = () => socialMenu(socialMenuData);
