import { Button, Input, TextField } from "@mui/material";
import Feed from "./Feed";
import styles from "./NewsFeed.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const NewsFeed = (postsData: any[])  => {
    const [showButton, setShowCrButton] = useState(false);
    const [titlePost, setTitlePost] = useState('');
    const [contentPost, setContentPost] = useState('');
    console.log(postsData);
    const dataEv=Object.values(postsData)[0];

    const createPost =() => {
        setShowCrButton(true); 
        let elem = document.getElementById('createPost');
        if(elem) elem.style.visibility = 'hidden'
    }

    async function publishPost() {
        //изменяем отображение полей ввода
        setShowCrButton(false);
        //изменяем отображение кнопки создать запись
        let elem = document.getElementById('createPost');
        if(elem) elem.style.visibility = 'visible';
        //пост запрос
        if(titlePost!='' && contentPost!='')
        {
            await axios.post(`http://localhost:8080/api/v1/posts`, {
                "title": `${titlePost}`,
                "content": `${contentPost}`
            })
            .then(response => 
                { 
                    window.location.href='/';
                    console.log(response)
            })
        }
        
    }

    //это для получения куки
    const [role, setRole] = useState('');

    useEffect(() => {
        const items = localStorage.getItem('role');
        if (items) {
            setRole(items);
        }
    }, []);

    return (
           <div>
                <div className={styles.newsLine}>
                    <div className={styles.b}>Новостная лента:</div>
                    {role == "admin" && <Button id="createPost" className={styles.buttonCreate} onClick={() => createPost()}>Создать запись</Button>}
                </div>
                {showButton && <div className={styles.createPost}>
                    <TextField label="Заголовок" variant="outlined" multiline className={styles.field} onChange={(e) => setTitlePost(e.target.value)}></TextField>
                    <TextField label="Текст" variant="outlined" multiline className={styles.field} onChange={(e) => setContentPost(e.target.value)}></TextField>
                    <Button id="publush" className={styles.publish} onClick={() => publishPost()}>Опубликовать</Button>
                    </div>}
                {dataEv && dataEv.map((data: any) => 
                    <Feed value={data}/>
                )}
                    
           </div>
    )
}

export default NewsFeed;