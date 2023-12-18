import axios from "axios";
import styles from "./CalenderScreen.module.css"
import { useEffect, useState } from "react";
import Event from "../home/Event";

const CalenderScreen = ()  => {
    const [eventData, setEventData] = useState();

    const getEventData = () => {
        axios.get('http://localhost:8080/api/v1/events?page=0&onPage=10')
        .then((response) => {
            setEventData(response.data);
            console.log(Object.values(response.data))
        })
        .catch((err) => {
            console.log(err);
        });
    } 
    useEffect(() => {
        getEventData();
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.headText}>Календарь мероприятий</div>
            <div className={styles.blocks}>
            {eventData && eventData.map((eventD:any) =>
                <Event value={eventD}/>)
            }
            </div>
        </div>
    )
}

export default CalenderScreen;