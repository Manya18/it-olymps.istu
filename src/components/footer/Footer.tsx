import styles from "./Footer.module.css"

const Footer = ()  => {
    const data = [
    {
        alt: "Иннотех",
        src: "/innotech.png", 
        link: "https://inno.tech/ru/"
    },
    {
        alt: "СКБ Контур",
        src: "/SKBKontur.png",
        link: "https://kontur.ru/education/programs/intern"
    },
    {
        alt: "Ardecs",
        src: "/ardecs.png",
        link: "https://www.ardecs.com/"
    },
    {
        alt: "Elma",
        src: "/elma.png",
        link: "https://www.elma-bpm.ru/"
    },
    {
        alt: "Тинькофф",
        src: "/tinkoff.png",
        link: "https://www.tinkoff.ru/software/"
    },
    {
        alt: "Ds",
        src: "/Ds.png",
        link: "https://vk.com/dexsys"
    }
]
    return (
        <div className={styles.footer}>
            <b className={styles.text}>Наши партнеры:</b>
            <div className={styles.block}>
                {data.map((d) => 
                    <a href={d.link} target="_blank">
                        <img src={d.src} alt={d.alt} className={styles.image}/>                    
                    </a>
                )}
            </div>
        </div>
    )
}

export default Footer;