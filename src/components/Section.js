import './Section.css';

function Section(props) {
    return (
        <section className="section">
            <h3 className="section__title">{ props.title }</h3>
            <p className="section__subtitle">{ props.subtitle }</p>
            <div className="section__content">
                { props.children }
            </div>
        </section>
    );
}

export default Section;