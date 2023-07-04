import React from "react";
import { Layout } from "../../components/layouts/Layout";
import Image from "next/image";

const EquipoPage = () => {
  return (
    <>
      <Layout title="Filosofía">
        <section className="relative">
          <div className="blob1"></div>
          <div className="blob2"></div>
          <div className="container py-20">

            <div className="flex flex-col items-center z-20 ">
              <div className="text-center md:text-center md:w-1/2 md:pr-10">
                <h1 className="title text-3xl color-gray-light font-bold">
                  Universidad de las Fuerzas Armadas ESPE
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section id="saving-money" className="bg-color-secondary" style={{ backgroundColor: "#E0D9F1" }}>
          <div className="container py-20 relative">
            <h1 className="title mb-4 text-3xl color-gray-light font-bold  text-center ">
              Filosofía Institucional
            </h1>
            <div className="flex flex-col items-center justify-center md:flex-row  md:ml-20 mr-20">
              {/* <div className="mb-1 md:w-2/4 ">
              <Image
                src="/images/menusession2.webp"
                width={500}
                height={500}
                alt="hero"
                className="rounded-lg"
              />
            </div> */}
              <div className="text-center md:text-left md:w-50 md:ml-12">
                <p className=" ">
                  La institución se debe fundamentalmente a la sociedad y Fuerzas Armadas, a ellas orienta su esfuerzo, contribuyendo a la solución de sus necesidades de desarrollo, mediante la formación profesional, técnica y científica, la investigación, planteamiento e implementación de soluciones en el ámbito de sus dominios académicos. Con la búsqueda permanente de la excelencia como institución centenaria y referente en la sociedad, mediante la práctica de los principios: respeto por la dignidad humana, identidad ESPE, excelencia académica; y los valores: disciplina, integridad, liderazgo, creatividad, cohesión y efectividad, en todas sus actividades académicas y administrativas, aplicando métodos y herramientas efectivas para la integración de la docencia, investigación y vinculación con la sociedad.

                </p>
                <br />
                <p className="">
                La formación de profesionales se fundamenta en proyectos multidisciplinarios relacionados al paradigma “Smart University” que incluye el desarrollo de una universidad postmoderna con énfasis en la aplicación del gobierno electrónico (e-gobierno), internacionalización y modelo educativo innovador, tendiente a continuar como institución de educación superior de las Fuerzas Armadas, referente en el ámbito nacional e internacional.

                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EquipoPage;
