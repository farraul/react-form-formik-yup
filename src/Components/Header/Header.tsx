import { useNavigate } from 'react-router-dom';


const Header = () => {

    const history = useNavigate();
    const go_to_the_link = (url:string) => {
        history(url);
    }

    return (
        <div className="header-container">
            header

            <div className='header-container-menu'>
                <div className="header-menu-links" onClick={() => go_to_the_link("/")}>Inicio</div>
                <div className="header-menu-links" onClick={() => go_to_the_link("/contacto-formik")}>Contacto (formik)</div>
                <div className="header-menu-links" onClick={() => go_to_the_link("/contacto-yup")}>Contact (yup)</div>

            </div>
        </div>
    )
};

export default Header;