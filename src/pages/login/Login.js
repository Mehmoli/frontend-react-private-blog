import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <p>Druk op de konp om in te loggen.</p>
            <Link to="/blogs-overzicht">
                <button>Inloggen</button>
            </Link>
        </>
    )
}

export default Login;