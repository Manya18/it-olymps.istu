import Link from "next/link";
import { FC } from "react"
import styles from "./Header.module.css"
import { useRouter } from "next/router";
import Image from "next/image";

const Header: FC = () => {

    const {pathname} = useRouter();

    return <div className={styles.header}>
        <Link href='/' className={styles.logo}><Image src="/logo.png" width={60} height={30} alt={"logo"}></Image></Link>
        <Link href='/profile'>Войти/зарегистрироваться</Link>
    </div>
}

export default Header;