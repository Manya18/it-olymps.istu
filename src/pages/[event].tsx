import Layout from "@/components/layout/Layout";
import Event from "@/components/screens/eventPages/EventPage";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const eventPage = () => {
    const [eventData, setEventData] = useState(); 

    // var loc = window.location.pathname;
    // console.log(loc)
    // const getEventData = () => {
        axios.get(`http://localhost:8080/api/v1/events/e9ee306f-51a2-4542-ac86-1c6fcc5d756e`)
        .then((response) => {
            setEventData(response.data);
            console.log(response.data)
        })
        .catch((err: any) => {
            console.log(err);
        });
    // } 
    // useEffect(() => {
    //     getEventData();
    // }, [])
    return (
        <Event event={eventData}/>
    )
}

export default eventPage;