import { Formik, ErrorMessage} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Input, FormCont, Label, SubmitButton, Text } from './ContactForm.styled';



const schema = yup.object().shape({
  // name: yup.string.isRequired().max(5, 'Must be exactly 5 digits'),
  // number: yup.string.max(4).isRequired()
});
const initialValues = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // handleChange = event => {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value });
  // };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  // reset = () => {
  //   this.setState({ name: '', number: ''});
  // };

  render() {
    // const { name, number } = this.state;
    return (
      <Formik initialValues={initialValues} validationSchema={schema}  onSubmit={this.handleSubmit}>
        <FormCont autoComplete="off">
          <Label>
            <Text>Name</Text> 
            <Input
              type="text"
              name="name"
              // value={initialValues.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Jack Daniel"
              required
            />
            <ErrorMessage name="name" />
          </Label>
          <Label>
           <Text>Number</Text> 
            <Input
              type="tel"
              name="number"
              // value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="000-00-00"
              required
            />
            <ErrorMessage name="number" />
          </Label>
          <SubmitButton type="submit">Add contact</SubmitButton>
        </FormCont>
      </Formik>
    );
  }
}

export default ContactForm;
