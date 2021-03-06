import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


const ContactComponents = () => {

    return (
        <div className="contact-container">
            <div className="contact-container-form">

                <h2>Contacto Components</h2>

                <Formik 
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        terms: false,
                        jobType: '',
                    }}
                    
                    onSubmit={(values) => {
                        console.log(values)
                    }}

                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe tener 15 letras o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(15, 'Debe tener 15 letras o menos')
                            .required('Requerido'),

                        email: Yup.string()
                            .email('No tiene un formato válido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()  
                                    .notOneOf([ '3' ], 'Esta opción no es permitida')
                                    .required('Requerido') 
                    })

                    }>



                    {(formik) => (
                        <Form  className="contact-container-form-fields">
                            <label htmlFor="firstName">Nombre</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Apellido</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Seleccione</label>

                            <Field name="jobType" as="select">
                                <option value="">Selecciona una opción</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Field>

                            <ErrorMessage name="jobType" component="span" />

                            <label>Términos
                            <Field name="terms" type="checkbox" /></label>
                            <ErrorMessage name="terms" component="span" />

                            <button type="submit">Enviar</button>
                        </Form>
                    )
                    }

                </Formik>

            </div>
        </div>
    )
};

export default ContactComponents;