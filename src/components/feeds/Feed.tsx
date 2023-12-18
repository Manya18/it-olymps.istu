import styles from "./NewsFeed.module.css";

const NewsFeed = (data:any)  => {
    const date = new Date(data.value.created_at)
    const parsedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    return (
        <div className={styles.main}>
            <b className={styles.headText}>{data.value.title}</b>
            <div className={styles.group}>
                <p className={styles.date}>{parsedDate}</p>
                <p className={styles.author}>{data.value.author.email}</p>
            </div>
            <p className={styles.textFeed}>{data.value.content}</p>
        </div>
    )
}

export default NewsFeed;