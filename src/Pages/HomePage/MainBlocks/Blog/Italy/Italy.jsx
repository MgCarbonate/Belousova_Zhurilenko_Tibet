import styles from './Italy.module.css'

function Italy() {

    return (
        <>
            <div className={styles.Italy}>
                <img src="/image/Italy.webp" alt="Фото города в Италии" />
                <div className={styles.Infa_It}>
                    <h2 className={styles.Kras}>Красивая Италя, какая она в реальности?</h2>
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

export default Italy