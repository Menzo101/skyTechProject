import "./aboutthelogo.css";
import logoBreakdown from "../assets/aboutthelogo.jpeg";

const AboutTheLogo = () => {
    return (
        <section className="about-logo" aria-labelledby="about-logo-title">
            <div className="about-logo__container">
                <div className="about-logo__intro">
                    <p className="about-logo__eyebrow">Our visual identity</p>
                    <h2 id="about-logo-title">
                        More than a mark.
                        <span> A message in motion.</span>
                    </h2>
                    <p className="about-logo__lead">
                        The Sky Tech Fusion logo brings technology, creativity, and
                        forward movement together in one distinctive identity.
                        Every detail is designed to reflect who we are and the
                        impact we want to make.
                    </p>
                </div>

                <div className="about-logo__content">
                    <figure className="about-logo__visual">
                        <img
                            src={logoBreakdown}
                            alt="Sky Tech Fusion logo breakdown explaining its symbolism, colors, shapes, typography, and brand message"
                        />
                        <figcaption>
                            The thinking behind the Sky Tech Fusion identity
                        </figcaption>
                    </figure>

                    <div className="about-logo__details">
                        <article className="about-logo__detail">
                            <span className="about-logo__number" aria-hidden="true">01</span>
                            <div>
                                <h3>A symbol of possibility</h3>
                                <p>
                                    The flowing, ribbon-like “S” connects to our name
                                    while suggesting progress, creative thinking, and
                                    ideas moving forward.
                                </p>
                            </div>
                        </article>

                        <article className="about-logo__detail">
                            <span className="about-logo__number" aria-hidden="true">02</span>
                            <div>
                                <h3>Technology meets creativity</h3>
                                <p>
                                    Blue speaks to trust, intelligence, and innovation.
                                    Warm yellow adds optimism, energy, and the spark
                                    of imagination.
                                </p>
                            </div>
                        </article>

                        <article className="about-logo__detail">
                            <span className="about-logo__number" aria-hidden="true">03</span>
                            <div>
                                <h3>Built to move forward</h3>
                                <p>
                                    Layered curves create depth and motion, bringing
                                    different skills and disciplines together as one
                                    cohesive fusion.
                                </p>
                            </div>
                        </article>

                        <article className="about-logo__detail">
                            <span className="about-logo__number" aria-hidden="true">04</span>
                            <div>
                                <h3>Clear, confident, memorable</h3>
                                <p>
                                    Strong, modern lettering gives “SKY TECH” a
                                    confident voice, while the lighter “FUSION” balances
                                    it with openness and creativity.
                                </p>
                            </div>
                        </article>

                        <div className="about-logo__message">
                            <span className="about-logo__message-label">The idea behind it all</span>
                            <p>
                                Technology. Creativity. Real impact.
                                <span> That’s the Sky Tech Fusion promise.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTheLogo
