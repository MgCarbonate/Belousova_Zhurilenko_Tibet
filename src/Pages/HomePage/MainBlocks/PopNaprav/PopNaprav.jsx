import styles from './PopNaprav.module.css'


function PopNaprav() {

    return (
        <>
            <div className={styles.PopNaprav}>
                <p className={styles.loj}>по версии отдыхающих</p>
                <h1 className={styles.Pravda}>Популярные направления</h1>
                <div className={styles.Cards}>
                    <div className={styles.Card_O}>
                        <div className={styles.Ozero}>
                            <div>
                                <h2 className={styles.Y_gor}>Озеро возле гор</h2>
                                <p className={styles.Roman}>романтическое приключение</p>
                            </div>
                            <div className={styles.Skoka}>
                                <p>480 $</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Card_W}>
                        <div className={styles.Ozero}>
                            <div>
                                <h2 className={styles.Y_gor}>Ночь в горах</h2>
                                <p className={styles.Roman}>в компании друзей</p>
                            </div>
                            <div className={styles.Skoka}>
                                <p>500 $</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Card_T}>
                        
                        <div className={styles.Ozero}>
                            <div>
                                <h2 className={styles.Y_gor}>Йога в горах   </h2>
                                <p className={styles.Roman}>для тех, кто забоится о себе</p>
                            </div>
                            <div className={styles.Skoka}>
                                <p>230 $</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.Vpered}>Рейтинг направлений</button>
            </div>
        </>
    )
}

export default PopNaprav