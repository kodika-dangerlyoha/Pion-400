const show_tournament = (title) => {
    const active = document.querySelector('.navigation__games__game_active');
    const next = document.querySelector(`#nav_games_${title}`);

    if (active) {
        active.classList.remove('navigation__games__game_active');
    }
    
    if (active != next) {
        next.classList.add('navigation__games__game_active');
    }
}

const toggle_bettingHistory = () => {
    document.querySelector('.bettingHistory').classList.toggle('bettingHistory_hidden');
    const bettingLog_active = document.querySelector('.bettingLog_active');
    if (bettingLog_active) {
        bettingLog_active.classList.remove('bettingLog_active');
    }
}

const show_pari = () => {
    document.querySelector('.bettingLog').classList.toggle('bettingLog_active');
    
    if (!document.querySelector('.bettingHistory_hidden')) {
        document.querySelector('.bettingHistory').classList.add('bettingHistory_hidden');
    }
}