import styles from './subNav.module.scss'

interface SubNavProps {
  isMountain1Selected: any
  onMountain1Select: any
  onMountain2Select: any
}

export default function SubNav({ isMountain1Selected, onMountain1Select, onMountain2Select}: SubNavProps) {
  return (
    <nav className={styles.sub_nav_container}>
      <button
        onClick={onMountain1Select}
        className={isMountain1Selected ? styles.selected : styles.sub_nav__text}
        >
          MOUNTAIN 1
      </button>

      <button
        onClick={onMountain2Select}
        className={!isMountain1Selected ? styles.selected : styles.sub_nav__text}
        >
          MOUNTAIN 2
      </button>
    </nav>
  )
}