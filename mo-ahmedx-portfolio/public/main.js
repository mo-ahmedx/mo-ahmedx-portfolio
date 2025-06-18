function showSidebar() {
      document.querySelector('.side-bar').style.display = 'flex';
    }
function hideSidebar() {
      document.querySelector('.side-bar').style.display = 'none';
    }
    document.querySelectorAll('.side-bar a').forEach(link => {
      link.addEventListener('click', hideSidebar);
    });
