import "./steps.css";

const steps = [
    {
        number: "01",
        title: "Choose Your Course",
        description:
            "Browse 40+ tech courses across development, data, design, security, and more.",
    },
    {
        number: "02",
        title: "Apply & Enroll",
        description:
            "Pick a payment plan. Fill the simple application form and complete your enrollment.",
    },
    {
        number: "03",
        title: "Learn Live & Build",
        description:
            "Attend live classes online or onsite. Build real projects with guidance from expert instructors.",
    },
    {
        number: "04",
        title: "Get Hired",
        description:
            "Graduate with a portfolio, certificate, and CV. Get matched with hiring opportunities.",
    },
];

const Steps = () => {
    return (
        <section className="journey-section" aria-labelledby="journey-title">
            <div className="journey-inner">
                <h2 className="journey-title" id="journey-title">
                    Your journey to a tech career in 4 simple steps
                </h2>
                <span className="journey-accent" aria-hidden="true" />
                <p className="journey-intro">
                    From curious beginner to job-ready professional.
                    Here&apos;s how it works.
                </p>

                <ol className="journey-steps">
                    {steps.map((step) => (
                        <li className="journey-step" key={step.number}>
                            <span className="journey-number">{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Steps
