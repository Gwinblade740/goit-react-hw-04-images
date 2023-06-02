import css from './Searchbar.module.css';
import propTypes from 'prop-types';
import React, {useState} from 'react'

export default function Searchbar({onSubmit}) {
  const [ value, setValue] = useState('')
  const handleChange = ({ target: { value } }) => {
    setValue(value)
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() !== '') {
      onSubmit(value);
    }

    setValue('');
  };
  return (
    <div>
        <header className={css.search_bar}>
          <form className={css.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
              <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={css.SearchForm_input}
              name="search"
              type="text"
              value={value}
              onChange={handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
  )
}


Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
