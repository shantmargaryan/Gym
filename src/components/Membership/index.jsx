import { useState, useEffect } from "react"
import styles from "./membership.module.scss"
import MembershipItem from "/src/components/MembershipItem"
import SpecialText from "/src/components/SpecialText"
import axios from "axios"



function Membership() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://gym-backend-ten.vercel.app/membershipItem").then(res => setData(res.data))
  },[])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h3 className={styles.title + " title"}>
          Gym membership
        </h3>
        <ul className={styles.list + " list-reset"}>
          {
            data.map((item) => (
              <MembershipItem {...item} key={item.id} >
                {
                  item.specialText.map((text) => (
                    <SpecialText text={text} key={text} />
                  ))
                }
              </MembershipItem>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Membership