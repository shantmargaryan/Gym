import { useState, useEffect } from "react"
import styles from './trainers.module.scss'

import TrainersItem from '/src/components/TrainersItem'
import axios from 'axios'

function Trainers() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://gym-backend-ten.vercel.app/trainersItem").then(res => setData(res.data))
    },[])

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h3 className={styles.title + " title"}>
                    Trainers staff
                </h3>
                <ul className={styles.list + " list-reset"}>
                    {
                        data.map((item) => (
                            <TrainersItem {...item} key={item.id} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Trainers