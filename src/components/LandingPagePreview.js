import './LandingPagePreview.css';

function LandingPagePreview() {
    return (
        <div className="landing-preview">
            <div className="landing-preview__left">

            </div>
            <form className="landing-preview__right">
                <h2>
                    Take your step further<br />
                    and gather more visitors!
                </h2>
                <input type="text" name="url" />
                <input className="btn btn--primary btn--medium" type="submit" value="Short it!" />
            </form>
        </div>
    );
}

export default LandingPagePreview;