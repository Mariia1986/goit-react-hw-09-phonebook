import React, {Component} from 'react'
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";

class Homepage extends Component {
   
    render() { 
        return ( <>
            

            <ContactForm />
            <div>
              
              <Filter />
              <ContactList />
            </div>
            </>
         );
    }
}
 
export default Homepage;