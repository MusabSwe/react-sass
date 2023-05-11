import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    // to receive width and height of the window (x,y)
    useEffect(() => {
        console.log("1st useEffect");
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // below the function for checking window size 
    // when the side menu opened if the size change to the full screen 
    // the side menue disappear
    useEffect(() => {
        // means the side menu is opened and the width greater than mobile phones
        if (size.width > 768 && menuOpen) {
            // remove side menu
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate("/page-cta");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={`${classes.header__content__logo} ${classes.logo}`}>
                    navbar
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""
                        }`}
                >
                    <ul>
                        <li>
                            <Link to="/page-one" >
                                PageOne
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" >
                                PageTwo
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-three" >
                                PageThree
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>CTA Page</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {menuOpen ? <AiOutlineClose onClick={menuToggleHandler} /> : <BiMenuAltRight onClick={menuToggleHandler} />}
                </div>
            </div>
        </header>
    );
};

export default Header;