import React from "react";

function Values() {
  return (
    <section id="values" className="py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-left">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            Guiando el Desarrollo Organizacional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="value bg-white p-6 shadow-md rounded">
              <h3 className="text-xl font-semibold mb-4">Misión</h3>
              <p className="text-gray-700">
                Nuestra misión es brindar soluciones eficientes en la gestión de
                recursos humanos que se adapten a las necesidades específicas de
                cada cliente, promoviendo el desarrollo y el éxito mutuo.
              </p>
            </div>
            <div className="value bg-white p-6 shadow-md rounded">
              <h3 className="text-xl font-semibold mb-4">Visión</h3>
              <p className="text-gray-700">
                Nuestra visión es acompañar profesionalmente a nuestros clientes
                para optimizar su desempeño organizacional, estableciendo
                vínculos laborales personalizados y duraderos.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              Nuestros Valores y Principios
            </h2>
            <div className="value bg-white p-6 shadow-md rounded">
              <ul className="text-gray-700">
                <li>
                  <strong>Profesionalismo:</strong> Actuamos con integridad,
                  excelencia y dedicación en todo lo que hacemos.
                </li>
                <li>
                  <strong>Calidez humana:</strong> Valoramos y respetamos a cada
                  persona, mostrando empatía y consideración en nuestras
                  interacciones.
                </li>
                <li>
                  <strong>Compromiso:</strong> Nos comprometemos a cumplir con
                  nuestras responsabilidades y a superar las expectativas de
                  nuestros clientes y colaboradores.
                </li>
                <li>
                  <strong>Respeto mutuo:</strong> Fomentamos un ambiente de
                  trabajo inclusivo y respetuoso, donde todas las opiniones y
                  perspectivas son valoradas.
                </li>
                <li>
                  <strong>Ética de trabajo:</strong> Nos regimos por los más
                  altos estándares éticos en todas nuestras actividades y
                  relaciones comerciales.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
