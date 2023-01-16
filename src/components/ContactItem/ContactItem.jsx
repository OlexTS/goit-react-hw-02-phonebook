import { Item, ContactName, ContactNumber, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ item: {name, number, id}, onDeleteContact}) => {
    return      <Item>
    <ContactName>
            {name}:<ContactNumber>{number}</ContactNumber>
          </ContactName>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
        </DeleteBtn>
    </Item>
}

export default ContactItem;