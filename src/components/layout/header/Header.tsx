import Link from "next/link";
import { FC } from "react"
import styles from "./Header.module.css"
import { useRouter } from "next/router";
import Image from "next/image";

const Header: FC = () => {

    const {pathname} = useRouter();

    return <div className={styles.header}>
        <Link href='/' className={styles.logo}>
            <img className={styles.logo} src="/logo.png" alt={"logo"}/>
            </Link>
        <Link href='/profile'>Войти/зарегистрироваться</Link>
    </div>
}

export default Header;