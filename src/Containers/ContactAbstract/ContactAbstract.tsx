import { Formik, Form } from "formik";
import * as Yup from 'yup'

import  { MyCheckbox, MyTextInput, MySelect } from "../../Components/Forms/index";

const ContactComponents = () => {

    return (
        <div className="contact-container">
            <div className="contact-container-form">

                <h2>Contacto Abstract</h2>

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
                            .notOneOf(['3'], 'Esta opción no es permitida')
                            .required('Requerido')
                    })

                    }>

                    {(formik) => (
                        <Form className="contact-container-form-fields">
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="Nombre"
                            />

                            <MyTextInput
                                label="LastName"
                                name="lastName"
                                placeholder="Apellido"
                            />

                            <MyTextInput
                                label="Dirección de email"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />

                            <MySelect label={"Trabajo"} name={"jobType"}>
                                <option value="">Selecciona una opción</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </MySelect>

                            <MyCheckbox label="Términos" name="terms" />

                            <button type="submit">Enviar</button>
                        </Form>
                    )
                    }

                </Formik>

            </div>
        </div >
    )
};

export default ContactComponents;