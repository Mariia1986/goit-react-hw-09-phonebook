import React, { useState, useEffect, useCallback } from "react";
import s from "./ContactList.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Spinner from "../Loader/Loader";
import {useDispatch, useSelector } from "react-redux";
import operation from "../../redux/contacts/operation";
import {filteredContacts, getLoading} from "../../redux/contacts/selectors";
import EditContactForm from "./EditContactForm/EditContactForm";
import PropTypes from "prop-types";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredCont =useSelector(filteredContacts);
  console.log(filteredCont)
  const isLoading = useSelector(getLoading);
  const [editform, setEditForm] = useState(false);
  const [idContact, setIdContact] = useState(null);

  useEffect(() => {
    dispatch(operation.fetchContacts());
  }, [dispatch]);

  const onClickDelete = useCallback((id) => {
    dispatch(operation.deleteContacts(id));
  }, [dispatch]);

  const onClickEdit = (id) => {
    setEditForm(!editform);
    setIdContact(id);
  };
  console.log(filteredCont)
  return (
   
    <>
      {isLoading && <Spinner />}
      {
        <ul className={s.contaktList}>
          {filteredCont.map(({ id, name, number }) => (
            <li className={s.contaktListItem} key={id}>
              <div>
                {editform && id === idContact ? (
                  <EditContactForm
                    id={id}
                    currName={name}
                    currNumber={number}
                    editReset={onClickEdit}
                  />
                ) : (
                  <p className={s.contaktListName}>
                    {name} : {number}
                  </p>
                )}
              </div>
              <div className={s.buttonContainer}>
                <button
                  className={s.contaktListButton}
                  type="button"
                  onClick={() => onClickDelete(id)}
                >
                  <DeleteIcon color="primary" />
                </button>
                <button
                  className={s.contaktListButton}
                  type="button"
                  onClick={() => onClickEdit(id)}
                >
                  {!editform && <EditIcon color="primary"/>}
                </button>
              </div>
            </li>
          ))}
        </ul>
      }
    </>
  );
};


ContactList.propTypes = {
  filteredNames: PropTypes.array,
  deleteItem: PropTypes.func,
};


export default ContactList;
