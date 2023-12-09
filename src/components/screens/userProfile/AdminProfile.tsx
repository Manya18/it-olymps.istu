// import Layout from "@/components/layout/Layout";
// import styles from "./UserProfile.module.css";
// import { Button, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';

// const UserProfile = () => {
//     const userData = {
//         surname: "Андреев",
//         name: "Никита",
//         patronymic: "Иванович",
//         rolle: "Администратор"
//     }
//     return (
//             <div className={styles.blocksPart}> 
//                 <img src="/profile-photo.png" alt="profile photo" className={styles.image}/>
//                 <div className={styles.name}>{userData.surname + ' ' + userData.name + ' ' + userData.patronymic}</div>
//                 <center>
//                     <TextField required id="surname" label="Фамилия" defaultValue={userData.surname} sx={{m:2, width: 150}}/>
//                     <TextField required id="name" label="Имя" defaultValue={userData.name} sx={{m:2, width: 150}}/>
//                     <TextField id="patronymic" label="Отчество" defaultValue={userData.patronymic} sx={{m:2, width: 150}}/><br/>

//                     <TextField required id="rolle" label="Роль" defaultValue={userData.rolle} sx={{m:2, width: 150}}/><br/>

//                     <Button className={styles.buttonStyle}>Сохранить</Button>
//                 </center>
//             </div>
//     )
// }

// export default UserProfile;