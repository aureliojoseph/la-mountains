import styles from './mainNav.module.scss'
import Link from 'next/link'
import { PiMountainsDuotone } from 'react-icons/pi'

interface MainNavProps {
  prime: string
  sec: string
}

export default function MainNav({ prime, sec }: MainNavProps) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.icon_link} href={'/'}>
        <PiMountainsDuotone className={styles.icon} />
        <div className={styles.icon_text}>
          <p className={styles.prime}>{prime}</p>
          <p className={styles.sec}>{sec}</p>
        </div>
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
          href={'/climb'}
          >
            02. Climb
        </Link>
      </div>
    </nav>
  )
}
