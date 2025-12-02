import styles from './Reki.module.css'

function Reki() {

    return (
        <>
            <div className={styles.Reki}>
                <div className={styles.Luch}>
                    <div className={styles.Net}>
                        <p className={styles.Pohode}>наше предложение</p>
                        <h2 className={styles.Gorn}>Лучшие программы для тебя</h2>
                    </div>
                    <p className={styles.Ego}>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.</p>
                    <div className={styles.Gadi}>
                        <div className={styles.Opit}>
                            <img src="/image/Miting.svg" alt="Иконка гид ведёт людей" loading='lazy' />
                            <div className={styles.Bezo}>
                                <p className={styles.Pohod}>Опытный гид</p>
                                <p className={styles.Loyl}>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </div>
                        </div>
                        <div className={styles.Opit}>
                            <img src="/image/Shit.svg" alt="Иконка щита" loading='lazy' />
                            <div className={styles.Bezo}>
                                <p className={styles.Pohod}>Безопасный поход</p>
                                <p className={styles.Loyl}>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </div>
                        </div>
                        <div className={styles.Opit}>
                            <img src="/image/BigBen.svg" alt="Иконка ценика" loading='lazy' />
                            <div className={styles.Bezo}>
                                <p className={styles.Pohod}>Лояльные цены</p>
                                <p className={styles.Loyl}>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </div>
                        </div>
                    </div>
                    <button className={styles.Price_Prog}>Стоимость программ</button>
                </div>
                <div className={styles.Kartinki}>
                    <img src="/image/Bally.webp" alt="Отдых на Балли" loading='lazy' />
                    <img src="/image/Kanion.webp" alt="Каньон" loading='lazy' />
                    <img src="/image/Mountain_Snow.webp" alt="Мужчина на снегоходе в горах" loading='lazy' />
                    <img src="/image/Red_River.webp" alt="Красная река и холмы" loading='lazy' />
                </div>
            </div>
        </>
    )
}

export default Reki