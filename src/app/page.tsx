import Image from "next/image";
import logo from "../../public/images/logo1.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="w-7/12 flex items-center flex-col">
        <h2 className="text-4xl text-center font-bold">Conoce la primera aplicación de acciones <span className="text-emerald-400">sustentables</span> del mundo</h2>
        <p className=" text-md text-center mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio cumque eius soluta voluptatibus est amet sed, quam illum. Neque inventore beatae temporibus voluptatum rem modi facere laudantium magnam porro. Vitae.</p>
        <div className="flex gap-20 items-center justify-center mt-10">
        <Link href={"/login"} className=" bg-emerald-500 border-2 border-emerald-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-emerald-400">Unete a la Comunidad</Link>
        <Link href={"/nosotros"} className=" bg-emerald-500 border-2 border-emerald-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-emerald-400">Más información</Link>
        </div>
        {/* <Image
          src={logo}
          alt="GreenRewards logo"
          className="mt-20"
        /> */}
      </section>
    </main>
  );
}
