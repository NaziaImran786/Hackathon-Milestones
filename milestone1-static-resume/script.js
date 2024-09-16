"use strict";
var _a;
(_a = document.getElementById('toggle-skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = (skillsSection.style.display === 'none') ? 'block' : 'none';
    }
});
