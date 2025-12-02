import styles from './Nav.module.css'

function Nav() {

  return (
    <>
      <nav className={styles.Nav}>
        <ul>
            <li>Главная</li>
            <li>Про гида</li>
            <li>Программа тура</li>
            <li>Стоимость</li>
            <li>Блог</li>
            <li>Контакты</li>
        </ul>
      </nav>
    </>
  )
}

export default Nav