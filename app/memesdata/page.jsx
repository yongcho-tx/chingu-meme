import Image from 'next/image'

const getMemesData = async () => {
  const res = await fetch(`https://api.imgflip.com/get_memes`)
  return res.json().then((memeObj) => memeObj.data.memes)
}

export default async function MemesData() {
  const memeData = await getMemesData()

  return (
    <div>
      <h1>This is Memes Page/ Route</h1>
      {/* {memeData.map((meme) => {
        return (
          <div>
            <Image
              src={meme.url}
              alt={meme.name}
              width={300}
              height={300}
              style={{ marginBottom: '2em' }}
            />
          </div>
        )
      })} */}
    </div>
  )
}