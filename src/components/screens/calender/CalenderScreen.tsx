import styles from "./CalenderScreen.module.css"

const CalenderScreen = ()  => {
    const data = [
    {
        alt: "Иннотех",
        src: "/innotech.png", 
        link: "https://inno.tech/ru/"
    },
]
    return (
        <div className={styles.footer}>
            <b>Календарь мероприятий</b>
            <p>Сентябрь</p>
            <div>
                
            </div>
        </div>
    )
}

export default CalenderScreen;