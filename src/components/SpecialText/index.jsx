import styles from "./special.module.scss"

function SpecialText({text=""}) {
    return (
        <div className={styles.content}>
            <svg className={styles.icon}>
                <use xlinkHref="svg/sprite.svg#success" />
            </svg>
            <p className={styles.text + " text"}>
                {text}
            </p>
        </div>
    )
}

export default SpecialText