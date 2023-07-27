'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import MainNav from '@/components/MainNav'
import SubNav from '@/components/SubNav'
import Schedule from '@/components/Schedule'
import DateTextItem from '../../types/scheduleProps'

export default function Page() {
  const [isMountain1Selected, setIsMountain1Selected] = useState(true)

  const handleMountain1Select = () => {
    setIsMountain1Selected(true)
  }

  const handleMountain2Select = () => {
    setIsMountain1Selected(false)
  }

  const mountain1Data: DateTextItem[] = [
    { date: '29 Nov 2023', text: 'Ducimus reiciendis' },
    { date: '01 Dec 2023', text: 'Voluptates sint voluptates' },
    { date: '06 Nov 2023', text: 'Ducimus reiciendis' },
    { date: '13 Dec 2023', text: 'Voluptates sint voluptates' }
  ]

  const mountain2Data: DateTextItem[] = [
    { date: '18 Dec 2023', text: 'Consequuntur velit' },
    { date: '20 Dec 2023', text: 'Autem molestiae quibusdam' },
    { date: '07 Jan 2024', text: 'Consequuntur velit' },
    { date: '16 Jan 2024', text: 'Autem molestiae quibusdam' }
  ]

  return (
    <main className={styles.main}>
      <MainNav prime={'LOSANGELES'} sec={'MOUNTAINS'} />

      <div className={styles.climb_container}>
        <h1 className={styles.title}>
          02.
          <span className={styles.title_name}>CLIMB</span>
        </h1>
        <p className={styles.text}>Ducimus reiciendis totam itaque, reprehenderit autem molestiae quibusdam ipsum sed eligendi veniam molestias eaque nemo minus et consequuntur velit sint voluptates. Sequi!</p>
      </div>

      <SubNav
        isMountain1Selected={isMountain1Selected}
        onMountain1Select={handleMountain1Select}
        onMountain2Select={handleMountain2Select}

      />

      { isMountain1Selected && <Schedule data={mountain1Data} />}

      { !isMountain1Selected && <Schedule data={mountain2Data} />}
    </main>
  )
}
