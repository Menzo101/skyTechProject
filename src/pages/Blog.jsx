import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./blog.css";

const articles = [
    {
        category: "Career Guide",
        title: "How to Start a Career in Software Development in Lagos",
        summary:
            "A practical guide to learning programming, building your first projects, and preparing for entry-level software development opportunities.",
        content:
            "Start with programming fundamentals and choose a beginner-friendly language such as Python or JavaScript. Consistent practice matters more than trying to learn every tool at once. Build small projects as you go, then use them to demonstrate how you approach real problems.",
        keywords: "software development in Lagos, coding classes in Lagos, programming training",
    },
    {
        category: "Programming",
        title: "Learning Python: A Practical First Step into Tech",
        summary:
            "Discover why Python programming is a useful starting point for learners interested in software, automation, data analysis, and artificial intelligence.",
        content:
            "Python has a readable syntax and is used across many areas of technology. Begin with variables, conditions, loops, and functions, then apply those concepts in small projects. A structured Python programming course can help you build good habits and get feedback as you learn.",
        keywords: "Python programming course, learn Python in Lagos, beginner coding",
    },
    {
        category: "Data & AI",
        title: "Data Analytics and AI Skills for the Modern Workplace",
        summary:
            "Learn how data analysis, machine learning, and artificial intelligence can support better decisions and open new technology career paths.",
        content:
            "Data skills start with asking clear questions, organizing information, and explaining what the results mean. From there, learners can explore data analysis, machine learning, and artificial intelligence. Combining technical practice with clear communication makes insights more useful to teams and organizations.",
        keywords: "data analytics training, artificial intelligence course, machine learning skills",
    },
    {
        category: "Cybersecurity",
        title: "Cybersecurity Fundamentals Every New Learner Should Know",
        summary:
            "Explore core cybersecurity concepts, responsible security practices, and the foundations of protecting digital systems and information.",
        content:
            "Cybersecurity begins with understanding common risks and how secure systems are designed. Learners can build a strong foundation by studying networks, access control, safe software practices, and responsible security testing in authorized environments.",
        keywords: "cybersecurity training in Lagos, information security, cyber safety",
    },
    {
        category: "Choosing a Course",
        title: "How to Choose the Right Technology Training Course",
        summary:
            "Compare course goals, practical projects, class support, and learning formats before choosing a technology course in Lagos.",
        content:
            "Start with the outcome you want, such as building websites, working with data, or creating visual content. Review the course topics, ask how much practical work is included, and choose a schedule you can maintain. A good learning plan should connect each lesson to skills you can demonstrate.",
        keywords: "technology courses in Lagos, tech training in Lagos, professional skills",
    },
];

export const Blog = () => {
    useEffect(() => {
        const previousTitle = document.title;
        let description = document.querySelector('meta[name="description"]');
        const previousDescription = description?.content;
        const createdDescription = !description;

        if (!description) {
            description = document.createElement("meta");
            description.name = "description";
            document.head.append(description);
        }

        document.title = "Technology & Career Blog | Sky Tech Fusion";
        description.content =
            "Explore practical technology learning guides, career advice, and insights on coding, data analytics, AI, and cybersecurity training in Lagos.";

        return () => {
            document.title = previousTitle;
            if (createdDescription) {
                description.remove();
            } else {
                description.content = previousDescription;
            }
        };
    }, []);

    return (
        <main className="blog-page">
            <header className="blog-hero">
                <span className="blog-eyebrow">SKY TECH FUSION INSIGHTS</span>
                <h1>Technology, skills, and career insights</h1>
                <p>
                    Practical learning guides and career advice for people exploring
                    technology courses in Lagos, software development, data analytics,
                    artificial intelligence, cybersecurity, and digital skills.
                </p>
            </header>

            <section className="blog-articles" aria-labelledby="blog-articles-title">
                <div className="blog-section-heading">
                    <span className="blog-eyebrow">THE LATEST</span>
                    <h2 id="blog-articles-title">Guides for your next step</h2>
                    <p>
                        Build a clearer learning plan with insights for beginners,
                        professionals, and aspiring tech creators.
                    </p>
                </div>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <article className="blog-card" key={article.title}>
                            <span className="blog-category">{article.category}</span>
                            <h3>{article.title}</h3>
                            <p className="blog-summary">{article.summary}</p>
                            <p className="blog-content">{article.content}</p>
                            <p className="blog-keywords">
                                <span>Explore:</span> {article.keywords}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="blog-cta" aria-labelledby="blog-cta-title">
                <div>
                    <span className="blog-eyebrow">READY TO LEARN?</span>
                    <h2 id="blog-cta-title">Turn your interest into practical skills</h2>
                    <p>
                        Explore hands-on courses in programming, design, data, and more
                        at Sky Tech Fusion.
                    </p>
                </div>
                <a href="/courses">
                    Explore courses
                    <FaArrowRight aria-hidden="true" />
                </a>
            </section>
        </main>
    );
};
