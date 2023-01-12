import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => (
    <ul>
      <li key={(id = nanoid())}>
        <p>
          {name} : {number}
        </p>
        <button type="button">Delete</button>
      </li>
    </ul>
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default ContactList;
