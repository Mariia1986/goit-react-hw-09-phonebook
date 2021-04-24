import React, { Component } from "react";
import {useDispatch, useSelector } from "react-redux";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/contacts/actions/userActions";
import { filterContact} from '../../redux/contacts/selectors'

const Filter=() =>{
  const filter=useSelector(filterContact);
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  
    return ( 
      <>
    <h2 className={s.filterTitle}>Contacts</h2>
      <div className={s.filterConteiner}>
     
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          name="filter"
          value={filter}
          onChange={handleFilter}
          type="text"
        />
      </label>
      </div>
      </>
    );
  }




Filter.propTypes = {
  filter: PropTypes.string,
  search: PropTypes.func,
};

export default Filter;
