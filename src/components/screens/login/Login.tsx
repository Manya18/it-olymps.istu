import Layout from "@/components/layout/Layout";
import styles from "./LoginScreen.module.css";
import { Button, Input, InputLabel, LinearProgress, MenuItem, Select, Stack, List, ListItem, ListItemText, ListItemButton, Collapse, Box} from '@mui/material';
import user from "person.png"
import email from "email.png"
import password from "password.png"
import { useState } from "react";
import useStore from "@/components/useStore";
import axios from "axios";
import React from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);
    const {role, setRole} = useStore();
    const logIn = () => {
        if(email==='admin@admin.ru' && password ==='admin' || email==='user@user.ru' && password ==='user'){
           axios.post(`http://localhost:8080/api/v1/user/signin?email=${email}&password=${password}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => 
                { 
                    if(response) 
                    {
                        window.location.href='/';
                        console.log(response.data)
                        //запись в куки
                        localStorage.setItem('userId', response.data.userId);
                        localStorage.setItem('role', response.data.role);
                        localStorage.getItem('role');
                    }
                    else console.log(response)
                })
                console.log('if', valid)
                setRole('admin');
        }
        else {
            setValid(true);
            console.log('else',valid)
        }

    }
    

    console.log(valid)
    return (
        <Box className={styles.w}>
        <Stack className={styles.st} style={{flexDirection: 'row', display: 'flex'}}> 
            <h2 className={styles.h2}>Войти</h2>
            <h2 className={styles.h2}>Зарегистрироваться</h2>
        </Stack>
        <Stack>
            <Input value={email} type='string' onChange={(e) => setEmail(e.target.value)}></Input>
            <Input value={password} type='string' onChange={(e) => setPassword(e.target.value)}></Input>
            <Button onClick={() => logIn()}>Войти</Button>
            {valid && <div style={{color:'red'}}>Неверный логин или пароль</div>}
        </Stack>
        </Box>
    )
}

export default Login;