import styles from "./logo.module.scss"


function Logo() {
    return (
        <>
            <a className={styles.Logo} href="#">
                <svg className={styles.logoIcon}>
                    <use xlinkHref="svg/sprite.svg#Logo" />
                </svg>
            </a>
        </>
    )
}

export default Logo