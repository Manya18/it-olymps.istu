import Layout from "@/components/layout/Layout";
import Image from "next/image";
import styles from "./Home.module.css";
import NewsFeed from "@/components/feeds/NewsFeed";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage = () => {
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
                    <div className={styles.headText}>Ближайшие события:</div>
                    <Link href='/calender' className={styles.calender}>Календарь мероприятий</Link>
                </div>
                <div className={styles.groupBlocks}>
                {dataEvent.map((dEvent) => 
                <div className={styles.eventBlock}>
                    <Link href='/event'>
                    <img src={dEvent.img} alt="event" className={styles.image}/>
                    </Link><br/>
                    {/* <Image src={dEvent.img} width={100%} height={50} alt={"event"}/> */}
                    <div className={styles.name}>{dEvent.name}</div>
                    <span className={styles.date}>{dEvent.date_start} - {dEvent.date_end}</span>
                </div>
                )}
                </div>
                
                <NewsFeed/>
                <Footer/>
            </div>
        </Layout>
    )
}

export default Home;