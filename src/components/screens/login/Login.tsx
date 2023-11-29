import Layout from "@/components/layout/Layout";
import styles from "./LoginScreen.module.css";
import { Button, Input, InputLabel, LinearProgress, MenuItem, Select, Stack, List, ListItem, ListItemText, ListItemButton, Collapse, Box} from '@mui/material';
import user from "person.png"
import email from "email.png"
import password from "password.png"

const Login = () => {
    return (
        <Box className={styles.w}>
        <Stack className={styles.st} style={{flexDirection: 'row', display: 'flex'}}> 
            <h2 className={styles.h2}>Войти</h2>
            <h2 className={styles.h2}>Зарегистрироваться</h2>
        </Stack>
        <Stack>
            <input>
            </input>
        </Stack>
        </Box>
    )
}

export default Login;