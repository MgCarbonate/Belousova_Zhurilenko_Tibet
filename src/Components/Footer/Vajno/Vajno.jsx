import styles from './Vajno.module.css'

function Vajno() {

  return (
    <>
      <div className={styles.Vajno}>
      <h1 className={styles.Slon}>Важно для путешествий</h1>
                <div className={styles.Spisok}>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Как собрать в долгий поход?</p>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Жизненно важные предметы для похода</p>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Медицинская страховка, гарантии безопасности</p>
                    </div>
                    <div className={styles.Stroka}>
                        <img src="/image/Str.svg" alt="Стрелочка вправо" />
                        <p className={styles.Progul}>Если вы врач - загляните сюда</p>
                    </div>
                </div>
      </div>
    </>
  )
}

export default Vajno