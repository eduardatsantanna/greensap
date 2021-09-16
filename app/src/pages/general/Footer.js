import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { useLocation } from "react-router-dom";

export const Footer = () => {
    const { pathname: page } = useLocation();
    const today = new Date();
    return (
        <footer className={`${page !== "/" ? "dashboard" : ""}`}>
            <div className={`footer-bar`}>
                <div className="social-buttons">
                    <div className="icons">
                        <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                        <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
                        <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
                    </div>
                </div>
                <div className="links">
                    <p>Copyright &copy; {today.getFullYear()} / Sitemap / Terms of Use / Privacy Policy / FAQ / Contact - "Powered by SAP"</p>
                </div>
            </div>
        </footer>
    );
};

