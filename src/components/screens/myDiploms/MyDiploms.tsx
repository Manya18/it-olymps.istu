import Layout from "@/components/layout/Layout";
import styles from "./MyDiploms.module.css";
import { Button, Input, InputLabel, MenuItem, Select } from '@mui/material';

const MyDiploms = () => {
    return (
        <Layout>
            <div className={styles.blocksPart}>
                <div className={styles.heading}>Ноябрь 2023</div>
                <div className={styles.groupBlocks}>
                    <div className={styles.diplomBlock}>
                        <img src="/diplom.png" alt="diplom" className={styles.image}/>
                        <a className={styles.name} href="/diplom.png" download>certificate.pdf</a>
                    </div>
                    <div className={styles.diplomBlock}>
                        <img src="/diplom.png" alt="diplom" className={styles.image}/>
                        <div className={styles.name}>certificate.pdf</div>
                    </div>
                    <div className={styles.diplomBlock}>
                        <img src="/diplom.png" alt="diplom" className={styles.image}/>
                        <div className={styles.name}>certificate.pdf</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyDiploms;