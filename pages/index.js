import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>BlockTalk</title>
        <meta name="description" content="Mint messages on the Flow Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          BlockTalk
        </h1>

        <p className={styles.description}>
          Mint BlockTalks directly on the Flow Blockchain
        </p>

        <Link href="/mints">
          <Button>Start Minting</Button>
        </Link>

      </main>
    </div>
  )
}
