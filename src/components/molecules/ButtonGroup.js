import { el } from '../../utils/dom.js';

export const ButtonGroup = (name, labels, activeIndex = 0) => {
    const group = el('div', 'join rounded-l overflow-hidden');
    labels.forEach((label, i) => {
        const tab = el('input', 'join-item btn btn-soft checked:btn-primary');
        tab.type = 'radio';
        tab.name = name;
        tab.value = String(i);
        tab.setAttribute('aria-label', label);
        if (i === activeIndex) tab.checked = true;
        group.appendChild(tab);
    });
    return group;
};
