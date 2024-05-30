import Image from "next/image"
import logo from "../../public/images/logo.png"
import Link from "next/link"
import type { User } from "@/data/users"
export function Header(){
    return(
        <div className="flex justify-around bg-emerald-500 p-3 shadow-xl fixed top-0 w-full">
            <header className="flex items-center gap-2">
                <Image
                    src={logo}
                    alt="GreenRewards logo"
                    className=" h-8 w-5"
                />
                
            
                <a href="/"><h1 className="text-2xl font-bold p-1">GreenRewards</h1></a>
            </header>
            <nav className="flex gap-14 items-center">
                <Link href="/nosotros" className="font-bold link-hover">Nosotros</Link>
                <Link href="/blog" className="font-bold link-hover">Blog</Link>
                <Link href="/contacto" className="font-bold link-hover">Contacto</Link>
                
            </nav>
            <div className="flex gap-14 items-center">
                <Link href="/login" className="font-bold link-hover">Login</Link>
                <div className=" bg-emerald-200 p-2 rounded hover:bg-emerald-300">
                    <a href="" className="font-bold">Descarga</a>
                </div>
            </div>
        </div>
    )
}