import s from './ContactList.module.css';
import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
        <button className={s.button} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
