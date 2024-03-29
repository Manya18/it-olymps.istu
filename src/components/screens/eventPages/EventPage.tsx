import Layout from "@/components/layout/Layout";
import styles from "./EventScreen.module.css";
import { Button, Input, InputLabel, LinearProgress, MenuItem, Select, Stack, List, ListItem, ListItemText, ListItemButton, Collapse, Link, Modal, Box, Typography} from '@mui/material';
import Login from "../login/Login";
import axios from "axios";
import { useEffect, useState } from "react";
const Event = (eventData) => {
    const eventD = Object.values(eventData)[0]
    console.log(eventD)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <Layout>
            <br/>  <br/>   <br/>  <br/>           
            <h2 className={styles.h2}>Приглашение на регистрацию в мероприятии</h2> <br/> <br/>  <br/>  
            <br/> <p className={styles.p}><strong>Дата и время: </strong>
             18:00 25.12.2023</p>
             <br/> <p className={styles.p}><strong>Место проведения: </strong>
             ИжГТУ им. М.Т.Калашникова</p>
            <br/> <p className={styles.p}><strong>Программа:</strong></p>
            <ul>
                <li className={styles.li}>Регистрация участников</li>
                <li className={styles.li}>Приветственное слово и ознакомление с правилами</li>
                <li className={styles.li}>Начало хакатона</li>
                <li className={styles.li}>Кофе-брейки и обед</li>
                <li className={styles.li}>Завершение хакатона</li>
                <li className={styles.li}>Презентация проектов и награждение победителей</li>
            </ul>
            {/* { <p>{eventD.Id}</p>} */}
            <br/> <p className={styles.p}>Не упустите шанс проявить свой потенциал и встретить интересных людей! Ждем вас на нашем хакатоне.</p> <br/>
            
                <Button className={styles.buttonStyle} onClick={handleOpen}>зарегистрироваться</Button>
                <Modal
                open={open}                >
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 350, height: 75, bgcolor: 'background.paper'}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
                        Вы успешно зарегистрированы!
                    </Typography>
                    <center><Button className={styles.buttonStyle} onClick={handleClose}>ОК</Button></center>
                </Box>
                </Modal>

        </Layout>
    )
}

export default Event;