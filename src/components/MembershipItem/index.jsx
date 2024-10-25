import styles from "./membershipItem.module.scss"

function MembershipItem({ title = "", price = 0, children }) {

    return (
        <li className={styles.item}>
            <div className={styles.content}>
                <h3 className={styles.title + " title"}>
                    {title}
                </h3>
                <span className={styles.price}>
                    $ {price}
                </span>
            </div>
            {children}
            <button className={styles.button + " button-reset btn"}>
                Buy
            </button>
        </li>
    )
}

export default MembershipItem