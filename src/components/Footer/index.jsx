import styles from './footer.module.scss'


import Logo from '/src/components/Logo'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Logo />
                    <p className={styles.text + " text"}>
                        Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community
                    </p>
                </div>
                <div className={styles.address}>
                    <h3 className={styles.title + " title"}>
                        Address
                    </h3>
                    <p className={styles.text + " text"}>
                        Republic of Belarus
                        Minsk city
                        Dzerzhinsky Avenue 15
                    </p>
                </div>
                <div className={styles.contact}>
                    <h3 className={styles.title + " title"}>
                        Contact
                    </h3>
                    <div className={styles.contactBox}>
                        <div className={styles.contactItem}>
                            <svg className={styles.icon}>
                                <use xlinkHref="svg/sprite.svg#phone" />
                            </svg>
                            <a className={styles.link + " link-reset"} href="tel:+375447772412">
                                +375(44)-777-24-12
                            </a>
                        </div>
                        <div className={styles.contactItem}>
                            <svg className={styles.icon}>
                                <use xlinkHref="svg/sprite.svg#mail" />
                            </svg>
                            <a className={styles.link + " link-reset"} href="mailto:gym24@gmail.com">
                                gym24@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <a className={styles.link + " link-reset"} href="#">
                            <svg className={styles.socialIcon}>
                                <use xlinkHref="svg/sprite.svg#instagram" />
                            </svg>
                        </a>
                        <a className={styles.link + " link-reset"} href="#">
                            <svg className={styles.socialIcon}>
                                <use xlinkHref="svg/sprite.svg#Twitter" />
                            </svg>
                        </a>
                        <a className={styles.link + " link-reset"} href="#">
                            <svg className={styles.socialIcon}>
                                <use xlinkHref="svg/sprite.svg#youtube" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer