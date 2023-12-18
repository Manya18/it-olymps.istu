import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import styles from "./Menu.module.css"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

const MenuUser = ()  => {
    return(
        <><Link href='/profile' style={{ fontSize: "3vh" }}>
            Профиль
        </Link>
        <Link href='/myOlympiads' style={{ fontSize: "3vh" }}>
            Мои олимпиады
        </Link><Link href='/myDiploms' style={{ fontSize: "3vh" }}>
            Мои сертификаты
        </Link><Link href='/' style={{ fontSize: "3vh" }}>
            Настройки
        </Link><Link href='/' style={{ fontSize: "3vh" }}>
            Выход
        </Link></>
    )
}

 const MenuAdmin = ()  => {
    return(
        <><Link href='/profile' style={{ fontSize: "3vh" }}>
            Профиль
        </Link>
        <Link href='/createEvent' style={{fontSize:"3vh"}}>
            Создать событие
        </Link>
        <Link href='/makeDiploms' style={{fontSize:"3vh"}}>
            Создать сертификаты
        </Link>
        <Link href='/' style={{fontSize:"3vh"}}>
            Администрирование
        </Link></>
    )
 }

const Menu = ()  => {
    
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');

    const idRef = useRef(userId);
    const roleRef = useRef(role);

    useEffect(() => {
        const role = localStorage.getItem('role');
        const userId = localStorage.getItem('userId');
        if (role) setRole(role);
        if(userId) setUserId(userId)
    }, []);

        useEffect(() => {
            const role = localStorage.getItem('role');
        const userId = localStorage.getItem('userId');
        console.log(role)
        if (role) setRole(role);
        if(userId) setUserId(userId)
        }, [])


        useEffect (()=> {
        idRef.current = userId;
        roleRef.current = role;
    }, [[userId], [role]])

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/profile/${userId}`)
        .then(response => response.json())
        .then(data => 
            {
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

        console.log('data',user)
   
    return (
        <div className={styles.menu}>
           <ListItemButton onClick={handleClick}>
                <p>{user.surname + ' ' + user.name}</p>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div style={{ display:"flex", flexDirection:"column", padding: "8px", fontSize:"3vh"}} >
                        {role === 'user' ? <MenuUser/> : <MenuAdmin/>}
                    </div>
                </List>
            </Collapse>
        </div>
    )
}

export default Menu;