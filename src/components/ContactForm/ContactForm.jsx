import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
name: Yup.string().min(3).max(50).required(),
number: Yup.string().min(3).max(50).required(),
});

const ContactForm = () => {
const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts.items);

const handleSubmit = (values, actions) => {
    const normalizedName = values.name.toLowerCase();
    const isDuplicate = contacts.some(
    contact => contact.name.toLowerCase() === normalizedName
    );
    if (isDuplicate) {
    alert(`${values.name} is already in contacts.`);
    return;
    }
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
};

return (
    <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={ContactSchema}
    onSubmit={handleSubmit}
    >
    <Form className={styles.form}>
        <label className={styles.label}>
        Name
        <Field className={styles.input} name="name" />
        <ErrorMessage className={styles.error} name="name" component="div" />
        </label>
        <label className={styles.label}>
        Number
        <Field className={styles.input} name="number" />
        <ErrorMessage className={styles.error} name="number" component="div" />
        </label>
        <button type="submit" className={styles.button}>Add Contact</button>
    </Form>
    </Formik>
);
};

export default ContactForm;