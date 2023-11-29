import { FC, PropsWithChildren } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./MyOlympiads.module.css";
import { Button } from '@mui/material';

const myOlympiads: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <Layout>
             <div className={styles.blocksPart}>
                <div className={styles.buttonsPart}>
                    <Button className={styles.buttonOlymp} href="/myOlympiads/myOlympiadsAll">Будущие олимпиады</Button>
                    <Button className={styles.buttonOlymp} href="/myOlympiads/myOlympiadsPast">Прошедшие олимпиады</Button>
                </div>
                {children}
             </div>
        </Layout>
    )
}

export default myOlympiads;