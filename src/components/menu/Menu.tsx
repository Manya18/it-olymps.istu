import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import styles from "./Menu.module.css"
import { useState } from "react";
import Link from "next/link";

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
        <Link href='/' style={{fontSize:"3vh"}}>
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
    const data = [
    {
        alt: "Иннотех",
        src: "/innotech.png", 
        link: "https://inno.tech/ru/"
    },
]

    const [open, setOpen] = useState(false);
    const [rolle, setRolle] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.menu}>
            <ListItemButton onClick={handleClick}>
                <p>Петров Иван</p>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div style={{ display:"flex", flexDirection:"column", padding: "8px", fontSize:"3vh"}} >
                        {rolle ? <MenuUser/> : <MenuAdmin/>}
                    </div>
                </List>
            </Collapse>
        </div>
    )
}

export default Menu;