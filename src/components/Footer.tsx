import IconLink from './IconLink'
import styles from './footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      <IconLink textprime={''} textsec={''} />
      <p>Copyright &copy; { currentYear }. All Rights Reserved.</p>
    </div>
  )
}