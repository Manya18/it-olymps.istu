import styles from "./NewsFeed.module.css";

const NewsFeed = (data:any)  => {
    console.log(data)
    return (
        <div className={styles.main}>
            <b className={styles.headText}>{data.value.title}</b>
            <div className={styles.group}>
                <p className={styles.date}>{data.value.creared_at}</p>
                <p className={styles.author}>{data.value.author.email}</p>
            </div>
            <p className={styles.textFeed}>{data.value.content}</p>
        </div>
    )
}

export default NewsFeed;