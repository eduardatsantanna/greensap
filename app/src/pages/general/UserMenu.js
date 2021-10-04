import { useState, useEffect, useRef } from 'react';
import { animated, config, useSpring, useTrail } from "react-spring";
import { useHistory } from "react-router-dom";
import { useOutsideFocus } from "@/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export const UserMenu = ({user, onLogOut}) => {
  const menu = [
    { text: "Account", link: "/account"},
    { text: "Log Out", link: null },
  ];
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const isOutside = useOutsideFocus(ref);
  const history = useHistory();
  const [menuStyles, menuController] = useSpring(() => ({ width: '0rem', backgroundColor: "rgba(255, 255, 255, 0)" }));
  const [itemsStyles, itemsController] = useTrail(menu.length, () => ({transform: "translateX(100%)", opacity: 0}));

  useEffect(() => {
    if (isOutside && show) {
      onOpen();
    }
  }, [isOutside]);

  const onOpen = () => {
    if (show) {
      menuController.start({ width: '0rem', backgroundColor: "rgba(255, 255, 255, 0)", delay: 300, config: config.stiff });
      itemsController.start({transform: "translateX(100%)", opacity: 0, config: config.stiff});
    } else {
      menuController.start({ width: '20rem', backgroundColor: "rgba(255, 255, 255, 1)", config: config.stiff });
      itemsController.start({transform: "translateX(0%)", opacity: 1, delay: 300, config: config.stiff});
    }
    setShow(!show);
  };

  const onRedirect = (path) => {
    console.log(path);
    if (path === null) {
      onLogOut();
    } else {
      history.push(path);
    }
  };

  return (
    <div className="user-menu">
      <img className="profile-img" src={user.img} alt="Profile" />
      <button ref={ref} className="btn btn-gray" onClick={onOpen}>
        <FontAwesomeIcon icon={show ? faCaretDown : faCaretUp} className="option-icon" />
      </button>
      <animated.div className="menu-nav page" style={menuStyles}>
        <ul className="nav page">
          {menu.map((item, i) => (
            <animated.li key={i} className="nav-item page" style={itemsStyles[i]} onClick={() => onRedirect(item.link)}>
              <p>{item.text}</p>
            </animated.li>
          ))}
				</ul>
			</animated.div>
    </div>
  );
};