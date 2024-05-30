function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

const logoContainer = document.getElementById('logo-container');
const logo = document.getElementById('logo');
const websiteName = document.getElementById('website-name');

logoContainer.addEventListener('mouseover', () => {
  logo.style.display = 'none';
  websiteName.style.display = 'inline';


  websiteName.style.fontSize = '1rem';
  websiteName.style.color = 'white';
});

logoContainer.addEventListener('mouseout', () => {
  logo.style.display = 'inline';
  websiteName.style.display = 'none';

});



