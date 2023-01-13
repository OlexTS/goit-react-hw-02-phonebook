import PropTypes from 'prop-types';
import {
  List,
  Item,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactName>
            {name}:<ContactNumber>{number}</ContactNumber>
          </ContactName>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
