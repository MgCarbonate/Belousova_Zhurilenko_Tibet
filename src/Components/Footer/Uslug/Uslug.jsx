import styles from './Uslug.module.css'

function Uslug() {

    return (
        <>
            <div className={styles.Uslug}>
                <h1 className={styles.Slon}>Наши услуги</h1>
                <div className={styles.Spisok}>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Прогулки в горы летом</p>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Зимние походы в горы</p>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Poseh}>Посещение храмов в горах</p>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Экстремальные виды туризма</p>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <div className={styles.Wen}>
                            <p className={styles.Progul}>Походы в джунглях Амазонии</p>
                            <button className={styles.New}>new</button>
                        </div>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Поездка в Африку</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Uslug