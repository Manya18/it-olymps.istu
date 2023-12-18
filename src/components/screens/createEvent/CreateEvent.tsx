import styles from "./CreateEvent.module.css";
import Layout from "@/components/layout/Layout";
import { TextField, Input, InputLabel, Button } from '@mui/material';
import useStore from "@/components/useStore";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const CreateEvent = () => {

    let currentDate = new Date();
    let currentDateString = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + 'T';
    if(currentDate.getHours() < 10) currentDateString += '0';
    currentDateString += currentDate.getHours() + ':';
    if(currentDate.getMinutes() < 10) currentDateString += '0';
    currentDateString += currentDate.getMinutes();

    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [dateStart, setDateStart] = useState(currentDateString.toString());
    const [dateEnd, setDateEnd] = useState(currentDateString.toString());


    // const {setNameImage} = useStore();
    // function readFile(e) {
    //     var file = e.target.files[0];
    //     var reader = new FileReader();
    //           reader.onload = (function (file) {
    //       return function (e) {
    //         var r = e.target;
    //         setNameImage(r.result);
    //       };
    //     })(file);
    //     // получает URL файла
    //     reader.readAsDataURL(file);
    // }

    const changeStartDate = (e:any) => {
        const date = new Date(e.target.value);
        setDateStart(date.toISOString()); 
        console.log('dateStart', dateStart)
    }

    const changeEndDate = (e:any) => {
        const date = new Date(e.target.value);
        setDateEnd(date.toISOString()); 
        console.log('dateEnd', dateEnd)
    }


    async function publishPost() {
        //изменяем отображение полей ввода
        console.log(eventName, description, dateStart, dateEnd)
        if(eventName!='' && description!='')
        {
            await axios.post(`http://localhost:8080/api/v1/events`, {
                "name": `${eventName}`,
                "description": `${description}`,
                "start_date": `${dateStart}`,
                "end_date": `${dateEnd}`
            })
            .then(response => 
                { 
                    window.location.href='/';
                    console.log(response)
            })
        }
        
    }
    
    return (
        <Layout>
            <div className={styles.blocksPart}>
                <div className={styles.heading}>Формирование IT-события</div>
                <center>
                    <TextField id="event_name" label="Название события" sx={{m:2, width: 600}} onChange={(e) => setEventName(e.target.value)}/><br/>
                    <TextField
                        id="start_date"
                        label="Начало приёма заявок"
                        type="datetime-local"
                        defaultValue={dateStart}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{m:2}}
                        onChange={(e) => changeStartDate(e)}
                    />
                    <TextField
                        id="finish_date"
                        label="Конец приёма заявок"
                        type="datetime-local"
                        defaultValue={dateEnd}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{m:2}}
                        onChange={(e) => changeEndDate(e)}
                    />
                    <TextField
                        id="event_desc"
                        label="Описание события"
                        multiline
                        maxRows={10}
                        sx={{m:2, width: 600}}
                        onChange={(e) => setDescription(e.target.value)}/>
                    {/* <InputLabel> Загрузить изображение </InputLabel>
                    <Input type="file" onChange={(e)=> readFile(e)}/><br/><br/> */}
                    <Button className={styles.buttonStyle} onClick={() => publishPost()}>Создать</Button>
                </center>
            </div>
        </Layout>
    )
}

export default CreateEvent;