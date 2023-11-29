import MyOlympiads from "./myOlympiads";
import MyOlympiadsAll from "@/components/screens/MyOlympiads/MyOlympiadsAll";
import { NextPage } from "next";


const myOlympiadsAll = () => {
    return (
        <MyOlympiads>
            <MyOlympiadsAll/>
        </MyOlympiads>
    )
}

export default myOlympiadsAll;