import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

export const Login = () => (
    
  <div>
    <head>
      <title>Login</title>
    </head>
    <body>
      <h2>Acessar conta</h2>

    <Formik  
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <p>Ainda não tem cadastro? <strong>
          <Link to="/register"><strong>Cadastre-se Aqui!</strong></Link>
          </strong></p>
        </form>
      )}
    </Formik>
      </body>
    <footer>
      <p>&copy; 2022 - Todos os direitos reservados <strong>Orion</strong> By Olá Mundo</p>
    </footer>
  </div>
);

