import styles from "./about.module.scss"
function About() {

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title + " title"}>
            About us
          </h3>
          <p className={styles.text + " text"}>
            Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym.
            <br />
            <br />
            With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it's building strength, increasing endurance, or losing weight.
            <br />
            <br />
            Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals.
          </p>
        </div>
        <img className={styles.img + " img"} src="img/about.jpeg" alt="fitness" />
      </div>
    </section>
  )
}

export default About