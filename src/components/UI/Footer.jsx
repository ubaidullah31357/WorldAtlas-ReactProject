import footerData from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols padded-container">
        {footerData.map((CurrentItem, index) => {
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcons[CurrentItem.icon]}</div>
              <div className="footer-contact-text">
                <p>{CurrentItem.title}</p>
                <p>{CurrentItem.details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copyright-area">
        <div className="container padded-container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2026, All Rights Reserved{" "}
                <NavLink
                  to="https://www.linkedin.com/in/ubaid-ullah-swati/"
                  target="_blank"
                >
                  Ubaid Ullah
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://www.instagram.com/ubaidullah31357?utm_source=qr&igsh=cHIwMHU5aDIwdjNi"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/ubaidullah31357"
                    target="_blank"
                  >
                    GitHub
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
