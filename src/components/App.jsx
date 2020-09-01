import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

import styles from "./App.module.css";
import "./App.css";

function App({ contacts }) {
  return (
    <div className={styles.container}>
      <CSSTransition
        in={true}
        appear={true}
        classNames="logo"
        timeout={500}
        unmountOnExit
      >
        <h1 className={styles.logo}>Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <h2>Contacts</h2>
      <CSSTransition
        in={contacts.length > 1 ? true : false}
        appear={true}
        classNames="filter"
        timeout={500}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <ContactList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebookReducer.items,
  };
};

export default connect(mapStateToProps)(App);
