import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import styles from './HomePage.module.css'
import MainBlocks from './MainBlocks/MainBlocks'

function HomePage() {

  return (
    <>
      <div className={styles.HomePage}>
        <Header />
        <MainBlocks />
        <Footer/>
      </div>

    </>
  )
}

export default HomePage