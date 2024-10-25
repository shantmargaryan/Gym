import { useState, useEffect } from "react";
import styles from "./join.module.scss"
import JoinItem from "/src/components/JoinItems"
import axios from "axios";
function Join() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://gym-backend-ten.vercel.app/joinitems").then(res => setData(res.data))
    }, [])

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h2 className={styles.title + " title"}>
                    Reasons to join
                </h2>
                <ul className={styles.list + " list-reset"}>
                    {
                        data.map((item) => (
                            <JoinItem {...item} key={item.id} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Join