import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nextjs Image Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <div className={`${styles.img} ${styles.w2} ${styles.h12}`}>
         <Image src="/images/white.jpg" alt="white" layout="fill" objectFit="cover" />
       </div>
       <div className={`${styles.img} ${styles.w6} ${styles.h4}`}>
         <Image src="/images/sky.jpg" alt="sky" layout="fill" objectFit="cover" />
       </div>
       <div className={`${styles.img} ${styles.w4} ${styles.h4}`}>
         <Image src="/images/sunflower.jpg" alt="sunflower" layout="fill" objectFit="cover" />
       </div>
       <div className={`${styles.img} ${styles.w4} ${styles.h8}`}>
         <Image src="/images/green.jpg" alt="leaf" layout="fill" objectFit="cover" />
       </div>
       <div className={`${styles.img} ${styles.w6} ${styles.h12}`}>
         <Image src="/images/mount.jpg" alt="mountain" layout="fill" objectFit="cover" />
       </div>
       <div className={`${styles.img} ${styles.w6} ${styles.h12}`}>
         <Image src="/images/mount2.jpg" alt="trees and mountain" layout="fill" objectFit="cover" />
       </div>
      </main>
    </div>
  )
}
