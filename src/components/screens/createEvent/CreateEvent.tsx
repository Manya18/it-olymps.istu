import styles from "./CreateEvent.module.css";
import Layout from "@/components/layout/Layout";
import { TextField, Input, InputLabel, Button } from '@mui/material';
import useStore from "@/components/useStore";

const CreateEvent = () => {
    let currentDate = new Date();
    let currentDateString = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + 'T';
    if(currentDate.getHours() < 10) currentDateString += '0';
    currentDateString += currentDate.getHours() + ':';
    if(currentDate.getMinutes() < 10) currentDateString += '0';
    currentDateString += currentDate.getMinutes();

    const {setNameImage} = useStore();
    function readFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
              reader.onload = (function (file) {
          return function (e) {
            var r = e.target;
            setNameImage(r.result);
          };
        })(file);
        // получает URL файла
        reader.readAsDataURL(file);
    }
    return (
        <Layout>
            <div className={styles.blocksPart}>
                <div className={styles.heading}>Формирование IT-события</div>
                <center>
                    <TextField id="event_name" label="Название события" sx={{m:2, width: 600}}/><br/>
                    <TextField
                        id="start_date"
                        label="Начало приёма заявок"
                        type="datetime-local"
                        defaultValue={currentDateString}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{m:2}}
                    />
                    <TextField
                        id="finish_date"
                        label="Конец приёма заявок"
                        type="datetime-local"
                        defaultValue={currentDateString}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{m:2}}
                    />
                    <TextField
                        id="event_desc"
                        label="Описание события"
                        multiline
                        maxRows={10}
                        sx={{m:2, width: 600}}
                    />
                    <InputLabel> Загрузить изображение </InputLabel>
                    <Input type="file" onChange={(e)=> readFile(e)}/><br/><br/>
                    <Button className={styles.buttonStyle}>Сохранить</Button>
                </center>
            </div>
        </Layout>
    )
}

export default CreateEvent;