import './LoginPage.css';

import { Link } from 'react-router-dom';

// Components
import RegisterForm from '../components/RegisterForm';
import CopyrightFooter from '../components/CopyrightFooter';

function RegisterPage() {
    return (
        <div className="page">
            <main className="splitter">
                <div className="splitter__left">
                    <RegisterForm />
                </div>
                <div className="splitter__right">
                    <p>
                        Already have an account?
                        <br /> 
                        <Link to="/sign-in">Sign in {'>'}</Link>
                    </p>
                </div>
            </main>
            <CopyrightFooter />
        </div>
    );
}

export default RegisterPage;