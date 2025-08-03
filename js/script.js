// ロード画面
window.addEventListener('load', () => {
  document.querySelector('#loading').classList.add('loaded');
});

// モード切替
document.querySelectorAll('.mode-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    console.log('モードを変更しました')
  });
});

// ギター紹介カード生成
const skills = [
  { level: '初心者', label: 'BEGINNER', image: 'beginner.png', link: 'beginner.html' },
  { level: '中級者', label: 'INTERMEDIATE', image: 'intermediate.png', link: 'intermediate.html' },
  { level: '上級者', label: 'ADVANCED', image: 'advanced.png', link: 'advanced.html' }
];

const skillSection = document.querySelector('#skillLevels');

skills.forEach(skill => {
  const card = `
    <li>
      <a href="${skill.link}" class="menu-card">
        <img src="img/${skill.image}" alt="${skill.level}">
        <h3>${skill.level}<span>${skill.label}</span></h3>
      </a>
    </li>
  `;
  skillSection.insertAdjacentHTML('beforeend', card);
});

