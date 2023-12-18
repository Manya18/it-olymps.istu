import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react"
import styles from "./Header.module.css"
import { useRouter } from "next/router";
import Image from "next/image";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button, Icon, IconButton } from "@mui/material";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Menu from "@/components/menu/Menu";


const Header: FC = () => {

    return <div className={styles.header}>
        <Link href='/' className={styles.logo}>
        <ImportantDevicesIcon sx={{fontSize: "4vw", marginLeft:"10px"}} />
        </Link>
        <Menu/>
        <Link href='/login' ><AccountCircleOutlinedIcon sx={{fontSize: "4vw", marginRight:"10px"}} /></Link>
    </div>
}

export default Header;