import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";

function Filter({ filterItems }) {
  return (
    <>
      <div>
        <p>Find contacts by name</p>
        <input
          name="filter"
          type="text"
          onChange={(e) => filterItems(e.currentTarget.value)}
        />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    filter: state.phonebookReducer.filter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  filterItems: (filter) => dispatch(phonebookActions.filterItem(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
