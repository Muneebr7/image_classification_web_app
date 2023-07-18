import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

function Header() {
  return (
    <div>
       <header className="container h-24 flex items-center flex-row justify-between">
        
        <Link href="/" className="flex gap-2 items-center">
        <FontAwesomeIcon 
        icon={faCamera} 
        className="h-16"
        />
        <h1> Smart <br></br>Vision </h1>
        </Link>
        <div className=" transition-all px-6 py-2 bg-white rounded-md text-black font-bold cursor-pointer 
        hover:bg-yellow-300 hover:text-white">
          <Link href="/about">  About Me </Link>
        </div>

      </header>
    </div>
  )
}

export default Header
