import Link from "next/link"

type Props = {}

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-gray-100 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <section className="w-3/5 p-5">
                    <div className="text-left font-bold"><span className="text-emerald-400">Green</span>Rewards</div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-emerald-500 mb-2">Inicia sesión en tu cuenta.</h2>
                        <div className="border-2 w-10 border-emerald-400 inline-block mb-2"></div>
                            <div className="flex flex-col items-center mt-5">
                                <div className=" flex flex-col items-center w-64 p-3 bg-gray-200">
                                    <input type="email" placeholder="Email" className="bg-gray-200 outline-none text-sm" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                                <div className=" flex flex-col items-center w-64 p-3 bg-gray-200">
                                    <input type="password" placeholder="Password" className="bg-gray-200 outline-none text-sm" />
                                </div>
                            </div>
                            <Link href={"/"} className="border-2 border-emerald-500 text-emerald-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-emerald-500 hover:text-white mt-5">Log In</Link>
                    </div>
                </section>
                <section className="w-2/5 bg-emerald-500 text-white py-36 px-12 rounded-tr-2xl rounded-br-2xl">
                    <h2 className="text-3xl font-bold mb-2">Hola, Amigo</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-10">Registrate si aún no formas parte de esta comunidad.</p>
                    <Link href={"/signup"} className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-emerald-400">Sign Up</Link>
                </section>
            </div>
            
        </main>
    </div>
  )
}