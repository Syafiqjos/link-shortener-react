import './LandingPage.css';

// Components
import Header from '../components/Header';
import LandingPagePreview from '../components/LandingPagePreview';
import LandingPageContent from '../components/LandingPageContent';
import CopyrightFooter from '../components/CopyrightFooter';

function LandingPage() {
    return (
        <div className="page">
            <Header />
            <main>
            <LandingPagePreview />
            <LandingPageContent />
            </main>
            <CopyrightFooter />
        </div>
    );
}

export default LandingPage;