import "./herosectionvideo.css";
import heroVideo from "../assets/skytechfusionvideo.mp4";

export const HeroVideoSection = () => {
    return (
        <section id="home" className="hero-video" aria-labelledby="hero-video-title">
            <video
                className="hero-video__background"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                tabIndex={-1}
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-video__scrim" aria-hidden="true" />

            <div className="hero-video__content">
                <p className="hero-video__eyebrow">Sky Tech Fusion Technology and Multimedia Institute</p>
                <h1 id="hero-video-title" className="hero-video__title">
                    <span>Technology Skills</span>
                    <span className="hero-video__title-accent">for a Digital Future</span>
                </h1>
                <p className="hero-video__description">
                    Develop practical skills in programming, software development,
                    emerging technologies, creative design, and financial education
                    through hands-on training built for real-world opportunities.
                </p>
            </div>
        </section>
    )
}
