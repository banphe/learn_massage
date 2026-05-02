import { el } from '../utils/dom.js';
import { ButtonGroup } from '../components/molecules/ButtonGroup.js';
import { ResizeGrip } from '../components/atoms/ResizeGrip.js';

export class LearnView {
    constructor(container) {
        this.element = el('div', 'hidden flex flex-col flex-1 w-full overflow-hidden');
        container.appendChild(this.element);
    }

    mount() {
        const toolbar = el('div', 'flex items-center gap-3 px-3 py-2 bg-base-300 border-b border-gray-700 shrink-0');

        const micWrap = el('div', 'relative');
        const micRing = el('span', 'animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75');
        micRing.style.display = 'none';
        const micBtn = el('button', 'btn btn-circle btn-sm relative');
        micBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
        let micActive = false;
        micBtn.addEventListener('click', () => {
            micActive = !micActive;
            micRing.style.display = micActive ? '' : 'none';
            micBtn.classList.toggle('btn-primary', micActive);
        });
        micWrap.append(micRing, micBtn);

        const videoWrap = el('div', 'ml-auto flex items-center gap-2');
        const videoToggle = el('input', 'toggle toggle-primary');
        videoToggle.type = 'checkbox';
        videoWrap.append(el('span', 'text-sm', 'Video'), videoToggle);

        toolbar.append(micWrap, ButtonGroup('tile-size', ['1','2','3','4','5'], 2), videoWrap);

        const left = el('div', 'flex-1 overflow-auto bg-base-300');
        const right = el('div', 'w-96 shrink-0 bg-base-100');
        const main = el('div', 'flex flex-row flex-1 overflow-hidden');
        main.append(left, ResizeGrip(left, right), right);

        this.element.append(toolbar, main);
    }

    show() { this.element.style.display = 'flex'; }
    hide() { this.element.style.display = 'none'; }
}
