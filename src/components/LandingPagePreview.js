import './LandingPagePreview.css';
import HomeIcon from '../icons/home.svg';

function LandingPagePreview() {
    return (
        <div className="landing-preview">
            <div className="landing-preview__left">
                <div className="landing-preview__board">
                    <div className="landing-preview__board-face">
                        <img className="landing-preview__board-logo" src={ HomeIcon } alt="Logo" />
                        <h1 className="landing-preview__board-text">Shorten your Link!</h1>
                    </div>
                    <div className="landing-preview__board-hand"></div>
                </div>
            </div>
            <form className="landing-preview__right">
                <h2>
                    Take your step further<br />
                    and gather more visitors!
                </h2>
                <input type="text" name="url" placeholder="Try input your favorite link!" />
                <input className="btn btn--primary btn--medium" type="submit" value="Short it!" />
            </form>
        </div>
    );
}

export default LandingPagePreview;