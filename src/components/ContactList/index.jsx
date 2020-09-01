import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import ContactListItem from "../ContactListItem";
import "./ContactList.css";

function ContactList({ removeItem, contacts }) {
  return (
    <>
      <TransitionGroup component="ul" className="ContactList">
        {contacts.map(({ name, id, number }) => (
          <CSSTransition key={id} timeout={250} classNames="contactListItem">
            <ContactListItem
              itemName={name}
              itemNumber={number}
              onRemoveItem={() => removeItem(id)}
            />
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
const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(phonebookActions.deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
