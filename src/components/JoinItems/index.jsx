
import styles from "./joinItems.module.scss"



function JoinItems({ svgUrl = "", title = "", text = "" }) {


    return (
        < li className={styles.item} >
            <svg className={styles.icon}>
                <use xlinkHref={svgUrl} />
            </svg>
            <div className={styles.content}>
                <h3 className={styles.title + " title"}>
                    {title}
                </h3>
                <p className={styles.text + " text"}>
                    {text}
                </p>
            </div>
        </ li>
    );
}

export default JoinItems;
