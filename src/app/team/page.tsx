import styles from './page.module.scss'
import MainNav from '@/components/MainNav'

export default function Page() {
  return (
    <main className={styles.main}>
      <MainNav />

      <div className={styles.heading_container}>
        <h1 className={styles.prime_heading}>TEAM</h1>
        <h1 className={styles.sec_heading}>PAGE</h1>
      </div>
    </main>
  )
}
