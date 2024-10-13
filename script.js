let totalCookies = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

const cookieCountE1 = document.getElementById('cookieCount');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostE1 = document.getElementById('upgradeCost');

function updateCookieCount () {
  cookieCountE1.textContent = 'Cookies: ${totalCookies}';
}