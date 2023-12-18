import Layout from "@/components/layout/Layout";
import styles from "./EventScreen.module.css";
import { Button, Input, InputLabel, LinearProgress, MenuItem, Select, Stack, List, ListItem, ListItemText, ListItemButton, Collapse, Link} from '@mui/material';
import Login from "../login/Login";


const Event = ({event}) => {
    return (
        <Layout>
            <br/>  <br/>   <br/>  <br/>           
            <h2 className={styles.h2}>Приглашение на регистрацию в мероприятии</h2> <br/> <br/>  <br/>  
            {/* <p className={styles.p}>Мы с радостью приглашаем вас принять участие в мероприятии <strong>{event.head}</strong>! Это уникальное мероприятие предоставит вам возможность проявить свои навыки, обменяться опытом с единомышленниками и насладиться атмосферой творчества.</p> */}
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
            <br/> <p className={styles.p}>Не упустите шанс проявить свой потенциал и встретить интересных людей! Ждем вас на нашем хакатоне.</p> <br/>
            <Button className={styles.buttonStyle}>зарегистрироваться</Button>

        </Layout>
    )
}

export default Event;