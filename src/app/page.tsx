import styles from './page.module.scss'
import MainNav from '@/components/MainNav'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainNav primetext={''} sectext={''} />

      <h1>TESTE</h1>

      <div className={styles.heading_container}>
        <h1 className={styles.prime_heading}>LOSANGELES</h1>
        <h1 className={styles.sec_heading}>MOUNTAINS</h1>
      </div>
    </main>
  )
}
