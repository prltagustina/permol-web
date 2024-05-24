import React from "react";

function Values() {
  return (
    <section id="values" className="py-8 md:py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Valores y Principios</h2>
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
