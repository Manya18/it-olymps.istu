import styles from "./LoginScreen.module.css";
import {Box, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Link, colors} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useState } from "react";
import useStore from "@/components/useStore";
import axios from "axios";
import React from "react";

let loginWnd = true;
const setLoginWnd = (bool:boolean) => {
    loginWnd = bool;
}

const loginWindow = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);
    const {role, setRole} = useStore();
    const logIn = () => {
        console.log(email, password)
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
            console.log('else', valid)
        }

    }
    return (
        <Box className={styles.fieldsBlockLogin}>
            <center>
                <div className={styles.header}>Вход</div><br/>
                <div className={styles.question}>Ещё не зарегистрированы?</div>
                <Link href='' className={styles.link} onClick={() => setLoginWnd(false)}>Зарегистрироваться</Link><br/>
                <TextField id='login' label="Электронная почта" color="info" InputProps={{style: {background: "white"}}} onChange={(e)=>{console.log(e.target.value); setEmail(e.target.value)}} sx={{m:1, width: 300}}/><br/>
                <FormControl style={{background: "white"}} sx={{ m: 1, width: 300 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" >Пароль</InputLabel>
                    <OutlinedInput
                        inputProps={{style: {background: "white"}}}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e)=>{console.log(e.target.value); setPassword(e.target.value)}}
                        endAdornment={
                            <InputAdornment position="end" style={{background: "white"}}>
                                <IconButton
                                    style={{background: "white"}}
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
            }
            label="Пароль"
          />
            </FormControl><br/>
            {valid && <div style={{color:'red', fontSize: '150%'}}>Неверный логин или пароль</div>}
            <br/>
            <Button className={styles.buttonStyle} onClick={() => logIn()}>Войти</Button>
            </center>
        </Box>
    )
}

const regWindow = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [showRepPassword, setShowRepPassword] = useState(false);
    const handleClickShowRepPassword = () => setShowRepPassword((show) => !show);
    const handleMouseDownRepPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Box className={styles.fieldsBlockReg}>
            <center>
                <div className={styles.header}>Регистрация</div><br/>
                <div className={styles.question}>Уже зарегистрированы?</div>
                <Link href='' className={styles.link} onClick={() => setLoginWnd(true)}>Войти</Link><br/>
                <TextField id='login' label="Электронная почта" color="info" InputProps={{style: {background: "white"}}} sx={{m:1, width: 300}}/><br/>
                <FormControl style={{background: "white"}} sx={{ m: 1, width: 300 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                    <OutlinedInput
                        inputProps={{style: {background: "white"}}}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end" style={{background: "white"}}>
                                <IconButton
                                    style={{background: "white"}}
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
            }
            label="Пароль"
          />
            </FormControl>
            <FormControl style={{background: "white"}} sx={{ m: 1, width: 300 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Повторите пароль</InputLabel>
                    <OutlinedInput
                        inputProps={{style: {background: "white"}}}
                        id="outlined-adornment-password"
                        type={showRepPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end" style={{background: "white"}}>
                                <IconButton
                                    style={{background: "white"}}
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowRepPassword}
                                    onMouseDown={handleMouseDownRepPassword}
                                    edge="end"
                                >
                                {showRepPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
            }
            label="Пароль"
          />
            </FormControl><br/><br/>
            <Button className={styles.buttonStyle}>Зарегистрироваться</Button>
            </center>
        </Box>
    )
}

const Login = () => {
    return (
        <div>{loginWnd? loginWindow():regWindow()}</div>
    )
}


export default Login;