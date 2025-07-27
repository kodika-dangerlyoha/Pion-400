const create_header = () => {
    if (user.visibility_balance) {
        document.querySelector('#user_balance').textContent = `${user.balance}₽`;
        document.querySelector('.header__balance').classList.remove('header__balance_hiden');
    }
    else {
        document.querySelector('#user_balance').textContent = "Скрыт";
        document.querySelector('.header__balance').classList.add('header__balance_hiden');
    }
}

create_header();