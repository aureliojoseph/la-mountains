import styles from './page.module.scss'
import MainNav from '@/components/MainNav'

export default function Page() {
  return (
    <main className={styles.main}>
      <MainNav prime={'LOSANGELES'} sec={'MOUNTAINS'} />

      <div className={styles.history_container}>
        <h1 className={styles.title}>
          01.
          <span className={styles.title_name}>HISTORY</span>
        </h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt molestiae odio ex vero. Nam blanditiis quis quae et fugit, deserunt hic vero asperiores, delectus cupiditate facilis reiciendis perferendis eum.</p>
      </div>
    </main>
  )
}
