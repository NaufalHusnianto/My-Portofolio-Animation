import Image from 'next/image'
import bg from '/public/img/bg-home.jpeg'
 
export default function Background({children} : any) {
  return (
    <div>
        <Image
          alt="Mountains"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className='opacity-35'
          style={{
            objectFit: 'cover',
          }}
          />
          {children}
    </div>
  )
}