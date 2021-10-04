
import { useState, memo} from "react";
import useMeasure from "react-use-measure";
import { Signin, RegisterButton } from "@/pages/auth";
import { useScrollTop } from "@/hooks";
import { useLocation } from "react-router-dom";
import { authenticationService } from "@/services";
import { useHistory } from "react-router";
import { NavMenu, SearchBar, UserMenu } from "./";

export const Navbar = () => {

	const currentUser = authenticationService.currentUserValue;
	const [ref, bounds] = useMeasure();
    const scrollTop = useScrollTop();

	const history = useHistory();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const logout = () => {
		authenticationService.logout();
		history.push('/');
	}

	const { pathname: page } = useLocation();

	return (
		<nav ref={ref} className={`gs-navbar${page === "/" ? scrollTop !== 0 ? " scroll" : "" : ""}${page !== "/" ? " page" : ""}`}>
			<NavMenu scrollTop={scrollTop}/>
			{page === "/marketplace" && <SearchBar/>}

			<div className={`navbar-menu ${page !== "/" && scrollTop !== 0 ? "scroll" : ""}`}>
				{!currentUser &&
					<>
						<RegisterButton scrollTop={scrollTop} />
						<button className={`${page !== '/' ? 'ml-4 fill-button' : 'unfill-button'} ${scrollTop !== 0 ? "scroll" : ""}`} onClick={handleShow}>LOGIN</button>
					</>
				}
				{currentUser && <UserMenu user={currentUser} onLogOut={logout}/>}
			</div>
			{ show ? <Signin show={show} handleClose={handleClose} handleShow={handleShow} /> : null}
		</nav >
	);
};
