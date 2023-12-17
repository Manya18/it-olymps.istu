import Layout from "@/components/layout/Layout";
import Image from "next/image";
import styles from "./Home.module.css";
import NewsFeed from "@/components/feeds/NewsFeed";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    // const {role, setRole} = useStore();
    const [data, setData] = useState();

    // axios({
    //     method: 'get',
    //     url: 'http://localhost:8080/profile/api/v1/ea4aa5d7-69ff-4bb2-a066-22be78b1dff6',
    //     data: {
    //       userId: 'ea4aa5d7-69ff-4bb2-a066-22be78b1dff6',
    //     }
    //   });
    
    // axios.get('http://localhost:8080/api/v1/profile/ea4aa5d7-69ff-4bb2-a066-22be78b1dff6')
    // .then(response => {
    //     console.log(response.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    // fetch(`http://localhost:8080/api/v1/profile/ea4aa5d7-69ff-4bb2-a066-22be78b1dff6`)
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    // axios
    //      .get('http://localhost:8080/profile/api/v1/ea4aa5d7-69ff-4bb2-a066-22be78b1dff6')
    //      .then((response) => {
    //         console.log(response.data);
    //      })
    //      .catch((err) => {
    //         console.log(err);
    //      });

    //это для получения куки
    const [items, setItems] = useState('');

    useEffect(() => {
        const items = localStorage.getItem('role');
        console.log(items)
        if (items) {
            setItems(items);
        }
    }, []);

    //запрос постов
    const getPostsData = () => {
        axios.get('http://localhost:8080/api/v1/posts?page=0&onPage=5')
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                
            })
            .catch((err) => {
                console.log(err);
            });
    } 
    useEffect(() => {
        getPostsData();
    }, [])

    
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
                <Link href={`/${dEvent.contest_id}`}>
                    <div className={styles.eventBlock}>
                        
                        <img src={dEvent.img} alt="event" className={styles.image}/>
                        <br/>
                        {/* <Image src={dEvent.img} width={100%} height={50} alt={"event"}/> */}
                        <div className={styles.name}>{dEvent.name}</div>
                        <span className={styles.date}>{dEvent.date_start} - {dEvent.date_end}</span>
                    </div>
                </Link>
                )}
                </div>
                
                <NewsFeed value={data}/>
                <Footer/>
            </div>
        </Layout>
    )
}


export default Home;