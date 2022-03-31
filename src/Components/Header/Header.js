import { useNavigate } from 'react-router-dom';


const Header = () => {

    const history = useNavigate();
    const go_to_the_link = (url) => {
        history(url);
    }

    return (
        <div className="h">
            header
        </div>
    )
};

export default Header;