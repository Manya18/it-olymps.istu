import styles from "./MyOlympiadsAll.module.css";

import { List, ListItemText, Collapse, ListItem } from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import { useState } from 'react';



const MyOlympiadsAll = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <List>
            <ListItem  onClick={handleClick1} sx={{width:"13vw", fontWeight:"bold"}}>
                <ListItemText primary="Декабрь 2023"/>
                {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="2 тур открытого осеннего чемпионата ИжГТУ 2023"/>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="3 тур открытого осеннего чемпионата ИжГТУ 2023"/>
                </ListItem>
                </List>
            </Collapse>
            <ListItem  onClick={handleClick2} sx={{width:"13vw"}} className={styles.item}>
                <ListItemText primary="Январь 2023"/>
                {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="1 тур открытого зимнего чемпионата ИжГТУ 2023"/>
                </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default MyOlympiadsAll;