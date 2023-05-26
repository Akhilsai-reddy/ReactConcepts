import { useFormik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as yup from "yup";
function FormikAttributes() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phn: "",
      email: "",
      location: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name  is required"),
      phn: yup.number().required("number is required"),
      email: yup.string().email('enter valide mail id').required("email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <h1>validating using YUP and Formik Attributes</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          <b>NAME:</b>
        </label>
        <input name="name" {...formik.getFieldProps("name")} placeholder=' enter name here'/>
        {formik.touched.name && formik.errors.name ? (
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        ) : (
          ""
        )}
        <br />
        <label htmlFor="name">
          <b>PHONE NO:</b>
        </label>
        <input
          name="phn"
          {...formik.getFieldProps("phn")}
          placeholder="Enter your phn no here"
        />
        {formik.touched.phn && formik.errors.phn ? (
          <span style={{ color: "red" }}>{formik.errors.phn}</span>
        ) : (
          ""
        )}
        <br />
        <label htmlFor="name">
          <b>EMAIL:</b>
        </label>
        <input
          name="email"
          {...formik.getFieldProps("email")}
          placeholder="Enter your mail here"
        />
        {formik.touched.email && formik.errors.email ? (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        ) : (
          ""
        )}
        <br />
        <label htmlFor="name">
          <b>LOCATIN:</b>
        </label>
        <input
          name="location"
          {...formik.getFieldProps("location")}
          placeholder="Enter your location here"
        />
        <br />
        <Button variant="outline-success" type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FormikAttributes;
