import { useEffect, useRef, useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaChartLine,
    FaClock,
    FaGraduationCap,
    FaUsers,
} from "react-icons/fa";
import "../components/courses.css";
import artificialIntelligenceImage from "../assets/artificial-intelligence.jpg";
import cloudComputingImage from "../assets/cloud-computing.jpg";
import cryptoImage from "../assets/crypto.jpg";
import cybersecurityImage from "../assets/cybersecurity.jpg";
import dataAnalysisImage from "../assets/data-analysis.jpg";
import financeInvestmentImage from "../assets/finance-investment.jpeg";
import graphicsDesignImage from "../assets/graphics-design.jpg";
import machineLearningImage from "../assets/machine-learning.jpg";
import motionGraphicsImage from "../assets/motion-graphics.jpg";
import programmingImage from "../assets/programming.jpg";
import uiUxImage from "../assets/ui-ux-design.jpg";
import videoEditingImage from "../assets/video-editing.jpg";

const categories = [
    { id: "all", label: "All Courses" },
    { id: "data", label: "Data" },
    { id: "creative", label: "Product And Creative Economy" },
    { id: "business", label: "Business" },
    { id: "ai", label: "Artificial Intelligence (AI)" },
    { id: "blockchain", label: "Blockchain" },
    { id: "cybersecurity", label: "Cyber Security" },
];

const courses = [
    {
        slug: "full-stack-web-development",
        title: "Full Stack Web Development",
        credential: "Professional Diploma",
        category: "data",
        image: programmingImage,
        duration: "26 weeks",
        level: "Beginner",
        learners: "300+",
        summary: "Build responsive websites and full-featured applications from the ground up.",
        description:
            "Learn to plan, build, and launch modern web applications. You'll work across front-end and back-end technologies, build a project portfolio, and develop the practical skills to take an idea from first sketch to working product.",
        curriculum: ["HTML, CSS and JavaScript", "React and modern front-end development", "APIs, databases and back-end fundamentals", "Portfolio projects and deployment"],
    },
    {
        slug: "cloud-computing-devops",
        title: "Cloud Computing & DevOps",
        credential: "Professional Diploma",
        category: "data",
        image: cloudComputingImage,
        duration: "26 weeks",
        level: "Beginner",
        learners: "300+",
        summary: "Learn cloud infrastructure, automation, and the tools behind reliable software delivery.",
        description:
            "Build a foundation in cloud platforms and DevOps practices. Learn how to deploy applications, automate repeatable tasks, and monitor services using workflows used by modern engineering teams.",
        curriculum: ["Cloud and Linux fundamentals", "Version control and CI/CD workflows", "Containers and infrastructure basics", "Monitoring, security and deployment projects"],
    },
    {
        slug: "data-analysis",
        title: "Data Analysis",
        credential: "Professional Diploma",
        category: "data",
        image: dataAnalysisImage,
        duration: "16 weeks",
        level: "Beginner",
        learners: "250+",
        summary: "Turn raw data into clear insights, useful dashboards, and confident decisions.",
        description:
            "Develop practical data skills, from cleaning and exploring datasets to presenting findings. You'll use spreadsheets, SQL, and visualization tools to answer real-world business questions.",
        curriculum: ["Spreadsheets and data cleaning", "SQL for querying data", "Analysis and visualization", "Insight presentation and portfolio projects"],
    },
    {
        slug: "artificial-intelligence",
        title: "Artificial Intelligence",
        credential: "Professional Diploma",
        category: "ai",
        image: artificialIntelligenceImage,
        duration: "20 weeks",
        level: "Beginner",
        learners: "200+",
        summary: "Explore practical AI concepts and build useful, responsible AI-powered projects.",
        description:
            "Understand how artificial intelligence is applied across industries. Learn core concepts, work with modern AI tools, and create projects that solve practical problems while considering responsible use.",
        curriculum: ["AI concepts and responsible use", "Working with AI tools and APIs", "Prompt design and workflow automation", "Applied AI portfolio project"],
    },
    {
        slug: "machine-learning",
        title: "Machine Learning",
        credential: "Professional Diploma",
        category: "ai",
        image: machineLearningImage,
        duration: "24 weeks",
        level: "Intermediate",
        learners: "180+",
        summary: "Use data and machine learning methods to build and evaluate predictive models.",
        description:
            "Learn the foundations of machine learning through hands-on exercises. Prepare datasets, train models, evaluate results, and communicate what your models can—and cannot—tell you.",
        curriculum: ["Python and data preparation", "Supervised and unsupervised learning", "Model evaluation and improvement", "End-to-end machine learning project"],
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        credential: "Professional Diploma",
        category: "creative",
        image: uiUxImage,
        duration: "16 weeks",
        level: "Beginner",
        learners: "300+",
        summary: "Design intuitive digital experiences through research, prototyping, and testing.",
        description:
            "Learn to understand user needs and turn them into clear, accessible digital experiences. Practice the complete design process, from early research and wireframes to polished prototypes and usability testing.",
        curriculum: ["User research and experience mapping", "Wireframing and interface design", "Prototyping and usability testing", "Design systems and case studies"],
    },
    {
        slug: "graphic-design",
        title: "Graphic Design",
        credential: "Professional Diploma",
        category: "creative",
        image: graphicsDesignImage,
        duration: "12 weeks",
        level: "Beginner",
        learners: "200+",
        summary: "Create compelling visual identities and designs for digital and print.",
        description:
            "Build core visual communication skills and learn to create thoughtful designs for real briefs. Develop confidence with layout, typography, color, and the tools used by creative teams.",
        curriculum: ["Design principles and visual research", "Typography, color and composition", "Brand identity and digital assets", "Portfolio development"],
    },
    {
        slug: "video-editing",
        title: "Video Editing",
        credential: "Professional Diploma",
        category: "creative",
        image: videoEditingImage,
        duration: "12 weeks",
        level: "Beginner",
        learners: "150+",
        summary: "Shape footage into polished, engaging stories for modern platforms.",
        description:
            "Learn the editing workflow from organizing footage to delivering a finished video. Practice pacing, sound, transitions, and color while creating work for different audiences and platforms.",
        curriculum: ["Editing workflow and storytelling", "Audio, transitions and pacing", "Color correction and finishing", "Exporting and publishing projects"],
    },
    {
        slug: "motion-graphics",
        title: "Motion Graphics",
        credential: "Professional Diploma",
        category: "creative",
        image: motionGraphicsImage,
        duration: "14 weeks",
        level: "Beginner",
        learners: "120+",
        summary: "Bring ideas to life with animation, movement, and visual storytelling.",
        description:
            "Explore the principles of motion design and create animations for social media, presentations, and video. Build a repeatable process from storyboard and design through animation and export.",
        curriculum: ["Motion principles and storyboarding", "Shape, text and graphic animation", "Compositing and visual polish", "Showreel project"],
    },
    {
        slug: "finance-investment",
        title: "Finance & Investment",
        credential: "Professional Diploma",
        category: "business",
        image: financeInvestmentImage,
        duration: "10 weeks",
        level: "Beginner",
        learners: "180+",
        summary: "Build financial confidence and understand the fundamentals of investing.",
        description:
            "Strengthen your understanding of personal finance and investment principles. Learn to assess goals, manage risk, and make informed decisions using practical, educational examples.",
        curriculum: ["Budgeting and financial planning", "Investment principles and risk", "Understanding financial markets", "Building a personal finance plan"],
    },
    {
        slug: "blockchain-cryptocurrency",
        title: "Blockchain & Cryptocurrency",
        credential: "Professional Diploma",
        category: "blockchain",
        image: cryptoImage,
        duration: "10 weeks",
        level: "Beginner",
        learners: "100+",
        summary: "Understand blockchain technology, digital assets, and their real-world uses.",
        description:
            "Get a grounded introduction to blockchain systems and cryptocurrency. Explore how distributed ledgers work, where the technology is used, and how to assess risks and claims critically.",
        curriculum: ["Distributed ledger fundamentals", "Wallets, tokens and transactions", "Blockchain applications and use cases", "Security, risk and responsible research"],
    },
    {
        slug: "cybersecurity",
        title: "Cyber Security",
        credential: "Professional Diploma",
        category: "cybersecurity",
        image: cybersecurityImage,
        duration: "20 weeks",
        level: "Beginner",
        learners: "220+",
        summary: "Learn the fundamentals of protecting systems, data, and digital identities.",
        description:
            "Develop an understanding of cybersecurity principles and defensive practices. Learn to recognize common risks, strengthen systems, and build responsible security habits in a guided learning environment.",
        curriculum: ["Security foundations and threat awareness", "Network and system fundamentals", "Identity, access and data protection", "Defensive security case studies"],
    },
];

function getCourseSlug() {
    const match = window.location.pathname.match(/\/courses\/([^/]+)\/?$/);
    return match?.[1] ?? null;
}

export const Courses = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeCourseSlug, setActiveCourseSlug] = useState(getCourseSlug);
    const sectionRef = useRef(null);

    useEffect(() => {
        const syncRoute = () => setActiveCourseSlug(getCourseSlug());
        window.addEventListener("popstate", syncRoute);
        return () => window.removeEventListener("popstate", syncRoute);
    }, []);

    useEffect(() => {
        const selectCategory = (event) => {
            setActiveCategory(event.detail);
            setActiveCourseSlug(null);
        };

        window.addEventListener("skytech:course-category", selectCategory);
        return () => window.removeEventListener("skytech:course-category", selectCategory);
    }, []);

    const activeCourse = courses.find((course) => course.slug === activeCourseSlug);
    const visibleCourses = activeCategory === "all"
        ? courses
        : courses.filter((course) => course.category === activeCategory);

    const openCourse = (event, course) => {
        event.preventDefault();
        window.history.pushState({}, "", `/courses/${course.slug}`);
        setActiveCourseSlug(course.slug);
        window.scrollTo({
            top: sectionRef.current?.offsetTop ?? 0,
            behavior: "smooth",
        });
    };

    const showCourseList = () => {
        window.history.pushState({}, "", "/courses");
        setActiveCourseSlug(null);
    };

    return (
        <section className="courses-section" id="courses" ref={sectionRef}>
            <div className="courses-inner">
                {activeCourse ? (
                    <article className="course-detail">
                        <button className="course-back" type="button" onClick={showCourseList}>
                            <FaArrowLeft aria-hidden="true" />
                            All courses
                        </button>

                        <div className="course-detail-layout">
                            <div className="course-detail-copy">
                                <span className="course-eyebrow">{activeCourse.credential}</span>
                                <h2>{activeCourse.title}</h2>
                                <p className="course-detail-summary">{activeCourse.summary}</p>

                                <div className="course-meta course-detail-meta">
                                    <span><FaClock aria-hidden="true" />{activeCourse.duration}</span>
                                    <span><FaChartLine aria-hidden="true" />{activeCourse.level}</span>
                                    <span><FaUsers aria-hidden="true" />{activeCourse.learners} learners</span>
                                </div>

                                <p className="course-detail-description">{activeCourse.description}</p>

                                <h3>What you&apos;ll learn</h3>
                                <ul className="course-curriculum">
                                    {activeCourse.curriculum.map((item) => (
                                        <li key={item}>
                                            <FaGraduationCap aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    className="course-enquire"
                                    href={`mailto:Skytechfusion@gmail.com?subject=${encodeURIComponent(`Course enquiry: ${activeCourse.title}`)}`}
                                >
                                    Enquire about this course
                                    <FaArrowRight aria-hidden="true" />
                                </a>
                            </div>
                            <img
                                className="course-detail-image"
                                src={activeCourse.image}
                                alt={`${activeCourse.title} course`}
                            />
                        </div>
                    </article>
                ) : (
                    <>
                        <div className="courses-heading">
                            <span className="course-eyebrow">LEARN IN-DEMAND SKILLS</span>
                            <h2>Explore our courses</h2>
                            <p>Choose a course and take the next step in your career.</p>
                        </div>

                        <div className="course-filters" aria-label="Filter courses by category">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    className={`course-filter${activeCategory === category.id ? " is-active" : ""}`}
                                    aria-pressed={activeCategory === category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        <div className="course-grid" aria-live="polite">
                            {visibleCourses.map((course, index) => (
                                <a
                                    className="course-card"
                                    href={`/courses/${course.slug}`}
                                    key={course.slug}
                                    onClick={(event) => openCourse(event, course)}
                                >
                                    <div className="course-card-image">
                                        <img src={course.image} alt="" loading={index > 2 ? "lazy" : "eager"} />
                                        {index < 3 && <span className="course-bestseller">BESTSELLER</span>}
                                    </div>
                                    <div className="course-card-content">
                                        <div className="course-meta">
                                            <span><FaClock aria-hidden="true" />{course.duration}</span>
                                            <span><FaChartLine aria-hidden="true" />{course.level}</span>
                                            <span><FaUsers aria-hidden="true" />{course.learners}</span>
                                        </div>
                                        <h3>{course.title} ({course.credential})</h3>
                                        <p>{course.summary}</p>
                                        <span className="course-card-link">
                                            View course details
                                            <FaArrowRight aria-hidden="true" />
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};
