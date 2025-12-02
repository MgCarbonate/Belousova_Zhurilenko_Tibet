import styles from './Blog.module.css'
import Doloy from './Doloy/Doloy'
import India from './India/India'
import Italy from './Italy/Italy'
import Odino from './Odino/Odino'

function Blog() {

    return (
        <>
            <div className={styles.Blog}>
                <p className={styles.Delim}>делимся впечатлениями</p>
                <h1 className={styles.O_Put}>Блог о путешествиях</h1>
                <div className={styles.Blogery}>
                    <Italy />
                    <Odino />
                    <Doloy />
                    <India />
                </div>
                <button className={styles.Mat}>Другие материалы</button>
            </div>
        </>
    )
}

export default Blog