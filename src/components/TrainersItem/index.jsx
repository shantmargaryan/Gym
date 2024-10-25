import styles from './trainersItem.module.scss'

function TrainersItem({ imgUrl, name }) {
    return (
        <li className={styles.item}>
            <img className={styles.img + " img"} src={imgUrl} alt={imgUrl} />
            <span className={styles.name}>
                {name}
            </span>
            <div className={styles.socials}>
                <a className={styles.link + " link-reset"} href="#">
                    <svg className={styles.icon}>
                        <use xlinkHref="svg/sprite.svg#instagram" />
                    </svg>
                </a>
                <a className={styles.link + " link-reset"} href="#">
                    <svg className={styles.icon}>
                        <use xlinkHref="svg/sprite.svg#Twitter" />
                    </svg>
                </a>
                <a className={styles.link + " link-reset"} href="#">
                    <svg className={styles.icon}>
                        <use xlinkHref="svg/sprite.svg#youtube" />
                    </svg>
                </a>
            </div>
        </li>
    )
}

export default TrainersItem