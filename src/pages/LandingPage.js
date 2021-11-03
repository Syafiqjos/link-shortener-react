import './LandingPage.css';

// Components
import Header from '../components/Header';
import LandingPagePreview from '../components/LandingPagePreview';
import CopyrightFooter from '../components/CopyrightFooter';

function LandingPage() {
    return (
        <div className="page">
            <Header />
            <main>
                <LandingPagePreview />
            </main>
            <CopyrightFooter />
        </div>
    );
}

export default LandingPage;