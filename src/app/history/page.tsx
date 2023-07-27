'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import MainNav from '@/components/MainNav'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const photoGallery = [
  {
    alt: 'Photo of three people skiing on a frozen plain',
    src: '/assets/anna-schroeder-INLHLgbCrTw-unsplash.jpeg',
    style: {
      width: '23%',
      height: '23%'
    }
  },
  {
    alt: 'Photo of a couple holding hands admiring the view from a lookout point on top of a snowy mountain',
    src: '/assets/daniel-frank-R5CpX0Ktrzs-unsplash.jpeg',
    style: {
      width: '23%',
      height: '23%'
    }
  },
  {
    alt: 'Photo of a man doing ski tricks on top of a snowy mountain',
    src: '/assets/jorg-angeli-NoXi8qxAHOU-unsplash.jpeg',
    style: {
      width: '23%',
      height: '23%'
    }
  },
  {
    alt: 'Photo of a man on a ski slope',
    src: '/assets/kasya-shahovskaya-hTd7AEBfn_U-unsplash.jpeg',
    style: {
      width: '23%',
      height: '23%'
    }
  },
  {
    alt: 'Photo of a man admiring the view from the top of a snowy mountain',
    src: '/assets/lucas-favre-BRTV55ErUZg-unsplash.jpeg',
    style: {
      width: '23%',
      height: '23%'
    }
  },
  {
    alt: 'Photo of a woman admiring the view from the top of a snowy mountain',
    src: '/assets/nicole-geri-hf5lj-6CMx0-unsplash.jpeg',
    style: {
      width: '23%',
      height: '23%'
    }
  }
]

const renderPhotos = photoGallery.map((photo) => (
  <div>
    <img
      src={photo.src}
      alt={photo.alt}
      style={photo.style}
    />
  </div>
))

export default function Page() {
  const [currentPhoto, setCurrentPhoto] = useState()

  const handlePhotoChange = () => {
    setCurrentPhoto(currentPhoto)
  }

  return (
    <main className={styles.main}>
      <MainNav prime={'LOSANGELES'} sec={'MOUNTAINS'} />

      <div className={styles.history_container}>
        <h1 className={styles.title}>
          01.
          <span className={styles.title_name}>HISTORY</span>
        </h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt molestiae odio ex vero. Nam blanditiis quis quae et fugit, deserunt hic vero asperiores, delectus cupiditate facilis reiciendis perferendis eum.</p>
      </div>

      <div className={styles.carousel_container}>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          onChange={handlePhotoChange}
          className={styles.photo}
          >
            {renderPhotos}
        </Carousel>
      </div>
    </main>
  )
}
