import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '50px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1 className={css.titel}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titel}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
