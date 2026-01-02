(function() {
  const BUTTON_ID = 'manual_refresh_button';

  // 添加刷新按钮到菜单
  function addRefreshButton() {
    if (document.getElementById(BUTTON_ID)) return;

    // 找到扩展菜单或 options 菜单
    let menu = document.getElementById('extensionsMenu') || document.getElementById('options');
    if (!menu) {
      console.warn('[RefreshButton] Menu not found. Cannot add refresh button.');
      return;
    }

    // 创建按钮
    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.innerText = '刷新页面';
    btn.style.margin = '5px';
    btn.style.padding = '5px 10px';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.style.backgroundColor = '#4CAF50';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.fontSize = '14px';

    // 点击事件
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
