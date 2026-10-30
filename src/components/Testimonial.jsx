import "./testimonial.css";

const testimonials = [
    {
        quote:
            "Sky Tech Fusion's Cyber Security programme is intense — but worth every kobo. The hands-on labs made the lessons practical, and I now feel more confident learning and applying real-world security skills.",
        name: "Ibrahim Yusuf",
        role: "Student Remark",
        initials: "IY",
        rating: 5,
    },
    {
        quote:
            "The lessons were clear, practical, and easy to follow. I gained more confidence in my tech skills and can now apply what I learned to real projects with much more ease.",
        name: "Yemi Adesokan",
        role: "Student Remark",
        initials: "YA",
        rating: 5,
    },
    {
        quote:
            "I'm still in school, but the evening classes fit perfectly with my schedule. The training is practical, motivating, and has already helped me improve my skills and build confidence for my future career.",
        name: "Blessing Okonkwo",
        role: "Student Remark",
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
