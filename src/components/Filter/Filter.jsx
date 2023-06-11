import { useDispatch, useSelector } from 'react-redux';
import { qwery } from 'redux/sliceFilter';
import css from './Filter.module.css';

const Filter = function () {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        placeholder="Enter a name"
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(qwery(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
