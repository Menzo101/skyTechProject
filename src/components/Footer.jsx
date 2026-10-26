import "./footeer.css";
import { companyLinks } from './data';
import { programLinks } from './data';
import { addresses } from './data';
import skyTechLogo from "../assets/skyTechLogo2.png"

function FooterColumn({ title, links }) {
    return (
        <div className="footer-column">
            <h3>{title}</h3>
            <span className="underline" />

            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-brand">
                    <div className="logo">
                        <img src={skyTechLogo} alt="Codar logo" />

                        <div>
                            {/* <h2>Sky Tech <br /> Fusion</h2> */}

                        </div>
                    </div>

                    <p className="description">
                        Sky Tech Fusion empowers individuals with practical digital, technology, creative and financial skills for today's evolving world.
                    </p>
                    <span className="underline" />

                    <div className="socials">
                        <a href="#" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <i className="fa-brands fa-youtube" />
                        </a>
                        <a href="#" aria-label="X">
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                    </div>
                </div>

                <FooterColumn title="COMPANY" links={companyLinks} />

                <FooterColumn title="PROGRAMS" links={programLinks} />

                <div className="footer-column contact">
                    <h3>GET IN TOUCH</h3>
                    <span className="underline" />

                    <ul>
                        {addresses.map((address) => (
                            <li className="address" key={address}>
                                <span className="location-icon">
                                    <i className="fa-solid fa-location-dot" />
                                </span>

                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {address}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='mailUs_container'>
                        <span className='location-icon'><i className="fa-solid fa-envelope" /></span>

                        <span>Skytechfusion@gmail.com</span>
                    </div>



                </div>

            </footer >
        </>
    )
}
