import styles from './InfoBlock.module.css'

function InfoBlock() {

  return (
    <>
      <div className={styles.InfoBlock}>
        <img src="/image/Woter.webp" alt="Видео наших туров" loading='lazy' />
        <div className={styles.Issa_Text}>
          <div className={styles.Net}>
            <p className={styles.Pohode}>о нашем походе</p>
            <h2 className={styles.Gorn}>Исследуйте все горные массивы мира вместе с нами</h2>
          </div>

          <p className={styles.Korn}>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur" и занялся его поисками в классической латинской литературе.</p>
          <button className={styles.Progis}>Программа тура</button>
        </div>
      </div>
    </>
  )
}

export default InfoBlock