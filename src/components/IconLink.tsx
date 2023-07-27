import styles from './iconLink.module.scss'
import Link from 'next/link'
import { PiMountainsDuotone } from 'react-icons/pi'

interface IconLinkProps {
  textprime: string
  textsec: string
}

export default function IconLink({ textprime, textsec }: IconLinkProps) {
  return (
    <Link className={styles.icon_link} href={'/'}>
      <PiMountainsDuotone className={styles.icon} />
      <div className={styles.icon_text}>
        <p className={styles.prime}>{textprime}</p>
        <p className={styles.sec}>{textsec}</p>
      </div>
    </Link>
  )
}