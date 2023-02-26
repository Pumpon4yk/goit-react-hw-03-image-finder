import { Formik } from 'formik';
import { Header, SearchForm, Input, Button } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';


const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={values => {
          const { name } = values;
          if (!name.trim()) {
            return;
          }
          onSubmit(name.trim());
        }}
      >
        {props => (
          <SearchForm onSubmit={props.handleSubmit}>
            <Button type="submit" aria-label="search">
              <BsSearch />
            </Button>

            <Input
              type="text"
              name="name"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        )}
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Searchbar;
