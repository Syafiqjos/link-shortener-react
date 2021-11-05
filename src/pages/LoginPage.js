import './LoginPage.css';

import { Link } from 'react-router-dom';

// Components
import LoginForm from '../components/LoginForm';
import CopyrightFooter from '../components/CopyrightFooter';

function LoginPage() {
    return (
        <div className="page">
            <main className="splitter">
                <div className="splitter__left">
                    <Link to="/">{'<'} Back to home</Link>
                    <LoginForm />
                </div>
                <div className="splitter__right">
                    <p>
                        Don't have an account?
                        <br /> 
                        <Link to="/sign-up">Sign up {'>'}</Link>
                    </p>
                </div>
            </main>
            <CopyrightFooter />
        </div>
    );
}

export default LoginPage;