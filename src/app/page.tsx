import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="w-7/12">
        <h2 className="text-4xl text-center font-bold">Conoce la primera aplicación de acciones <span className="text-emerald-400">sustentables</span> del mundo</h2>
        <p className=" text-md text-center mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio cumque eius soluta voluptatibus est amet sed, quam illum. Neque inventore beatae temporibus voluptatum rem modi facere laudantium magnam porro. Vitae.</p>
        <div className="flex gap-20 items-center justify-center mt-10">
          <button className=" bg-emerald-500 p-2 w-32 rounded-xl font-bold">Únete a la comunidad</button>
          <button className=" bg-emerald-300 p-2 w-32 rounded-xl">Más información</button>
        </div>
      </section>
    </main>
  );
}
