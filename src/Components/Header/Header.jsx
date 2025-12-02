import styles from './Header.module.css'
import Nav from './Nav/Nav'

function Header() {

  return (
    <>
      <header className={styles.Header}>
        <img src="/image/logo_header.svg" alt="Логотип Тур Тибет" loading='lazy'/>
        <Nav/>
        <button className={styles.Konsul}>Консультация</button>
      </header>
    </>
  )
}

export default Header
