import './LandingPageContent.css';

// Components
import Section from './Section';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LandingPageContent() {
    return (
        <div class="landing-content">
            <Section title="Easy, simple and fast!" subtitle="Easy as input your chosen link, simple as tap Short It button and fast as free without making an account first!">
                <form className="landing-content__shortener-form">
                    <input type="text" name="url" placeholder="input your favorite link here!" />
                    <input className="btn btn--secondary btn--medium" type="submit" value="Short it!" />
                </form>
            </Section>
            <Section title="Managable and versatile" subtitle="or by create an account to manage you links and update it whichever you like!">
                <div className="landing-content__account-form">
                    <RegisterForm />
                    <LoginForm />
                </div>
            </Section>
            <Section title="Share to your friends!" subtitle="By creating shorten link, it’s easy to remember and visit your favorite links faster!">
                <form className="landing-content__shortener-form">
                    <input type="text" name="url" placeholder="input your favorite link here!" />
                    <input className="btn btn--secondary btn--medium" type="submit" value="Short it!" />
                </form>
            </Section>
        </div>
    );
}

export default LandingPageContent;