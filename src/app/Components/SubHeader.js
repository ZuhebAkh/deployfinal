import React from 'react'
import styles from '@/app/styles/subheader.module.css'
import comStyle from '@/app/styles/common.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})
const SubHeader = ({title,imageUrl}) => {
  return (
    <main className={styles.main_section}>
        <div className={comStyle.container}>
            <div className={comStyle.grid_two_section}>
                 <div className={styles.hero_content}>
                 <h1>{title}</h1>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className} >
                                Explore Movies
                            </button>
                        </Link>
                 </div>
                 <div className={styles.hero_image}>
                      <Image  src={imageUrl} alt='loading' height={500} width={500}></Image>
                 </div>
            </div>

        </div>
        <div className={styles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={styles["shape-fill"]}></path>
                </svg>
            </div>

    </main>
  )
}

export default SubHeader