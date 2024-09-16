document.getElementById('toggle-skills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.style.display = (skillsSection.style.display === 'none') ? 'block' : 'none';
    }
  });
  