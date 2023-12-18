import Link from "next/link";
import styles from "./Home.module.css";
import Event from "./Event";

const EventBlock = (dataEvent:any)  => {
    const dataEv = Object.values(dataEvent)[0]
    console.log(dataEvent);
    return (
        <div className={styles.groupBlocks}>
        {dataEv && dataEv.map((dEvent:any) => 
           <Event value={dEvent}/>
            )}
        </div>
    )
}

export default EventBlock;