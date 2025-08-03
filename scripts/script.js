
// -------- открытие/закртыие списка турниров и матчей
const show_tournament = (title) => {
    const active = document.querySelector('.navigation__games__game_active');
    const next = document.querySelector(`#nav_games_${title}`);

    if (active) {
        active.classList.remove('navigation__games__game_active');
        active.classList.add('navigation__games__game_closed');
    }
    
    if (active != next) {
        if (active) {
            active.classList.remove('navigation__games__game_active');
            active.classList.add('navigation__games__game_closed');
        }
        next.classList.remove('navigation__games__game_closed');
        next.classList.add('navigation__games__game_active');
    }
}

const toggle_tournament = (title) => {
    const active = document.querySelector('.navigation__games__game__tournament_active');
    const next = document.querySelector(`#tournament-${title}`);

    if (active) {
        active.classList.remove('navigation__games__game__tournament_active');
        active.classList.add('navigation__games__game__tournament_closed');
    }
    
    if (active != next) {
        if (active) {
            active.classList.remove('navigation__games__game__tournament_active');
            active.classList.add('navigation__games__game__tournament_closed');
        }
        next.classList.remove('navigation__games__game__tournament_closed');
        next.classList.add('navigation__games__game__tournament_active');
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

const toggle_matchBlock = (id) => {
    document.querySelector(`#match_block-${id}`).classList.toggle('matchBlock_closed');
}

// -------- подсветка линий в статистике карт
const scope_map = (n) => {
    let z = 0;
    document.querySelectorAll('.maps__row').forEach(() => {
        document.querySelectorAll('.maps__row__values__value')[n + z].classList.add('maps__row__values__value_scope');
        z += 10;
    });
    document.querySelector(`#map_team-${n}`).classList.add('maps__head__key__teams__team_scope');
}

const unscope_map = () => {
    document.querySelectorAll('.maps__row__values__value_scope').forEach(el => {
        el.classList.remove('maps__row__values__value_scope');
    });
    document.querySelectorAll('.maps__head__key__teams__team_scope').forEach(el => {
        el.classList.remove('maps__head__key__teams__team_scope');
    });
}

const scope_map_two_verticals = (n) => {
    scope_map(n);
    scope_map(n + 1);
    document.querySelector(`#map_stat-${n * 0.5}`).classList.add('maps__head__key__top_scope');
}

const unscope_map_two_verticals = () => {
    unscope_map();
    document.querySelector('.maps__head__key__top_scope').classList.remove('maps__head__key__top_scope');
}

// -------- смена блоков статистики
const toggle_match_stat = (title) => {
    document.querySelector(`.meetings__hth`).classList.toggle('meetings__hth_active');
    document.querySelector(`.meetings__lustMatches`).classList.toggle('meetings__lustMatches_active');
    document.querySelector('.meetings__header__button_active').classList.remove('meetings__header__button_active');
    document.querySelector(`.meetings__header__button_${title}`).classList.add('meetings__header__button_active');
}

// -------- Показать/скрыть баланс

const toggle_visibility_balance = () => {
    if (user.visibility_balance) {
        user.visibility_balance = false;
        create_header();
    }
    else {
        user.visibility_balance = true;
        create_header();
    }
}