import React from "react";
import style from "./ContactListItem.module.css";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";

function ContactListItem({ name, number, removeItem }) {
  return (
    <>
      <li className={style.container}>
        <p className={style.name}>{name}</p>
        <div className={style.smallContainer}>
          <p className={style.number}>{number}</p>
          <button
            type="button"
            onClick={removeItem}
            className={style.removeBtn}
          ></button>
        </div>
      </li>
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  const item = state.phonebookReducer.items.find(
    (item) => item.id === ownProps.id
  );
  return { ...item };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(phonebookActions.deleteItem(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
