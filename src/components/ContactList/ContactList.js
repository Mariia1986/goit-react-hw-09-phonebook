import React, { useState, useEffect } from "react";
import s from "./ContactList.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Spinner from "../Loader/Loader";

import EditContactForm from "./EditContactForm.js/EditContactForm";

const ContactList=({fetchCont,  deleteCont, filteredCont,isLoading })=>{
   const[ editform, setEditForm]=useState(false);
   const[idContact, setIdContact]=useState(null)
   
   useEffect(()=>{
    fetchCont()
    
    
   },[])

const onClickDelete=(id)=>{
  deleteCont(id)
}

const onClickEdit = (id) => {
  setEditForm(!editform);
  setIdContact (id);
    };

  return(
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
                    onClick={()=>onClickEdit(id)}
                  >
                    {!editform && <EditIcon color="primary" />}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        }
      </>
  )
}







export default ContactList;
