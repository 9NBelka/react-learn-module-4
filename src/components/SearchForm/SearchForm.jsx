import { Field, Form, Formik } from "formik"

function SearchForm () {
  return (
    <Formik initialValues={{ query: ""}} onSubmit={(values, actions) => {
      console.log(values);
      actions.resetForm();
    }}>
      <Form>
        <Field name="query"></Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  )
  
}

export default SearchForm
