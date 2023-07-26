import Image from 'next/image'
import styles from './page.module.scss'
import { PiMountains } from "react-icons/pi";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          LA Mountains&nbsp;
          <code className={styles.code}>Landing Page</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <PiMountains />
          </a>
        </div>
      </div>
    </main>
  )
}
