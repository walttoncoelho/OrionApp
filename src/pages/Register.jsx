import React from 'react';
import { Formik } from 'formik';

export const Register = () => (
    
  <div>
    <head>
      <title>Login</title>
    </head>
    <body>
      <h2>Criar uma conta</h2>

    <Formik  
      initialValues={{ user:'', name: '', email: '', password: '' }}
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
      
      }) => (
        <form onSubmit={handleSubmit}>
          <select
          name="user"
          id="user"
          size="3"
          multiple="multiple"
          onChange={handleChange}
          onBlur={handleBlur}
          >
          <option
          value={values.id}
          >Sou Cliente
          </option>
          <option
          value={values.id}
          selected="selected">
          Quero Ser Parceiro</option>
</select>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name} 
                      
          />          
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
            Criar conta
          </button>          
        </form>
      )}
    </Formik>
      </body>
    <footer>
      <p>&copy; 2022 - Todos os direitos reservados <strong>Orion</strong> By Olá Mundo</p>
    </footer>
  </div>
);

