import { el } from '../../utils/dom.js';

export const ResizeGrip = (leftPanel, rightPanel) => {
    const grip = el('div', 'w-4 shrink-0 cursor-col-resize border-l border-l-transparent hover:border-l-gray-700 flex items-center justify-center border-r border-gray-700 bg-base-300 hover:bg-info-content transition-colors select-none');
    grip.appendChild(el('i', 'fa-solid fa-grip-vertical text-base-content opacity-50 pointer-events-none text-xs'));

    let dragged = false;

    grip.addEventListener('mousedown', e => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = rightPanel.offsetWidth;
        dragged = false;

        const onMove = ({ clientX }) => {
            const dx = startX - clientX;
            if (Math.abs(dx) > 3) dragged = true;
            if (dragged) {
                rightPanel.style.flex = 'none';
                rightPanel.style.width = `${Math.max(150, startWidth + dx)}px`;
            }
        };

        const onUp = () => {
            if (!dragged) toggle();
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });

    const toggle = () => {
        const isOpen = rightPanel.style.display !== 'none';
        rightPanel.style.display = isOpen ? 'none' : 'flex';
    };

    return grip;
};
