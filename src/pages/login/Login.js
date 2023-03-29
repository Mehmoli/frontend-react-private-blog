import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login({ toggleAuth }) {
    const navigate = useNavigate();

    function signIn() {
        toggleAuth(true);
        navigate('/');
    }

    return (
        <section className='login-page-section'>
            <div>
                <p>Druk op de konp om in te loggen.</p>

                <button type='button' onClick={signIn}>Inloggen</button>

            </div>
        </section>
    )
}

export default Login;