import { el } from '../utils/dom.js';

export class LearnView {
    constructor(container) {
        this.element = el('div', 'hidden flex flex-col flex-1 w-full p-0 gap-4');
        container.appendChild(this.element);
    }

    mount() {}

    show() { this.element.style.display = 'flex'; }
    hide() { this.element.style.display = 'none'; }
}
