import Layout from "@/components/layout/Layout";
import Image from "next/image";
import styles from "./Home.module.css";
import NewsFeed from "@/components/feeds/NewsFeed";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import EventBlocks from "./EventBlocks";

const Home: NextPage = () => {
    // const {role, setRole} = useStore();
    const [postData, setPostData] = useState();
    const [eventData, setEventData] = useState();

    //это для получения куки
    const [items, setItems] = useState('');

    useEffect(() => {
        const items = localStorage.getItem('role');
        if (items) {
            setItems(items);
        }
    }, []);
    console.log(items)
    //запрос постов
    const getPostsData = () => {
        axios.get('http://localhost:8080/api/v1/posts?page=0&onPage=5')
            .then((response) => {
                setPostData(response.data);
                console.log('posts', response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    } 

    const getEventData = () => {
        axios.get('http://localhost:8080/api/v1/events?page=0&onPage=3')
        .then((response) => {
            setEventData(response.data);
            console.log(Object.values(response.data))
        })
        .catch((err) => {
            console.log(err);
        });
    } 
    useEffect(() => {
        getPostsData();
        getEventData();
    }, [])

    return (
        <Layout>
            <div className={styles.blocksPart}> 
                <div className={styles.heading}>
                    <div className={styles.headText}>Ближайшие события:</div>
                    <Link href='/calender' className={styles.calender}>Календарь мероприятий</Link>
                </div>
                
                <EventBlocks value={eventData}/>
                
                <NewsFeed value={postData}/>
                <Footer/>
            </div>
        </Layout>
    )
}


export default Home;