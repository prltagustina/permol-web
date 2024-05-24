import React from "react";
import Icono1 from "../assets/icons/icono1.png";
import Icono2 from "../assets/icons/icono2.png";
import Icono3 from "../assets/icons/icono3.png";
import Icono4 from "../assets/icons/icono4.png";
import Icono5 from "../assets/icons/icono5.png";
import Icono6 from "../assets/icons/icono6.png";
import Icono7 from "../assets/icons/icono7.png";
import Icono8 from "../assets/icons/icono8.png";
import Icono9 from "../assets/icons/icono9.png";

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-100 px-4">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">
          Gestión integral de Recursos Humanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono9} className="h-16 w-16" alt="Icono 1" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Construcción de legajo</h3>
            <p>
              Asesoramiento y control de información para la generación de
              legajo personal y liquidación de haberes.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono4} className="h-16 w-16" alt="Icono 2" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Creación de perfiles</h3>
            <p>
              Armado de perfiles de puestos de cada colaborador, para evaluar la
              idoneidad y detectar futuras necesidades de capacitación.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono5} className="h-16 w-16" alt="Icono 1" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Control de ausentismo</h3>
            <p>
              Si la organización cuenta con ausentismo diario por parte de los
              colaboradores, brindamos control y seguimiento para generar una
              eficiencia óptima en un tema delicado.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono6} className="h-16 w-16" alt="Icono 2" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Reclutamiento</h3>
            <p>
              Reclutamos y seleccionamos personal para puestos vacantes dentro
              de la organización. Encontramos a los mejores candidatos para tus
              necesidades.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono2} className="h-16 w-16" alt="Icono 1" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Confección de manual interno
            </h3>
            <p>
              Elaboración de manual disciplinario para el personal interno de la
              organización.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono3} className="h-16 w-16" alt="Icono 2" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Gestión integral de relaciones laborales
            </h3>
            <p>
              Presentación de documentación en entidades oficiales. AFIP -
              Ministerio de Trabajo - Obras Sociales y Sindicatos.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono7} className="h-16 w-16" alt="Icono 1" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Desvinculación laboral</h3>
            <p>
              Programa integral para comunicar de manera oportuna una
              desvinculación laboral.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono1} className="h-16 w-16" alt="Icono 2" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Evaluación de desempeño</h3>
            <p>
              Ejecución de evaluación de desempeño basado en la gestión por
              competencias, vinculada a la misión, visión y valores de la
              institución.
            </p>
          </div>
          <div className="service bg-white p-6 shadow-md rounded flex flex-col items-center">
            <div className="icono mb-4">
              <img src={Icono8} className="h-16 w-16" alt="Icono 1" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Políticas de recursos humanos
            </h3>
            <p>
              Creación de políticas que hacen al área de RRHH, con el fin de
              realizar una gestión de manera interna, y transmitir la filosofía
              de la organización a todos los niveles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
