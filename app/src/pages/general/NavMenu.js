import { useState, useEffect, useRef, memo } from 'react';
import { animated, config, useSpring, useTrail } from "react-spring";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useOutsideFocus } from "@/hooks";

export const NavMenu = memo(({scrollTop}) => {

  const menu = [
    { text: "Dashboard", link: "/dashboard", type: "NGO" },
    { text: "Project Marketplace", link: "/marketplace" },
    { text: "Leaderboard", link: "/leaderboard", type: "NGO" }
  ];
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const isOutside = useOutsideFocus(ref);
  const { pathname } = useLocation();
  const [menuStyles, menuController] = useSpring(() => ({ width: '0rem', backgroundColor: "rgba(1, 20, 2, 0)" }));
  const [itemsStyles, itemsController] = useTrail(menu.length, () => ({transform: "translateX(-100%)", opacity: 0}));

  useEffect(() => {
    if (isOutside && show) {
      onOpen();
    }
  }, [isOutside]);

  const onOpen = () => {
    if (show) {
      menuController.start({ width: '0rem', backgroundColor: "rgba(1, 20, 2, 0.0)", delay: 300, config: config.stiff });
      itemsController.start({transform: "translateX(-100%)", opacity: 0, config: config.stiff});
    } else {
      menuController.start({ width: '20rem', backgroundColor: "rgba(1, 20, 2, 0.6)", config: config.stiff });
      itemsController.start({transform: "translateX(0%)", opacity: 1, delay: 300, config: config.stiff});
    }
    setShow(!show);
  };

  return (
    <div className="navbar-aside">
      <div ref={ref} className="gs-menu-btn" onClick={onOpen}>
        <div className={`menu-btn__burger ${show ? "open": ""}`}/>
      </div>
      <animated.div className="menu-nav landing" style={menuStyles}>
        <ul className="nav">
          {menu.map((item, i) => (
            <animated.li key={i} style={itemsStyles[i]} className="nav-item">
              <NavLink className="nav-link-gs" to={`${item.link}`}>
                {item.text}
              </NavLink>
            </animated.li>
          ))}
        </ul>
      </animated.div>
      <p><Link to="/" className={`nav-link-gs nav-brand ${pathname === "/" ? scrollTop !== 0 ? " scroll" : "" : ""}${pathname !== "/" ? " page" : ""}`}>GREEN SAP</Link></p>
			<p><Link to="/" className={`nav-link-gs nav-brand-m pl-2 ${pathname !== "/" ? " page" : ""}`}>G</Link></p>
    </div>
  );
});