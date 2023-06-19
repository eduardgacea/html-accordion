'use strict';

const questions = document.querySelectorAll('.question');

for (const question of questions) {
  question.addEventListener('click', () => {
    const [, answer] = question.parentNode.children;
    const [, arrowContainer] = question.parentNode.parentNode.children;
    const [arrowSvg] = arrowContainer.children;
    arrowSvg.setAttribute('transform', 'rotate(180)');
    answer.classList.toggle('hidden');
    arrowSvg.src = answer.classList.contains('hidden') ? `assets/icon-arrow-down.svg` : `assets/icon-arrow-up.svg`;
  });
}
