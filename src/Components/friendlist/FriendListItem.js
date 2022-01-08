import React from 'react';

import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const spanClasses = [s.status];
  if (isOnline) {
    spanClasses.push(s.statusIsOnline);
  }
  return (
    <li className={s.item}>
      <span className={spanClasses.join(' ')}></span>
      <img className={s.avatar} src={avatar} alt="Аватар пользователя" width="" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
