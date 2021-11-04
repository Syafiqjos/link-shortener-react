import './RegisterForm.css';

function RegisterForm(){
    return (
        <form className="form form--light">
            <span className="form__title">Register new account</span>
            <div className="form__group-item">
                <label form className="form__item-header form__item-header--start">Email</label>
                <input className="form__input-text" name="email" type="text" placeholder />
                <span className="form__item-info">Input a valid email address</span>
            </div>
            <div className="form__group-item">
                <label form className="form__item-header form__item-header--start">Password</label>
                <input className="form__input-text" name="password" type="password" placeholder />
                <span className="form__item-info">Password must contain at least 8 characters</span>
            </div>
            <div className="form__group-item">
                <label form className="form__item-header form__item-header--start">Password confirmation</label>
                <input className="form__input-text" name="password_confirmation" type="password" placeholder />
                <span className="form__item-info">Retype your password to make sure it right</span>
            </div>
            <div className="form__group-item form__group-item--right">
                <input className="form__btn btn btn--primary btn--medium" value="Sign up" />
            </div>
        </form>
    );
}

export default RegisterForm;