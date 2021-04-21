import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/contacts/actions/userActions";
import { filterContact} from '../../redux/contacts/selectors'

class Filter extends Component {
  handleFilter = (e) => {
    this.props.filterAct(e.currentTarget.value);
  };

  render() {
    return ( 
      <>
    <h2 className={s.filterTitle}>Contacts</h2>
      <div className={s.filterConteiner}>
     
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          name="filter"
          value={this.props.filter}
          onChange={this.handleFilter}
          type="text"
        />
      </label>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  
  filter: filterContact(state),
});
const mapDispatchToProps = {
  filterAct: filterContacts,
};

Filter.propTypes = {
  filter: PropTypes.string,
  search: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
