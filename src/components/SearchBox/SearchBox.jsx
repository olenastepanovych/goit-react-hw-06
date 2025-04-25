import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
const dispatch = useDispatch();
const filter = useSelector(state => state.filters.name);

return (
    <label className={styles.label}>
    Find contacts by name
    <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
    />
    </label>
);
};

export default SearchBox;