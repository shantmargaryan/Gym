import { useEffect } from "react";
import { Burger } from 'fullburger';
import 'fullburger/style';
import styles from "./header.module.scss"


// logo component
import Logo from "/src/components/Logo"

function Header() {

    useEffect(() => {
        new Burger("header", {
            speed: 500,
            whichSide: {
                left: true
            },
            overlay: true
        })
    }, [])

    return (
        <header className={styles.header + " header"} data-burger-header="header">
            <div className={styles.container}>
                <Logo />
                <nav className={styles.nav + " nav"} data-burger-nav title="navigation menu">
                    <ul className={styles.list + " nav__list list-reset"}>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <a className={styles.link + " nav__link link-reset link"} href="#">
                                Advantages
                            </a>
                        </li>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <a className={styles.link + " nav__link link-reset link"} href="#">
                                Membership
                            </a>
                        </li>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <a className={styles.link + " nav__link link-reset link"} href="#">
                                About
                            </a>
                        </li>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <a className={styles.link + " nav__link link-reset link"} href="#">
                                Trainers
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className={styles.burger + " burger"} data-burger-btn aria-label="open menu" aria-expanded="false">
                    <span className="burger__line burger__line_top"></span>
                    <span className="burger__line burger__line_middle"></span>
                    <span className="burger__line burger__line_bottom"></span>
                </button>
            </div>
        </header>
    )
}

export default Header