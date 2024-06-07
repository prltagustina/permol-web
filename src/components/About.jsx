import React from "react";
import imagenPerfil from "../assets/imagen-perfil.jpg";

function About() {
  return (
    <section id="about" className="py-16 bg-gray-100 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <img
          src={imagenPerfil}
          alt="Imagen de perfil"
          className="h-48 lg:h-64 w-48 lg:w-64 rounded-full mb-8 lg:mb-0 lg:mr-12"
        />
        <div className="text-left max-w-prose lg:pl-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg leading-relaxed mb-4">
            Soy Santiago Peralta, especializado en Consultoría Empresarial
            enfocada en el desarrollo del talento humano.
          </p>
          <p className="text-base lg:text-lg leading-relaxed mb-4">
            Con títulos de Técnico Superior en Gestión Empresarial y Técnico
            Superior en Administración de Personal, estoy próximo a finalizar la
            Licenciatura en Gestión de Recursos Humanos.
          </p>
          <p className="text-base lg:text-lg leading-relaxed mb-4">
            Tengo experiencia en diversas áreas clave, como la administración de
            personal, evaluaciones de rendimiento, elaboración de manuales
            internos y selección de talento.
          </p>
          <p className="text-base lg:text-lg leading-relaxed">
            Mi objetivo es ofrecer soluciones personalizadas para fortalecer las
            relaciones laborales y garantizar una administración eficiente,
            impulsando el crecimiento y éxito continuo de tu empresa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
