import { useState } from 'react'
import "./navbar.css";
import logoImage from "../assets/skyTechLogo2.png";

const courseSchools = [
    {
        id: "data-ai",
        name: "School of Data & AI",
        description: "Turn data and intelligent technologies into practical skills.",
        courses: [
            { name: "Data Analysis/Science", slug: "data-analysis-science" },
            { name: "Artificial Intelligence", slug: "artificial-intelligence" },
            { name: "Machine Learning", slug: "machine-learning" },
        ],
    },
    {
        id: "engineering",
        name: "School of Engineering",
        description: "Learn engineering design, robotics, and connected systems.",
        courses: [
            { name: "AutoCAD", slug: "autocad" },
            { name: "Revit", slug: "revit" },
            { name: "SketchUp", slug: "sketchup" },
            { name: "3DS MAX", slug: "3ds-max" },
            { name: "Twinmotion", slug: "twinmotion" },
            { name: "Luminous", slug: "luminous" },
            { name: "Robotics", slug: "robotics" },
            { name: "Electronic and Embedded Systems", slug: "electronic-embedded-systems" },
            { name: "Internet of Things", slug: "internet-of-things" },
        ],
    },
    {
        id: "software",
        name: "School of Software & Cybersecurity",
        description: "Build software and learn to secure the systems behind it.",
        courses: [
            { name: "Cybersecurity", slug: "cybersecurity" },
            { name: "Cloud Computing (DevOps)", slug: "cloud-computing-devops" },
            { name: "Website Design", slug: "website-design" },
            { name: "Web Development: Front End, Back End & Full Stack", slug: "full-stack-web-development" },
            { name: "Mobile App Development", slug: "mobile-app-development" },
            { name: "Game Development", slug: "game-development" },
            { name: "Automation", slug: "automation" },
            { name: "Python Programming", slug: "python-programming" },
            { name: "Java Programming", slug: "java-programming" },
            { name: "C++ Programming", slug: "cpp-programming" },
            { name: "Other Programming Languages", slug: "other-programming-languages" },
        ],
    },
    {
        id: "creative",
        name: "School of Creative Media & Design",
        description: "Create visual experiences across design, film, and animation.",
        courses: [
            { name: "Graphics Design", slug: "graphics-design" },
            { name: "UI/UX/Product Design", slug: "ui-ux-product-design" },
            { name: "Video Editing: Premiere Pro & CapCut", slug: "video-editing-premiere-capcut" },
            { name: "Video Editing: DaVinci Resolve", slug: "video-editing-davinci" },
            { name: "Motion Graphics: Adobe After Effects", slug: "motion-graphics-after-effects" },
            { name: "Motion Graphics: Cinema 4D", slug: "motion-graphics-cinema-4d" },
            { name: "Motion Graphics: After Effects & Cinema 4D", slug: "motion-graphics-after-effects-cinema-4d" },
            { name: "Visual Effects (VFX)", slug: "visual-effects-vfx" },
            { name: "Cinematography", slug: "cinematography" },
            { name: "Photography", slug: "photography" },
            { name: "Drone Piloting", slug: "drone-piloting" },
            { name: "3D Animation: Basic Class", slug: "3d-animation-basic" },
            { name: "3D Animation: Advanced Class", slug: "3d-animation-advanced" },
            { name: "3D Animation: Basic & Advanced Classes", slug: "3d-animation-basic-and-advanced" },
            { name: "2D Animation", slug: "2d-animation" },
        ],
    },
    {
        id: "business",
        name: "School of Business & Finance",
        description: "Develop practical business, productivity, and finance skills.",
        courses: [
            { name: "Digital Marketing", slug: "digital-marketing" },
            { name: "Computer Appreciation & Microsoft Suite", slug: "computer-appreciation-microsoft-suite" },
            { name: "Accounting Packages", slug: "accounting-packages" },
            { name: "Virtual Assistant", slug: "virtual-assistant" },
            { name: "Forex Courses", slug: "forex-courses" },
            { name: "Crypto Courses", slug: "crypto-courses" },
        ],
    },
];

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [activeSchoolId, setActiveSchoolId] = useState(courseSchools[0].id);
    const activeSchool = courseSchools.find((school) => school.id === activeSchoolId);

    return (
        <>
            <header className="navbar">
                {/* Logo */}
                <div className='headinglogo'>

                    <img src={logoImage} className="headinglogo" />


                </div>

                <button
                    type="button"
                    className="nav-toggle"
                    aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isNavOpen}
                    aria-controls="main-navigation"
                    onClick={() => setIsNavOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                {/* Navigation */}
                <nav
                    className={`nav-links${isNavOpen ? " nav-links--open" : ""}`}
                    id="main-navigation"
                    aria-label="Main navigation"
                >
                    <a href="/#home" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        Home
                    </a>

                    <a href="/#about" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        About
                    </a>

                    <a href="/#services" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        Services
                    </a>

                    <div
                        className="courses-menu"
                        onMouseEnter={() => setIsCoursesOpen(true)}
                        onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                        <button
                            type="button"
                            className="nav-link courses-trigger"
                            aria-expanded={isCoursesOpen}
                            aria-controls="courses-dropdown"
                            onClick={() => setIsCoursesOpen(true)}
                            onKeyDown={(event) => {
                                if (event.key === "Escape") {
                                    setIsCoursesOpen(false);
                                }
                            }}
                        >
                            Courses
                            <span className="dropdown-arrow" aria-hidden="true">⌄</span>
                        </button>

                        {isCoursesOpen && (
                            <div className="courses-dropdown" id="courses-dropdown">
                                <div className="dropdown-heading">
                                    <span className="dropdown-label">OUR SCHOOLS</span>
                                    <h3>Find your area of study</h3>
                                    <p>Choose a school to preview its courses, or browse the full catalogue.</p>
                                </div>

                                <div className="schools-browser">
                                    <div className="school-list" aria-label="Course schools">
                                        {courseSchools.map((school) => (
                                            <button
                                                key={school.id}
                                                type="button"
                                                className={`school-item${activeSchoolId === school.id ? " is-active" : ""}`}
                                                aria-expanded={activeSchoolId === school.id}
                                                aria-controls="school-course-list"
                                                onMouseEnter={() => setActiveSchoolId(school.id)}
                                                onFocus={() => setActiveSchoolId(school.id)}
                                                onClick={() => setActiveSchoolId(school.id)}
                                            >
                                                <span>{school.name}</span>
                                                <span className="school-arrow" aria-hidden="true">›</span>
                                            </button>
                                        ))}
                                    </div>

                                    {activeSchool && (
                                        <div className="school-courses">
                                            <div className="school-courses-heading">
                                                <h4>{activeSchool.name}</h4>
                                                <p>{activeSchool.description}</p>
                                            </div>
                                            <div className="school-course-list" id="school-course-list">
                                                {activeSchool.courses.map((course) => (
                                                    <a
                                                        key={course.slug}
                                                        href={`/courses/${course.slug}`}
                                                        className="school-course-link"
                                                        onClick={() => {
                                                            setIsCoursesOpen(false);
                                                            setIsNavOpen(false);
                                                        }}
                                                    >
                                                        {course.name}
                                                        <span aria-hidden="true">↗</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href="/courses"
                                    className="browse-all-courses"
                                    onClick={() => {
                                        setIsCoursesOpen(false);
                                        setIsNavOpen(false);
                                    }}
                                >
                                    Browse all courses
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="/#contact" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        Contact
                    </a>

                    <a href="/courses#courses" className="register-btn" onClick={() => setIsNavOpen(false)}>
                        Register Now
                    </a>
                </nav>
            </header>

        </>
    )
}

export default Navbar
