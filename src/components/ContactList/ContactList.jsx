import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/sliceContact';

const ContactList = function () {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContact = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const filteredContacts = filterContact();

  return (
    <ul className={css.listContact}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.itemContact} key={id}>
          <p className={css.contactName}>
            {name}:{number}
          </p>
          <button
            data-id={id}
            onClick={() => dispatch(removeContact(id))}
            className={css.buttonDeleteContact}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
