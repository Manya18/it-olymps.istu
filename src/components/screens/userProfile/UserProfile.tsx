import Layout from "@/components/layout/Layout";
import styles from "./UserProfile.module.css";
import { Button, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from "react";
import axios from "axios";

const UserProfile = () => {
    const userData = {
        surname: "Андреев",
        name: "Никита",
        patronymic: "Иванович",
        country: 1,
        region: 18,
        city: "Ижевск",
        study_place: "ИжГТУ",
        grade: 3,
        role: "Участник",
        tshirt_size: 3
    }
    const [role, setRole] = useState(true);

    async function putData () {
        const res = await axios.put(`http://localhost:8080/api/v1/profile/ea4aa5d7-69ff-4bb2-a066-22be78b1dff6`, {
            "id": "ea4aa5d7-69ff-4bb2-a066-22be78b1dff6",
            "email": "admin@admin.ru",
            "name": "Игорь",
            "surname": "Андреев",
            "patronymic": "Иванович",
            "country": "Россия",
            "region": "Удмуртия",
            "city": "Ижевск",
            "studyPlace": "ИжГТУ",
            "grade": "3",
            "tshirtSize": "S"
      });
        console.log(res.data.json)
    }
    
                
    return (
            <div className={styles.blocksPart}> 
                <img src="/profile-photo.png" alt="profile photo" className={styles.image}/>
                <div className={styles.name}>{userData.surname + ' ' + userData.name + ' ' + userData.patronymic}</div>
                <center>
                    <TextField required id="surname" label="Фамилия" defaultValue={userData.surname} sx={{m:2, width: 150}}/>
                    <TextField required id="name" label="Имя" defaultValue={userData.name} sx={{m:2, width: 150}}/>
                    <TextField id="patronymic" label="Отчество" defaultValue={userData.patronymic} sx={{m:2, width: 150}}/><br/>

                    <TextField id="country" select label="Страна" defaultValue={userData.country} sx={{m:2, width: 150}}>
                        <MenuItem value={1}>Россия</MenuItem>
                        <MenuItem value={2}>Казахстан</MenuItem>
                    </TextField>
                    
                    <TextField id="region" select label="Регион" defaultValue={userData.region} sx={{m:2}}>
                        <MenuItem value={16}>Республика Татарстан</MenuItem>
                        <MenuItem value={18}>Удмуртская республика</MenuItem>
                    </TextField>

                    <TextField id="city" label="Населенный пункт" defaultValue={userData.city} sx={{m:2, width: 150}}/><br/>

                    <TextField id="study_place" label="Место учебы" defaultValue={userData.study_place} sx={{m:2, width: 150}}/>
                    <TextField id="grade" label="Класс/курс" defaultValue={userData.grade} sx={{m:2, width: 150}}/><br/>

                    <TextField required id="rolle" label="Роль" defaultValue={userData.role} sx={{m:2, width: 150}}/>
                    <TextField id="tshirt_size" select label="Размер футболки" defaultValue={userData.tshirt_size} sx={{ width: 150, m:2 }}>
                        <MenuItem value={0}>XS</MenuItem>
                        <MenuItem value={1}>S</MenuItem>
                        <MenuItem value={2}>M</MenuItem>
                        <MenuItem value={3}>L</MenuItem>
                        <MenuItem value={4}>XL</MenuItem>
                        <MenuItem value={5}>XXL</MenuItem>
                    </TextField><br/><br/>

                    <Button className={styles.buttonStyle} onClick={()=> putData()}>Сохранить</Button>
                </center>
            </div>
    )
}

export default UserProfile;