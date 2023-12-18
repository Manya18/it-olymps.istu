import Layout from "@/components/layout/Layout";
import styles from "./Profile.module.css";
import { Box, Button, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";

// let userData = {
//     surname: "",
//     name: "",
//     patronymic: "",
//     country: "",
//     region: "",
//     city: "",
//     study_place: "",
//     grade: "",
//     tshirt_size: ""
// }



const Profile = (userData) => {
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');

    const idRef = useRef(userId);
    const roleRef = useRef(role);

    const [type, setType] = useState(false);

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [study_place, setStudyPlace] = useState('');
    const [grade, setGrade] = useState('');
    const [tshirt_size, setTshirtSize] = useState('');

    const userdata = Object.values(userData)[0];
    console.log('userdata', Object.values(userData)[0])
    async function putData () {
        if(role === 'admin')
        await axios.put(`http://localhost:8080/api/v1/profile/${userId}`, {
            "id": userId,
            "email": "admin@admin.ru",
            "name": name,
            "surname": surname,
            "patronymic": patronymic,
            "country": "Россия",
            "region": "Удмуртия",
            "city": "Ижевск",
            "studyPlace": "ИжГТУ",
            "grade": "1",
            "tshirtSize": "S"
      });
      if(role === 'user')
      await axios.put(`http://localhost:8080/api/v1/profile/${userId}`, {
          "id": userId,
          "email": "user@user.ru",
          "name": name,
          "surname": surname,
          "patronymic": patronymic,
          "country": country,
          "region": region,
          "city": city,
          "studyPlace": study_place,
          "grade": grade,
          "tshirtSize": tshirt_size
    });      
    }
       
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


    return (
        <Layout>
            <div className={styles.blocksPart}> 
                <img src="/profile-photo.png" alt="profile photo" className={styles.image}/>
                <div className={styles.name}>{userdata.surname + ' ' + userdata.name + ' ' + userdata.patronymic}</div>
                <center>
                    {!type &&<TextField required id="surname" label="Фамилия" value={userdata.surname} sx={{m:2, width: 150}}/> }
                    {type && <TextField required id="surname" label="Фамилия" onChange={(e)=> {setSurname(e.target.value)}} sx={{m:2, width: 150}}/> }
                    
                    {!type && <TextField required id="name" label="Имя" value={userdata.name} sx={{m:2, width: 150}}/>}
                    {type && <TextField required id="name" label="Имя" onChange={(e)=> {setName(e.target.value)}} sx={{m:2, width: 150}}/>}
                    
                    {!type && <TextField id="patronymic" label="Отчество" value={userdata.patronymic} sx={{m:2, width: 150}}/>}
                    {type && <TextField id="patronymic" label="Отчество" onChange={(e)=> {setPatronymic(e.target.value)}} sx={{m:2, width: 150}}/>}<br/>


                    {!type && role === 'user' && <TextField id="country" select label="Страна" value={userdata.country} sx={{m:2, width: 150}}>
                        <MenuItem value={'Россия'}>Россия</MenuItem>
                        <MenuItem value={'Казахстан'}>Казахстан</MenuItem>
                    </TextField>}
                    {type && role === 'user' && <TextField id="country" select label="Страна" onChange={(e)=> {setCountry(e.target.value)}} sx={{m:2, width: 150}}>
                        <MenuItem value={'Россия'}>Россия</MenuItem>
                        <MenuItem value={'Казахстан'}>Казахстан</MenuItem>
                    </TextField>}

                    {!type && role === 'user' && <TextField id="region" select label="Регион" value={userdata.region} sx={{m:2, width: 150}}>
                        <MenuItem value={'Татарстан'}>Татарстан</MenuItem>
                        <MenuItem value={'Удмуртия'}>Удмуртия</MenuItem>
                    </TextField>}
                    {type && role === 'user' && <TextField id="region" select label="Регион" onChange={(e)=> {setRegion(e.target.value)}} sx={{m:2, width: 150}}>
                        <MenuItem value={'Татарстан'}>Татарстан</MenuItem>
                        <MenuItem value={'Удмуртия'}>Удмуртия</MenuItem>
                    </TextField>}

                    {!type && role === 'user' && <><TextField id="city" label="Населенный пункт" value={userdata.city} sx={{ m: 2, width: 150 }} /><br /></>}
                    {type && role === 'user' && <><TextField id="city" label="Населенный пункт" onChange={(e)=> {setCity(e.target.value)}} sx={{ m: 2, width: 150 }} /><br /></>}

                    {!type && role === 'user' && <TextField id="study_place" label="Место учебы" value={userdata.study_place} sx={{m:2, width: 150}}/>}
                    {type && role === 'user' && <TextField id="study_place" label="Место учебы" onChange={(e)=> {setStudyPlace(e.target.value)}} sx={{m:2, width: 150}}/>}

                    {!type && role === 'user' && <><TextField id="grade" label="Класс/курс" value={userdata.grade} sx={{ m: 2, width: 150 }} /><br /></>}
                    {type && role === 'user' && <><TextField id="grade" label="Класс/курс" onChange={(e)=> {setGrade(e.target.value)}} sx={{ m: 2, width: 150 }} /><br /></>}

                    {!type && role === 'user' && <><TextField id="tshirt_size" select label="Размер футболки" value={userdata.tshirt_size} sx={{ width: 150, m: 2 }}>
                    <MenuItem value={'XS'}>XS</MenuItem>
                    <MenuItem value={'S'}>S</MenuItem>
                    <MenuItem value={'M'}>M</MenuItem>
                    <MenuItem value={'L'}>L</MenuItem>
                    <MenuItem value={'XL'}>XL</MenuItem>
                    <MenuItem value={'XXL'}>XXL</MenuItem>
                </TextField><br /><br /></>}
                
                {type && role === 'user' && <><TextField id="tshirt_size" select label="Размер футболки" onChange={(e)=> {setTshirtSize(e.target.value)}} sx={{ width: 150, m: 2 }}>
                <MenuItem value={'XS'}>XS</MenuItem>
                    <MenuItem value={'S'}>S</MenuItem>
                    <MenuItem value={'M'}>M</MenuItem>
                    <MenuItem value={'L'}>L</MenuItem>
                    <MenuItem value={'XL'}>XL</MenuItem>
                    <MenuItem value={'XXL'}>XXL</MenuItem>
                </TextField><br /><br /></>}

                <Button style={{marginRight: "2vw"}} className={styles.buttonStyle} onClick={() => setType(true)}> Изменить</Button>
                <Button className={styles.buttonStyle} onClick={() => putData()}> Сохранить</Button>
                </center>
            </div>
        </Layout>
    )
}

export default Profile;
