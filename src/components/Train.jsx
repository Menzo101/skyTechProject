import React from 'react';
import "./train.css";
import {
    FaUser,
    FaGraduationCap,
    // FaBuilding,
    FaSitemap,
    FaArrowRight,
} from "react-icons/fa";
import imageOne from "../assets/skyfusionlogo.png";
import imageTwo from "../assets/video-editing.jpeg";
import imageThree from "../assets/ui-ux-design.jpg";

const audiences = [
    {
        title: "Individuals",
        // image: "/images/individuals.jpg",
        // image: "https://chatgpt.com/s/m_6ada832d05348191a1e64237434ef10a",
        // image: "/online-school",
        image: imageOne,
        icon: FaUser,
        description:
            "Career switchers, students & working professionals ready to break into tech.",
        link: "Start your journey",
    },
    {
        title: "Schools",
        // image: "/images/schools.jpg",
        image: imageTwo,
        icon: FaGraduationCap,
        description:
            "Bring world-class STEM & coding programmes to primary, secondary & tertiary students.",
        link: "Partner with us",
    },

    {
        title: "Workforce",
        // image: "/images/workforce.jpg",
        image: imageThree,
        icon: FaSitemap,
        description:
            "Government agencies & large workforces upskilled at scale, with measurable ROI.",
        link: "Reskill at scale",
    },
];

const Train = () => {
    return (
        <>
            <section id="services" className="audience-section">
                <p className='audience_title'>Who We Train</p>
                <h2 className='audience_paragraph'>Tech training for everyone, everywhere in Africa</h2>
                <p className='audience_lastText'>Whether you're an individual chasing a tech career, a school nurturing future innovators, or a company upskilling its workforce <br></br>we have a programme tailored for you.</p>
                <div className="audience-grid">
                    {audiences.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article className="audience-card" key={item.title}>
                                <div className="audience-image">
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div className="audience-icon">
                                    <Icon />
                                </div>

                                <div className="audience-content">
                                    <h2>{item.title}</h2>

                                    <p>{item.description}</p>

                                    <a href="#contact" className="audience-link">
                                        {item.link}
                                        <FaArrowRight className="audience-arrow" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

        </>
    )
}

export default Train
