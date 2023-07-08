import styles from './page.module.css'
import HomeContainer from '@/components/HomeContainer/HomeContainer'

const getMemesData = async () => {
  const res = await fetch('https://api.imgflip.com/get_memes')
  return res.json().then((memeObj) => memeObj.data.memes)
}

export default async function Home() {
  const memeData = await getMemesData()

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <HomeContainer memeData={memeData} />
    </main>
  )
}
