import Layout from "@/components/layout/Layout";
import Image from "next/image";
import styles from "./Home.module.css";

const Home = ()  => {
    const dataEvent = [
    {
        contest_id: "1",
        date_start: "10.10.2023",
        date_end: "12.10.2023",
        name: "Ежегодный хакатон по программированию",
        info: "Предлагаем наборы заданий для изучения основ программирования. Предполагается, что обучение проходит в течение двух лет.",
        img: "/event_img.jpg"
    },
    {
        contest_id: "2",
        date_start: "10.10.2023",
        date_end: "12.10.2023",
        name: "Ежегодный хакатон по разработке",
        info: "Предлагаем наборы заданий для изучения основ программирования. Предполагается, что обучение проходит в течение двух лет.",
        img: "/event_img.jpg"
    },
    {
        contest_id: "3",
        date_start: "10.10.2023",
        date_end: "12.10.2023",
        name: "Новый хакатон по разработке",
        info: "Предлагаем наборы заданий для изучения основ программирования. Предполагается, что обучение проходит в течение двух лет.",
        img: "/event_img.jpg"
    }
]
    return (
        <Layout>
            <div className={styles.blocksPart}> 
            <div className={styles.heading}>
                <span>Ближайшие события</span>
                <span className={styles.date}>Календарь мероприятий</span>
            </div>
                <div className={styles.groupBlocks}>
                {dataEvent.map((dEvent) => 
                <div className={styles.eventBlock}>
                    <Image src={dEvent.img} width={100} height={50} alt={"event"}/>
                    <div className={styles.name}>{dEvent.name}</div>
                    <span className={styles.date}>{dEvent.date_start} - {dEvent.date_end}</span>
                </div>
                )}
                </div>
            </div>
        </Layout>
    )
}

export default Home;