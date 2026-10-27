import { useState } from 'react'
import "./navbar.css";
import logoImage from "../assets/skyTechLogo2.png";

const courseDepartments = [
    { name: "Design", description: "Explore design courses", category: "design" },
    { name: "Film Making", description: "Explore film making courses", category: "film" },
    { name: "Animations", description: "Explore animation courses", category: "animation" },
    { name: "Web Management", description: "Explore web and digital courses", category: "web" },
    { name: "Engineering", description: "Explore engineering software courses", category: "engineering" },
    { name: "Office Suite", description: "Explore office software courses", category: "office" },
    { name: "Programming", description: "Explore programming courses", category: "programming" },
    { name: "Finance", description: "Explore finance courses", category: "finance" },
];

const Navbar = () => {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <header
                className="navbar"
                onMouseLeave={(event) => {
                    const dropdown = event.currentTarget.querySelector(".courses-dropdown");
                    if (!dropdown?.contains(event.relatedTarget)) {
                        setIsCoursesOpen(false);
                    }
                }}
            >
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
                    <a href="#home" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        Home
                    </a>

                    <a href="#about" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        About
                    </a>

                    <a href="#services" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        Services
                    </a>

                    {/* Courses dropdown */}
                    <div
                        className="courses-menu"
                        onMouseEnter={() => setIsCoursesOpen(true)}
                    >
                        <button
                            type="button"
                            className="nav-link courses-trigger"
                            aria-expanded={isCoursesOpen}
                            aria-controls="courses-dropdown"
                            onClick={() => setIsCoursesOpen((open) => !open)}
                            onKeyDown={(event) => {
                                if (event.key === "Escape") {
                                    setIsCoursesOpen(false);
                                }
                            }}
                        >
                            Courses
                            <span className="dropdown-arrow">⌄</span>
                        </button>

                        {isCoursesOpen && (
                            <div
                                className="courses-dropdown"
                                id="courses-dropdown"
                            >
                                <div className="dropdown-heading">
                                    <span className="dropdown-label">
                                        OUR DEPARTMENTS
                                    </span>
                                    <h3>Explore our programmes</h3>
                                    <p>Choose a field and start building your future.</p>
                                </div>

                                <div className="department-list">
                                    {courseDepartments.map((department) => (
                                        <a
                                            key={department.category}
                                            href="#courses"
                                            className="department-item"
                                            onClick={() => {
                                                window.dispatchEvent(
                                                    new CustomEvent("skytech:course-category", {
                                                        detail: department.category,
                                                    }),
                                                );
                                                setIsCoursesOpen(false);
                                                setIsNavOpen(false);
                                            }}
                                        >
                                            <span className="department-icon">
                                                ↗
                                            </span>

                                            <span className="department-details">
                                                <strong>{department.name}</strong>
                                                <small>{department.description}</small>
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#contact" className="nav-link" onClick={() => setIsNavOpen(false)}>
                        Contact
                    </a>

                    <a href="#register" className="register-btn" onClick={() => setIsNavOpen(false)}>
                        Register Now
                    </a>
                </nav>
            </header>

        </>
    )
}

export default Navbar
