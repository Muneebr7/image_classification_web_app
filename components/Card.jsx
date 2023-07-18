import Link from "next/link"
import Image from "next/image"

function Card({image , title , description , linkto}) {
  return (
    <>
      
      <div className=" w-[400px] boxShaddow" > 
          <Image 
          src={image}
          width={400}
          height={300}
          style={{objectFit: "cover" }}
          className=" rounded-t-md h-[300px] w-[100%]"
          />

          <div className=" border-[1px] border-gray-400 py-8 px-5 rounded-b-md flex flex-col gap-3">
            <h2 className="text-xl text-yellow-400 font-bold uppercase">{title}</h2>
            <span className="text-sm">{description}</span>
            <Link href={linkto} class="group relative inline-flex w-[150px] items-center justify-center overflow-hidden rounded-full bg-[#FFF337] px-8 py-3 font-medium text-white transition duration-300 ease-out md:w-auto">
      <span class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#FFF337] text-black duration-300 group-hover:translate-x-0">
        <svg class="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span  class="ease absolute flex h-full w-full transform items-center justify-center text-black transition-all duration-300 group-hover:translate-x-full">Let's Predict</span>
      <span  span class="invisible relative">Let's get started</span>
    </Link>

          </div>
          
         </div>


    </>
  )
}

export default Card
