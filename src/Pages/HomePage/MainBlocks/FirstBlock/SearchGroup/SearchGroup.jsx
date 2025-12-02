import styles from './SearchGroup.module.css'

function SearchGroup() {

  return (
    <>
    <div className={styles.SearchGroup}>
        <div className={styles.NoOpasity}>
          <div className={styles.MiniP}>
            <select className={styles.SelectOp} >
              <option >Локация для тура</option>
              <option >Кувандык</option>
            </select>
            <p className={styles.Vibori}>выберите из списка</p>
          </div>
          <div className={styles.MiniP}>
            <input type="date" className={styles.DateCall} />
            <p className={styles.Vibori}>укажите диапазон</p>
          </div>
          <div className={styles.MiniP}>
            <select className={styles.SelectOp} >
              <option>Участники</option>
              <option>Лена</option>
              <option>Катя</option>
              <option>Кирилл</option>
              <option>Егор Константинович</option>
            </select>
            <p className={styles.Vibori}>минимум 4 человека</p>
          </div>
          <button className={styles.SearchProg}>Найти программу</button>
        </div>
    </div>
    </>
  )
}

export default SearchGroup