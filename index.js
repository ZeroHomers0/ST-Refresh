(function() {
  const BUTTON_ID = 'manual_refresh_button';

  // 添加刷新按钮到菜单（功能不变，仅调整样式）
  function addRefreshButton() {
    if (document.getElementById(BUTTON_ID)) return;

    // 找到扩展菜单或 options 菜单
    let menu = document.getElementById('extensionsMenu') || document.getElementById('options');
    if (!menu) {
      console.warn('[RefreshButton] Menu not found. Cannot add refresh button.');
      return;
    }

    // ========== 核心样式调整：完全对齐保存按钮的结构和样式 ==========
    // 1. 创建外层容器（对应保存按钮的div，带完整样式类）
    const btn = document.createElement('div');
    btn.id = BUTTON_ID;
    // 复制保存按钮的所有样式类，保证视觉一致
    btn.className = 'list-group-item flex-container flexGap5 interactable tavern-helper-shortcut-item';
    // 添加鼠标悬浮提示（对应保存按钮的title属性）
    btn.title = '手动刷新当前页面';

    // 2. 创建图标容器（对应保存按钮的fa-solid fa-save容器）
    const iconDiv = document.createElement('div');
    // 图标样式类（保持和保存按钮一致的按钮样式，可根据需求替换图标类，这里先用刷新图标）
    iconDiv.className = 'fa-solid fa-refresh extensionsMenuExtensionButton';

    // 3. 创建文字span（对应保存按钮的span）
    const textSpan = document.createElement('span');
    textSpan.innerText = '刷新页面';

    // 4. 将图标和文字添加到按钮容器中（保持结构一致）
    btn.appendChild(iconDiv);
    btn.appendChild(textSpan);

    // 点击事件（功能完全保留，无修改）
    btn.addEventListener('click', () => {
      console.log('[RefreshButton] 页面刷新触发');
      location.reload(); // 刷新页面
    });

    // 添加到菜单
    menu.appendChild(btn);
  }

  // 尝试多次添加按钮（页面可能尚未加载菜单）
  const interval = setInterval(() => {
    const menu = document.getElementById('extensionsMenu') || document.getElementById('options');
    if (menu) {
      addRefreshButton();
      clearInterval(interval);
    }
  }, 500);
})();
