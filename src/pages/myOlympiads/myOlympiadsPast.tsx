import Layout from "@/components/layout/Layout";
import MyOlympiads from "./myOlympiads";
import MyOlympiadsPast from "@/components/screens/MyOlympiads/MyOlympiadsPast";
import { NextPage } from "next";

const myOlympiadsPast = () => {
    return (
        <MyOlympiads>
            <MyOlympiadsPast/>
        </MyOlympiads>
    )
}

export default myOlympiadsPast;