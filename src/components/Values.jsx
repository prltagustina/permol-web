import React from "react";

function Values() {
  return (
    <section id="values" className="py-8 md:py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Conocé nuestros valores y principios
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gestión de los recursos humanos para el desarrollo organizacional.
          </p>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="value bg-white p-6 shadow-md rounded">
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p>
              Acompañamiento profesional logrando optimizar el desempeño
              organizacional, mediante un vínculo laboral personalizado.
            </p>
          </div>
          <div className="value bg-white p-6 shadow-md rounded">
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p>
              Brindar soluciones eficientes de la gestión de RRHH acorde a las
              necesidades de cada cliente.
            </p>
          </div>
          <div className="value bg-white p-6 shadow-md rounded">
            <h3 className="text-2xl font-bold mb-4">Valores y principios</h3>
            <p>
              Profesionalismo, calidez humana, compromiso, respeto mutuo y ética
              de trabajo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
