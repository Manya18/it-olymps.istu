import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react"
import styles from "./Header.module.css"
import { useRouter } from "next/router";
import Image from "next/image";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button, Icon, IconButton } from "@mui/material";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Menu from "@/components/menu/Menu";

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
    
const Header: FC = () => {
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
    return <div className={styles.header}>
        <Link href='/' className={styles.logo}>
        <ImportantDevicesIcon sx={{fontSize: "4vw", marginLeft:"10px"}} />
        </Link>
        <Menu/>
        <Link href='/login' ><AccountCircleOutlinedIcon sx={{fontSize: "4vw", marginRight:"10px"}} /></Link>
    </div>
}

export default Header;