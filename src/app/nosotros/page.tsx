export default function Nosotros() {
  return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
          <section className="w-7/12 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl text-center font-bold mb-4 text-emerald-400">Sobre Nosotros</h2>
              <p className="text-md text-center mt-5 text-gray-700">
                  Bienvenido a nuestro blog. Somos un equipo de estudiantes desarrolladores
                  que buscan mejorar la calidad de vida de las personas a través de la tecnología.
              </p>
              <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-center text-emerald-400">Nuestro Equipo</h3>
                  <p className="text-md text-center text-gray-700">
                      Nuestro equipo está compuesto por estudiantes en la ingenieria de software
                      con muchas ganas de desarrollar aplicaciones que ayuden a nuestra comunidad.
                      Creemos en la importancia de la formación continua y en la adaptación
                      a las nuevas tecnologías para ofrecer lo mejor a nuestros usuarios.
                  </p>
                  <div className="mt-8 flex flex-col items-center">
                      <div className="text-center mb-10">
                          <img src="../../assets/img/sam.png" className="w-32 h-32 rounded-full mx-auto mb-4" />
                          <p className="text-lg font-medium text-gray-800">Samuel Serrato</p>
                          <p className="text-md text-gray-600">CEO & Fundador</p>
                      </div>
                      <div className="text-center mb-10">
                          <img src="../../assets/img/sam.png" className="w-32 h-32 rounded-full mx-auto mb-4" />
                          <p className="text-lg font-medium text-gray-800">Ludwicka Aguirre</p>
                          <p className="text-md text-gray-600">Desarrolladora Principal</p>
                      </div>
                      <div className="text-center mb-10">
                          <img src="../../assets/img/sam.png" className="w-32 h-32 rounded-full mx-auto mb-4" />
                          <p className="text-lg font-medium text-gray-800">Diego Luna</p>
                          <p className="text-md text-gray-600">Desarrollador backend</p>
                      </div>
                      <div className="text-center mb-10">
                          <img src="../../assets/img/sam.png" className="w-32 h-32 rounded-full mx-auto mb-4" />
                          <p className="text-lg font-medium text-gray-800">Einar Valle</p>
                          <p className="text-md text-gray-600">Desarrollador frontend</p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  );
}
