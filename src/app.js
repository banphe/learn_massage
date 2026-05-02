import { BottomNav } from './components/organisms/BottomNav.js';
import { LearnView } from './views/learnView.js';
import { SetupView } from './views/setupView.js';
import { LearnPresenter } from './presenters/learnPresenter.js';
import { SetupPresenter } from './presenters/setupPresenter.js';
import { NavLink } from './components/atoms/NavLink.js';

document.body.classList.add('h-dvh', 'flex', 'flex-col', 'overflow-hidden', 'bg-gray-100');

const root = document.createElement('div');
root.classList.add('flex', 'flex-col', 'flex-1', 'overflow-auto', 'p-2', 'gap-2', 'bg-gray-300', 'w-full', 'items-center');
document.body.append(root);

const learnV = new LearnView(root);
const setupV = new SetupView(root);

const learnLnk = NavLink(learnV, 'Learn', 'fa-book-open');
const setupLnk = NavLink(setupV, 'Setup', 'fa-gear');

new LearnPresenter(learnV);
new SetupPresenter(setupV);

window.location.hash ||= '#/learn';

const bottomNavBar = BottomNav([learnLnk, setupLnk]);
document.body.append(bottomNavBar);
