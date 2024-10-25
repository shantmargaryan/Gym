import styles from "./hero.module.scss"

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Free trial session with a trainer
                    </h1>
                    <button className={styles.button + " button-reset btn"}>
                        Detailed
                    </button>
                </div>
                <img className={styles.img + " img"} src="/img/heroImg.jpeg" alt="heroImg" />
            </div>
        </section>
    )
}

export default Hero