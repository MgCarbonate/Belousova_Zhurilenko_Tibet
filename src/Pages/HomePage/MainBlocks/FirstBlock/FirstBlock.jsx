import styles from './FirstBlock.module.css'
import SearchGroup from './SearchGroup/SearchGroup'

function FirstBlock() {

    return (
        <>
            <div className={styles.FirstBlock}>
                <div className={styles.Fever}>
                    <h1 className={styles.Naslad}>Насладись прогулкой в горах <br />
                        с командой единомышленников</h1>
                    <SearchGroup />
                </div>

            </div>
        </>
    )
}

export default FirstBlock