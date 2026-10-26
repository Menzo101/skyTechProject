import "./testimonial.css";

const testimonials = [
    {
        quote:
            "Sky Tech Fusion's Cyber Security programme is intense — but worth every kobo. I'm now a Security Engineer at MTN Nigeria, working on systems that protect millions of customers. The hands-on labs prepared me for the real world.",
        name: "Ibrahim Yusuf",
        role: "Security Engineer at MTN",
        initials: "IY",
        rating: 5,
    },
    {
        quote:
            "I trained 22 engineers through Sky Tech Fusion's corporate programme. ROI was visible within 3 months — better code quality, faster delivery and happier devs. I recommend them to every CEO I meet.",
        name: "Dr. Yemi Adesokan",
        role: "CTO, Lagos Health Tech Startup",
        initials: "YA",
        rating: 5,
    },
    {
        quote:
            "I'm 19 and still in university. Sky Tech Fusion's evening classes fit perfectly with my schedule. By the time I graduate, I'll already have 2 years of paid freelance backend work under my belt. The platform pays for itself.",
        name: "Blessing Okonkwo",
        role: "Student, University of Lagos",
        initials: "BO",
        rating: 5,
    },
];

function TestimonialCard({ testimonial }) {
    return (
        <article className="testimonial-card">
            <span className="testimonial-quote-mark" aria-hidden="true">
                “
            </span>

            <div
                className="testimonial-rating"
                role="img"
                aria-label={`${testimonial.rating} out of 5 stars`}
            >
                {Array.from({ length: testimonial.rating }, (_, index) => (
                    <span key={index} aria-hidden="true">
                        ★
                    </span>
                ))}
            </div>

            <blockquote className="testimonial-quote">
                “{testimonial.quote}”
            </blockquote>

            <footer className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                    {testimonial.initials}
                </span>
                <div className="testimonial-author-details">
                    <cite className="testimonial-name">{testimonial.name}</cite>
                    <p className="testimonial-role">{testimonial.role}</p>
                </div>
            </footer>
        </article>
    );
}

export const Testimonial = () => {
    return (
        <section
            className="testimonial-section"
            aria-labelledby="testimonial-title"
        >
            <div className="testimonial-inner">
                <header className="testimonial-heading">
                    <p className="testimonial-eyebrow">Success stories</p>
                    <h2 id="testimonial-title">
                        Real students. Real careers. Real impact.
                    </h2>
                    <span className="testimonial-accent" aria-hidden="true" />
                    <p className="testimonial-intro">
                        From corps members to professionals, market traders to
                        medical doctors <br />See how Sky Tech Fusion Graduates
                        are rewriting their futures.
                    </p>
                </header>

                <div className="testimonial-grid">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
