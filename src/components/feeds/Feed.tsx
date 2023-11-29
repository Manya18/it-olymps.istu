import styles from "./NewsFeed.module.css";

const NewsFeed = (data:any)  => {
    console.log(data)
    return (
        <div className={styles.main}>
            <b className={styles.headText}>{data.value.name}</b>
            <div className={styles.group}>
                <p className={styles.date}>{data.value.date_create}</p>
                <p className={styles.author}>{data.value.author}</p>
            </div>
            <p className={styles.textFeed}>{data.value.text}</p>
        </div>
    )
}

export default NewsFeed;