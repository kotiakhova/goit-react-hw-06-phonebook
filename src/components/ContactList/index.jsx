import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import ContactListItem from "../ContactListItem";
import "./ContactList.css";

function ContactList({ contacts }) {
  return (
    <>
      <TransitionGroup component="ul" className="ContactList">
        {contacts.map(({ id }) => (
          <CSSTransition key={id} timeout={250} classNames="contactListItem">
            <ContactListItem id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.phonebookReducer.items.filter((contact) =>
      contact.name
        .toLowerCase()
        .includes(state.phonebookReducer.filter.toLowerCase())
    ),
  };
};

export default connect(mapStateToProps)(ContactList);
