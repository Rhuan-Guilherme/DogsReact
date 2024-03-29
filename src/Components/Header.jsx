import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../assets/dogs.svg?react';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        {data ? (
          <Link className={style.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
