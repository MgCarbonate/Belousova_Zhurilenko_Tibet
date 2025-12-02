import styles from './Doloy.module.css'

function Doloy() {

    return (
        <>
            <div className={styles.Doloy}>
                <img src="/image/Venecia.webp" alt="Фото одинокого путешествиника" />
                <div className={styles.Infa_It}>
                    <h2 className={styles.Kras}>Как подготовиться к путешествию в одиночку? </h2>
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

export default Doloy