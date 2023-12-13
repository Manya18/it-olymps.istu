import Layout from "@/components/layout/Layout";
import Event from "@/components/screens/event/Event";
import { NextPage } from "next";

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

const eventPage = ({event}) => {
    return (
        <Event event={event}/>
    )
}

export default eventPage;