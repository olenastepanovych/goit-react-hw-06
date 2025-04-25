import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
const dispatch = useDispatch();

return (
    <li className={styles.item}>
    <div className={styles.info}>
        <span className={styles.text}>
        <FaUser className={styles.icon} size={20} /> {contact.name}
        </span>
        <span className={styles.text}>
        <FaPhoneAlt className={styles.icon} size={20} /> {contact.number}
        </span>
    </div>
    <button className={styles.button} onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
    </button>
    </li>
);
};

export default Contact;