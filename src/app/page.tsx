import styles from './page.module.scss'
import Link from 'next/link'
import { PiMountainsDuotone } from 'react-icons/pi'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <PiMountainsDuotone className={styles.icon} />
        </Link>
        <div className={styles.nav_container}>
          <Link
            className={styles.link_text}
            href={'/history'}
            >
              01. History
          </Link>
          <Link
            className={styles.link_text}
            href={'/team'}
            >
              02. Team
          </Link>
        </div>
      </nav>
      <div className={styles.heading_container}>
        <h1 className={styles.prime_heading}>LOSANGELES</h1>
        <h1 className={styles.sec_heading}>MOUNTAINS</h1>
      </div>
    </main>
  )
}
