import Profile from "@/components/screens/userProfile/Profile";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

let user = {
    surname: "", 
    name: "",
    patronymic: "",
    country: "",
    region: "",
    city: "",
    study_place: "",
    grade: "",
    tshirt_size: ""
    };
    
const Profil: NextPage = () => {
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        const role = localStorage.getItem('role');
        const userId = localStorage.getItem('userId');
        if (role) setRole(role);
        if(userId) setUserId(userId)
    }, []);
    useEffect(() => {

    fetch(`http://localhost:8080/api/v1/profile/${userId}`)
        .then(response => response.json())
        .then(data => 
            {
                // if(user.name == "") window.location.href='/';
                user = {
                    surname: data.surname,
                    name: data.name,
                    patronymic: data.patronymic,
                    country: data.country,
                    region: data.region,
                    city: data.city,
                    study_place: data.studyPlace,
                    grade: data.grade,
                    tshirt_size: data.tshirtSize
                }
            }
           );
        })

    return <Profile value ={user}/>
}

export default Profil;