import styles from './schedule.module.scss'
import { ScheduleProps } from '../types/scheduleProps'

export default function Schedule({ data }: ScheduleProps) {
  return (
    <div className={styles.schedule}>
      <h1>SCHEDULE</h1>
      <ul>
        {data.map((item, index) => (
          <li>
            <div key={index}>
              <p>{ item.date }</p>
              <p>{ item.text }</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}