function toggleNav() {
    let aside = document.getElementById('aside');
    aside.classList.toggle('aside--active');
}

let button = document.getElementById('navToggleButton');
button.addEventListener('click', toggleNav);

function toggleSearch() {
    let searchContainer = document.getElementById('navSearchContainer');
    searchContainer.classList.toggle('site-header__search-container--visible');

    let container = document.getElementById('navContainer');
    container.classList.toggle('site-header__container--hidden');
}

let searchButton = document.getElementById('navSearchButton');
searchButton.addEventListener('click', toggleSearch);

function toggleDropdown() {
    let dropdown = document.getElementById('navAccountDropdown');
    dropdown.classList.toggle('site-header__nav__dropdown--active');
}

let accountButton = document.getElementById('navAccountButton');
accountButton.addEventListener('click', toggleDropdown);