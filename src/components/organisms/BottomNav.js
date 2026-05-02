import { el } from '../../utils/dom.js';

export const BottomNav = (links) => {
    const nav = el('div', 'bg-base-200 p-3 flex justify-evenly border-t border-gray-700');
    links.forEach((l) => nav.appendChild(l));
    return nav;
}