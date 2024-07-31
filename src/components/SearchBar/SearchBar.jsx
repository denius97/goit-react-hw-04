import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSubmit }) => {
  const onSubmit = ({ searchQuery }) => {
    if (!searchQuery.trim().length) {
      toast.error("Please enter a search query");
      return;
    }
    handleSubmit(searchQuery);
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{ searchQuery: "" }} onSubmit={onSubmit}>
        <Form>
          <label>
            <Field
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">
              <FaSearch size="20px" />
            </button>
          </label>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
