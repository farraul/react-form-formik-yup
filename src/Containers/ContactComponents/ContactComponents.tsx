import { useFormik} from "formik";
import * as Yup from 'yup';


const Contact = () => {

    const {handleSubmit,errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                          .max(15, 'Debe tener 15 letras o menos')
                          .required('Requerido'),
            lastName: Yup.string()
            .max(15, 'Debe tener 15 letras o menos')
            .required('Requerido'),

            email: Yup.string()
            .email('No tiene un formato válido')
            .required('Requerido')   
        })

    });


    return (
        <div className="contact-container">
            <div className="contact-container-form">

                <h2>Contacto Components</h2>
                <form onSubmit={handleSubmit} className="contact-container-form-fields" noValidate>

                    <label htmlFor="firstName">Nombre</label>
                    <input
                        type="text"
                      {...getFieldProps('firstName')}
                    />
                    {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                    <label htmlFor="lastName">Apellido</label>
                    <input
                        type="text"
                        {...getFieldProps('lasttName')}
                    />
                    {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        {...getFieldProps('email')}
                    />
                    {touched.email && errors.email && <span>{errors.email}</span>}

                    <button type="submit">Enviar</button>


                </form>









            </div>
        </div>
    )
};

export default Contact;