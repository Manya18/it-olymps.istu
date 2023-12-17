import { Input } from "@mui/material";
import Feed from "./Feed";
import styles from "./NewsFeed.module.css";
import axios from "axios";
import { useEffect } from "react";

const NewsFeed = (postsData: any[])  => {

    console.log(Object.values(postsData)[0])
    const dataEv=Object.values(postsData)[0];
   
    return (
           <div>
                <div className={styles.b}>Новостная лента:</div>
                {dataEv && dataEv.map((data: any) => 
                    <Feed value={data}/>
                )}
                    
           </div>
    )
}

export default NewsFeed;