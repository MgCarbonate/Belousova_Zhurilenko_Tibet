import Blog from './Blog/Blog'
import FirstBlock from './FirstBlock/FirstBlock'
import InfoBlock from './InfoBlock/InfoBlock'
import styles from './MainBlocks.module.css'
import PopNaprav from './PopNaprav/PopNaprav'
import Reki from './Reki/Reki'

function MainBlocks() {

  return (
    <>
      <main className={styles.MainBlocks}>
        <FirstBlock />
        <InfoBlock />
        <Reki/>
        <PopNaprav/>
        <Blog/>
      </main>
    </>
  )
}

export default MainBlocks