import Image from 'next/image'

import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'

const getMemesData = async () => {
  const res = await fetch(`https://api.imgflip.com/get_memes`)
  return res.json().then((memeObj) => memeObj.data.memes)
}

export default async function MemesData() {
  const memeData = await getMemesData()

  return (
    <div>
      <h1>This is Memes Page/ Route</h1>
      <ImageCarousel memeData={memeData} />
    </div>
  )
}
