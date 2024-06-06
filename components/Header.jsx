import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MovileNav from "./MovileNav";


const Header = () => {
  return (
    <header className='py-8 xl:py12 text-white' >
        <div className="containeer mx auto flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              JB <span className="text-accent">.</span>
            </h1>
          </Link>
          {/* desktop nav & hier me button*/}
          <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
          </div>


          {/* mobile nav */}
          <div className="xl:hidden">
            <MovileNav/>
          </div>
          
        </div>
    </header>
  )
}

export default Header
