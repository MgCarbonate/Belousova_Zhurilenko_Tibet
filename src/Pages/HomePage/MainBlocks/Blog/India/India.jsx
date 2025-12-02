import styles from './India.module.css'

function India() {

    return (
        <>
            <div className={styles.India}>
                <img src="/image/India.webp" alt="Фото Тадж Махала" />
                <div className={styles.Infa_It}>
                    <h2 className={styles.Kras}>Индия ... летим?</h2>
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

export default India