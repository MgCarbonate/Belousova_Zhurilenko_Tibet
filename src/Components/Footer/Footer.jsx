import styles from './Footer.module.css'
import Uslug from './Uslug/Uslug'
import Vajno from './Vajno/Vajno'

function Footer() {

    return (
        <>
            <footer className={styles.Footer}>
                <div className={styles.Fot_Info}>
                    <h1 className={styles.Company}>Компания «РумТибет»</h1>
                    <p className={styles.Frag}>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.</p>
                    <div className={styles.Cont}>
                        <p className={styles.Mail}>info@domain.com</p>
                        <p className={styles.Phone}>+7 (123) 456-78-90</p>
                    </div>
                    <div className={styles.Soc}>
                        <img src="/image/Telegram.svg" alt="Иконка телеграма" />
                        <img src="/image/Wk.svg" alt="иконка вконтакте" />
                        <img src="/image/Pin.svg" alt="Иконка пинтереста" />
                        <img src="/image/Skype.svg" alt="Иконка скайпа" />
                    </div>
                </div>
                <Uslug/>
                <Vajno/>
            </footer>
        </>
    )
}

export default Footer