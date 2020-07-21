import React from "react";
import { useFormik } from "formik";

import Box from "./Box";
import Text from "./Text";

const Form = ({ initialValues, onSubmit }) => {
  // TODO: we will need this area for extra form work.
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Box>
      <Text>A form will eventually go here</Text>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

Form.defaultProps = {
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
  },
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
};

export default Form;
