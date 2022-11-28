import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik(
    {
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: values => {
          console.log(values);
          alert("Login Successful!")
      },
      validate: values => {
        let errors = {};
        if(!values.email){
          errors.email = 'Field required';
        } else if(!values.email.includes("@")) {
          errors.email = 'Username should be an email';
        }
        if(!values.password){
          errors.password = 'Field required';
        }
        return errors;
      }
    },
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Email: 
        <input id="emailField" name="email" type="text" 
          onChange={formik.handleChange} value={formik.values.email}
        />
        {formik.errors.email ? (<div id="emailError" className="error">{formik.errors.email}</div>) : null}
      </label><br/>
      <label>
        Password: 
        <input id="pswField" name="password" type="password" 
          onChange={formik.handleChange} value={formik.values.password}
        />
        {formik.errors.password ? (<div id="pswError" className="error">{formik.errors.password}</div>) : null}
      </label><br/>
      <button type="submit" id="submitBtn">Submit</button>
    </form>
  );
}

export default App;
