import Layout from "@/components/layout/Layout";
import styles from "./UserProfile.module.css";
import { Button, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const UserProfile = () => {
    const userData = {
        surname: "Иванов",
        name: "Иван",
        patronymic: "Иванович",
        country: 1,
        region: 18,
        city: "Ижевск",
        study_place: "ИжГТУ",
        grade: 3,
        tshirt_size: 3
    }
    return (
        <Layout>
            <div className={styles.blocksPart}> 
                <div className={styles.heading}>Профиль</div>
                <img src="/profile-photo.png" alt="profile photo" className={styles.image}/>
                <div className={styles.name}>{userData.surname + ' ' + userData.name + ' ' + userData.patronymic}</div>
                <center>
                    <TextField required id="surname" label="Фамилия" defaultValue={userData.surname} sx={{m:2}}/>
                    <TextField required id="name" label="Имя" defaultValue={userData.name} sx={{m:2}}/>
                    <TextField id="patronymic" label="Отчество" defaultValue={userData.patronymic} sx={{m:2}}/>

                    <TextField id="country" select label="Страна" defaultValue={userData.country}>
                        <MenuItem value={1}>Россия</MenuItem>
                        <MenuItem value={2}>Казахстан</MenuItem>
                    </TextField>

                    
                    <TextField id="region" select label="Регион" defaultValue={userData.region}>
                        <MenuItem value={16}>Республика Татарстан</MenuItem>
                        <MenuItem value={18}>Удмуртская республика</MenuItem>
                    </TextField>

                    <TextField id="city" label="Населенный пункт" defaultValue={userData.city}/><br/><br/>

                    <TextField id="study_place" label="Место учебы" defaultValue={userData.study_place}/>
                    <TextField id="grade" label="Класс/курс" defaultValue={userData.grade}/><br/><br/>

                    <TextField id="tshirt_size" select label="Размер футболки" defaultValue={userData.tshirt_size} sx={{ width: 150 }}>
                        <MenuItem value={0}>XS</MenuItem>
                        <MenuItem value={1}>S</MenuItem>
                        <MenuItem value={2}>M</MenuItem>
                        <MenuItem value={3}>L</MenuItem>
                        <MenuItem value={4}>XL</MenuItem>
                        <MenuItem value={5}>XXL</MenuItem>
                    </TextField><br/><br/>

                    <Button className={styles.buttonStyle}>Сохранить</Button>
                </center>
            </div>
        </Layout>
    )
}

export default UserProfile;