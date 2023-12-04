import Layout from "@/components/layout/Layout"
import { Button } from "@mui/material"
import MyOlympiadsPast from "./MyOlympiadsPast"
import MyOlympiadsAll from "./MyOlympiadsAll"
import { useState } from "react"
import styles from "./MyOlympiads.module.css"

const MyOlympiads = () => {
    const [allOlymps, setAllOlymps] = useState(true);

    return(
        <Layout>
             <div className={styles.blocksPart}>
                <div className={styles.buttonsPart}>
                    <Button className={styles.buttonOlymp} onClick={() => setAllOlymps(true)}>Будущие олимпиады</Button>
                    <Button className={styles.buttonOlymp} onClick={() => setAllOlymps(false)}>Прошедшие олимпиады</Button>
                </div>
                {/* {children} */}
                {allOlymps? <MyOlympiadsAll/>:<MyOlympiadsPast/>}
             </div>
        </Layout>
    )
}

export default MyOlympiads