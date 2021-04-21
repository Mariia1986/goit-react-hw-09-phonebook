import { connect } from "react-redux";
import operation from "../../redux/contacts/operation";
import ContactList from "./ContactList";
import PropTypes from "prop-types";
import {
  filteredContacts,
  
  getLoading

} from "../../redux/contacts/selectors";

const mapStateToProps = (state) => ({
  filteredCont: filteredContacts(state),
  isLoading:getLoading(state),
  
});
const mapDispatchToProps = (dispatch) => ({
  deleteCont: (id) => dispatch(operation.deleteContacts(id)),
  fetchCont: () => dispatch(operation.fetchContacts()),
  editCont:(obj)=>dispatch(operation.editContacts(obj))
});
ContactList.propTypes = {
  filteredNames: PropTypes.array,
  deleteItem: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
