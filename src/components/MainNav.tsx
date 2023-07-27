import styles from './mainNav.module.scss'
import Link from 'next/link'
import IconLink from './IconLink'

interface MainNavProps {
  primetext: string
  sectext: string
}

export default function MainNav({ primetext, sectext }: MainNavProps) {
  return (
    <nav className={styles.nav}>
      <IconLink
        textprime={primetext}
        textsec={sectext}
      />
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