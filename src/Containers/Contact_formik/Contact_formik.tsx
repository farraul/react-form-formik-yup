import { useFormik, FormikErrors } from "formik";

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
}

const Contact = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!firstName) {
            errors.firstName = 'Required';
        } else if (firstName.length >= 15) {
            errors.firstName = 'Tiene que tener 15 letras o menos';
        }

        if (!lastName) {
            errors.lastName = 'Required';
        } else if (lastName.length >= 10) {
            errors.lastName = 'Tiene que tener 10 letras o menos';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
    });


    return (
        <div className="contact-container">
            <div className="contact-container-form">

                <h2>Contacto Formik</h2>
                <form onSubmit={handleSubmit} className="contact-container-form-fields" noValidate>

                    <label htmlFor="firstName">Nombre</label>
                    <input
                        type="text"
                        name="firstName"
                        onBlur={ handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                    
                    />
                    {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                    <label htmlFor="lastName">Apellido</label>
                    <input
                        type="text"
                        name="lastName"
                        onBlur={ handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                    />
                    {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onBlur={ handleBlur}
                        onChange={handleChange}
                        value={values.email}
                    />
                    {touched.email && errors.email && <span>{errors.email}</span>}
                    <button type="submit">Enviar</button>


                </form>









            </div>
        </div>
    )
};

export default Contact;