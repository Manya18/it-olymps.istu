import styles from "./MyOlympiadsPast.module.css";

import { List, ListItemText, Collapse, ListItem } from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import { useState } from 'react';



const MyOlympiadsPast = () => {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <List>
            <ListItem  onClick={handleClick1} sx={{width:"13vw", fontWeight:"bold"}}>
                <ListItemText primary="Сентябрь 2023"/>
                {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="1 тур открытого осеннего чемпионата ИжГТУ 2023"/>
                </ListItem>
                </List>
            </Collapse>
            <ListItem  onClick={handleClick2} sx={{width:"13vw"}} className={styles.item}>
                <ListItemText primary="Октябрь 2023"/>
                {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="2 тур открытого осеннего чемпионата ИжГТУ 2023"/>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="2 тур открытого осеннего чемпионата ИжГТУ 2023"/>
                </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default MyOlympiadsPast;