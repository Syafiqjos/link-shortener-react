import './LoginForm.css';

import { Link } from 'react-router-dom';

function LoginForm(){
    return (
        <form className="form form--light">
            <span className="form__title">Sign in to an account</span>
            <div className="form__group-item">
                <label form className="form__item-header form__item-header--start">Email</label>
                <input className="form__input-text" name="email" type="text" placeholder />
                <span className="form__item-info">Input a valid email address</span>
            </div>
            <div className="form__group-item">
                <label form className="form__item-header form__item-header--start">Password</label>
                <input className="form__input-text" name="password" type="password" placeholder />
                <span className="form__item-info">Input the account password</span>
            </div>
            <div className="form__group-item form__group-item--right form__group-item--row">
                <label form className="form__item-header form__item-header--center"><Link className="color--primary" to="/reset-password">Forgot your password?</Link></label>
                <input className="form__btn btn btn--primary btn--medium" value="Sign in" />
            </div>
        </form>
    );
}

export default LoginForm;