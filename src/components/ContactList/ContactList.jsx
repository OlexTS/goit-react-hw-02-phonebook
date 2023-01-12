import PropTypes from 'prop-types';


const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({id, name, number}) => (
        <li key={id}>
          <p>
            {name} : {number}
          </p>
          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
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
