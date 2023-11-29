import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import styles from "./Menu.module.css"
import { useState } from "react";
import Link from "next/link";

const Menu = ()  => {
    const data = [
    {
        alt: "Иннотех",
        src: "/innotech.png", 
        link: "https://inno.tech/ru/"
    },
]

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.menu}>
            <ListItemButton onClick={handleClick}>
                <p>Иванов Иван</p>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div style={{ display:"flex", flexDirection:"column", padding: "8px", fontSize:"3vh"}} >
                        <Link href='/profile' style={{fontSize:"3vh"}}>
                            Профиль
                        </Link >
                        <Link href='/myOlympiads' style={{fontSize:"3vh"}}>
                            Мои олимпиады
                        </Link>
                        <Link href='/myDiploms' style={{fontSize:"3vh"}}>
                            Мои сертификаты
                        </Link>
                        <div style={{fontSize:"3vh"}}>
                            Настройки
                        </div>
                        <div style={{fontSize:"3vh"}}>
                            Выход
                        </div>
                    </div>
                </List>
            </Collapse>
        </div>
    )
}

export default Menu;