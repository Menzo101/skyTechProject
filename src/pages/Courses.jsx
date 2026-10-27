import { useEffect, useRef, useState } from "react";
import {
    FaArrowLeft,
    FaArrowRight,
    FaClock,
} from "react-icons/fa";
import { addresses } from "../components/data";
import "../components/courses.css";
import artificialIntelligenceImage from "../assets/artificial-intelligence.jpg";
import cloudComputingImage from "../assets/cloud-computing.jpg";
import cybersecurityImage from "../assets/cybersecurity.jpg";
import dataAnalysisImage from "../assets/data-analysis.jpg";
import graphicsDesignImage from "../assets/graphics-design.jpg";
import machineLearningImage from "../assets/machine-learning.jpg";
import motionGraphicsImage from "../assets/motion-graphics.jpg";
import programmingImage from "../assets/programming.jpg";
import uiUxImage from "../assets/ui-ux-design.jpg";
import videoEditingImage from "../assets/video-editing.jpg";
import cinema4dImage from "../assets/cinema-4d.jpg";
import vfxImage from "../assets/vfx.jpg";
import cinematographyImage from "../assets/cinematography.jpg";
import photographyImage from "../assets/Photography.jpg";
import dronePilotingImage from "../assets/drone-piloting.jpg";
import roboticsImage from "../assets/robotics.jpg";
import embeddedSystemsImage from "../assets/embedded-systems.jpg";
import iotImage from "../assets/iot.jpg";
import gameDevelopmentImage from "../assets/game-development.jpg";
import virtualAssistantImage from "../assets/virtual-assistant.jpg";
import forexImage from "../assets/forex.jpg";
import cryptoImage from "../assets/crypto.jpg";

const categories = [
    { id: "all", label: "All Courses" },
    { id: "design", label: "Design" },
    { id: "film", label: "Film Making" },
    { id: "animation", label: "Animations" },
    { id: "web", label: "Web Management" },
    { id: "engineering", label: "Engineering" },
    { id: "office", label: "Office Suite" },
    { id: "programming", label: "Programming" },
    { id: "finance", label: "Finance" },
];

const categoryDetails = {
    design: {
        label: "Design",
        summary: "Develop practical design skills through focused, hands-on training.",
    },
    film: {
        label: "Film Making",
        summary: "Learn creative production skills across video, motion, and visual storytelling.",
    },
    animation: {
        label: "Animations",
        summary: "Build animation skills with focused training in 2D and 3D.",
    },
    web: {
        label: "Web Management",
        summary: "Build digital skills for websites, marketing, and app development.",
    },
    engineering: {
        label: "Engineering",
        summary: "Learn popular design and visualization software for engineering projects.",
    },
    office: {
        label: "Office Suite",
        summary: "Build practical computer, productivity, and accounting software skills.",
    },
    programming: {
        label: "Programming",
        summary: "Explore technical skills across programming, data, and emerging technologies.",
    },
    finance: {
        label: "Finance",
        summary: "Explore financial markets and digital currencies through dedicated courses.",
    },
};

const createCourses = (category, entries) =>
    entries.map(([slug, title, duration, image]) => ({
        slug,
        title,
        duration,
        category,
        image,
        summary: `Develop practical skills in ${title} through focused training in ${categoryDetails[category].label.toLowerCase()}.`,
    }));

const courses = [
    ...createCourses("design", [
        ["graphics-design", "Graphics Design", "4 months", graphicsDesignImage],
        ["ui-ux-product-design", "UI/UX/Product Design", "3 months", uiUxImage],
    ]),
    ...createCourses("film", [
        ["video-editing-premiere-capcut", "Video Editing: Premiere Pro & CapCut", "3 months", videoEditingImage],
        ["video-editing-davinci", "Video Editing: DaVinci Resolve", "3 months", videoEditingImage],
        ["motion-graphics-after-effects", "Motion Graphics: Adobe After Effects", "3 months", motionGraphicsImage],
        ["motion-graphics-cinema-4d", "Motion Graphics: Cinema 4D", "3 months", cinema4dImage],
        ["motion-graphics-after-effects-cinema-4d", "Motion Graphics: After Effects & Cinema 4D", "5 months", cinema4dImage],
        ["visual-effects-vfx", "Visual Effects (VFX)", "5 months", vfxImage],
        ["cinematography", "Cinematography", "4 months", cinematographyImage],
        ["photography", "Photography", "3 months", photographyImage],
        ["drone-piloting", "Drone Piloting", "2 months", dronePilotingImage],
    ]),
    ...createCourses("animation", [
        ["3d-animation-basic", "3D Animation: Basic Class", "3 months", cinema4dImage],
        ["3d-animation-advanced", "3D Animation: Advanced Class", "3 months", cinema4dImage],
        ["3d-animation-basic-and-advanced", "3D Animation: Basic & Advanced Classes", "5 months", cinema4dImage],
        ["2d-animation", "2D Animation", "4 months", motionGraphicsImage],
    ]),
    ...createCourses("web", [
        ["website-design", "Website Design", "3 months", uiUxImage],
        ["digital-marketing", "Digital Marketing", "3 months", dataAnalysisImage],
        ["full-stack-web-development", "Web Development: Front End, Back End & Full Stack", "5 months", programmingImage],
        ["mobile-app-development", "Mobile App Development", "4 months", programmingImage],
    ]),
    ...createCourses("engineering", [
        ["autocad", "AutoCAD", "2 months", roboticsImage],
        ["revit", "Revit", "2 months", roboticsImage],
        ["sketchup", "SketchUp", "2 months", roboticsImage],
        ["3ds-max", "3DS MAX", "2 months", roboticsImage],
        ["twinmotion", "Twinmotion", "2 months", roboticsImage],
        ["luminous", "Luminous", "2 months", roboticsImage],
    ]),
    ...createCourses("office", [
        ["computer-appreciation-microsoft-suite", "Computer Appreciation & Microsoft Suite", "3 months", programmingImage],
        ["accounting-packages", "Accounting Packages", "Negotiable", dataAnalysisImage],
    ]),
    ...createCourses("programming", [
        ["cybersecurity", "Cybersecurity", undefined, cybersecurityImage],
        ["cloud-computing-devops", "Cloud Computing (DevOps)", undefined, cloudComputingImage],
        ["data-analysis-science", "Data Analysis/Science", undefined, dataAnalysisImage],
        ["game-development", "Game Development", undefined, gameDevelopmentImage],
        ["virtual-assistant", "Virtual Assistant", undefined, virtualAssistantImage],
        ["robotics", "Robotics", undefined, roboticsImage],
        ["artificial-intelligence", "Artificial Intelligence", undefined, artificialIntelligenceImage],
        ["machine-learning", "Machine Learning", undefined, machineLearningImage],
        ["automation", "Automation", undefined, programmingImage],
        ["electronic-embedded-systems", "Electronic and Embedded Systems", undefined, embeddedSystemsImage],
        ["internet-of-things", "Internet of Things", undefined, iotImage],
        ["python-programming", "Python Programming", undefined, programmingImage],
        ["java-programming", "Java Programming", undefined, programmingImage],
        ["cpp-programming", "C++ Programming", undefined, programmingImage],
        ["other-programming-languages", "Other Programming Languages", undefined, programmingImage],
    ]),
    ...createCourses("finance", [
        ["forex-courses", "Forex Courses", undefined, forexImage],
        ["crypto-courses", "Crypto Courses", undefined, cryptoImage],
    ]),
];

function getCourseSlug() {
    const match = window.location.pathname.match(/\/courses\/([^/]+)\/?$/);
    return match?.[1] ?? null;
}

export const Courses = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeCourseSlug, setActiveCourseSlug] = useState(getCourseSlug);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!isEnquiryOpen) {
            return undefined;
        }

        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setIsEnquiryOpen(false);
            }
        };

        document.addEventListener("keydown", closeOnEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = "";
        };
    }, [isEnquiryOpen]);

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
        setIsEnquiryOpen(false);
    };

    const submitEnquiry = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");
        const subject = encodeURIComponent(`Course enquiry: ${activeCourse.title}`);
        const body = encodeURIComponent(
            `Course: ${activeCourse.title}\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
        );

        window.location.href = `mailto:Skytechfusion@gmail.com?subject=${subject}&body=${body}`;
        setIsEnquiryOpen(false);
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
                                <span className="course-eyebrow">
                                    {categoryDetails[activeCourse.category].label}
                                </span>
                                <h2>{activeCourse.title}</h2>
                                <h3 className="course-detail-section-title">Course overview</h3>
                                <p className="course-detail-summary">{activeCourse.summary}</p>

                                <h3 className="course-detail-section-title">Course details</h3>
                                <dl className="course-detail-facts">
                                    <div>
                                        <dt>Duration</dt>
                                        <dd>{activeCourse.duration ?? "Contact us to confirm the duration."}</dd>
                                    </div>
                                    <div>
                                        <dt>Class schedule</dt>
                                        <dd>Contact us for class days, times, and the next start date.</dd>
                                    </div>
                                    <div>
                                        <dt>Training location</dt>
                                        <dd>{addresses[0]}</dd>
                                    </div>
                                    <div>
                                        <dt>Who can enroll?</dt>
                                        <dd>
                                            Learners interested in {activeCourse.title} are welcome to enquire.
                                            Contact us to confirm any prerequisites and the right class level.
                                        </dd>
                                    </div>
                                </dl>

                                <div className="course-detail-actions">
                                    <span className="course-registration-fee">
                                        Registration Fee: ₦10,000
                                    </span>

                                    <button
                                        type="button"
                                        className="course-enquire"
                                        onClick={() => setIsEnquiryOpen(true)}
                                    >
                                        Enquire about this course
                                        <FaArrowRight aria-hidden="true" />
                                    </button>
                                </div>
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
                                    </div>
                                    <div className="course-card-content">
                                        {course.duration && (
                                            <div className="course-meta">
                                                <span><FaClock aria-hidden="true" />{course.duration}</span>
                                            </div>
                                        )}
                                        <h3>{course.title}</h3>
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
            {isEnquiryOpen && activeCourse && (
                <div
                    className="course-enquiry-overlay"
                    role="presentation"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsEnquiryOpen(false);
                        }
                    }}
                >
                    <section
                        className="course-enquiry-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="course-enquiry-title"
                        aria-describedby="course-enquiry-description"
                    >
                        <button
                            className="course-enquiry-close"
                            type="button"
                            aria-label="Close enquiry form"
                            onClick={() => setIsEnquiryOpen(false)}
                        >
                            &times;
                        </button>
                        <span className="course-eyebrow">COURSE ENQUIRY</span>
                        <h2 id="course-enquiry-title">Register your interest</h2>
                        <p id="course-enquiry-description">
                            Share your contact details and we&apos;ll help you with {activeCourse.title}.
                        </p>
                        <form className="course-enquiry-form" onSubmit={submitEnquiry}>
                            <label>
                                Name
                                <input name="name" type="text" autoComplete="name" required />
                            </label>
                            <label>
                                Phone number
                                <input name="phone" type="tel" autoComplete="tel" />
                            </label>
                            <label>
                                Email address
                                <input name="email" type="email" autoComplete="email" required />
                            </label>
                            <label>
                                Message
                                <textarea name="message" rows="4" required />
                            </label>
                            <button className="course-enquiry-submit" type="submit">
                                Submit
                            </button>
                            <small>Your email app will open with your enquiry ready to send.</small>
                        </form>
                    </section>
                </div>
            )}
        </section>
    );
};
