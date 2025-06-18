const show_tournament = (title) => {
    document.querySelector('.navigation__games__game_active').classList.remove('navigation__games__game_active');
    document.querySelector(`#nav_games_${title}`).classList.add('navigation__games__game_active');
}