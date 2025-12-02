import styles from './Odino.module.css'

function Odino() {

    return (
        <>
            <div className={styles.Odino}>
                <img src="/image/Plane.webp" alt="Фото вида из самолёта" />
                <div className={styles.Infa_It}>
                    <h2 className={styles.Kras}>Долой сомнения! Весь мир открыт для вас!</h2>
                    <p className={styles.Cov}>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                    <div className={styles.Niz_Mc}>
                        <p className={styles.Kogda}>01/04/2023</p>
                        <p className={styles.Chitay}>читать статью</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Odino