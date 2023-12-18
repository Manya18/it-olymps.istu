import Link from "next/link";
import styles from "./Home.module.css";

const Event = (data:any)  => {
    const eventData = Object.values(data)[0]
    console.log('data', eventData,  data)

    const date1 = new Date(eventData.startDateTime)
    const startDateTime = `${date1.getDate()}.${date1.getMonth() + 1}.${date1.getFullYear()}`

    const date2 = new Date(eventData.endDateTime)
    const endDateTime = `${date2.getDate()}.${date2.getMonth() + 1}.${date2.getFullYear()}`

    return (
        <Link href={`/${eventData.eventId}`}>
        <div className={styles.eventBlock}>
            
            <img src="/event_img.jpg" alt="event" className={styles.image}/>
            <br/>
            {/* <Image src={dEvent.img} width={100%} height={50} alt={"event"}/> */}
            <div className={styles.name}>{eventData.name}</div>
            <span className={styles.date}>{startDateTime} - {endDateTime}</span>
        </div>
        </Link>
    )
}

export default Event;