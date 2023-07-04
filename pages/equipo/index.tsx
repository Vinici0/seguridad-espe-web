import React from "react";
import { Layout } from "../../components/layouts/Layout";
import Image from "next/image";

const EquipoPage = () => {
  return (
    <>
      <Layout title="Nuestro Equipo">
        
        <section className="relative">
          <div className="container py-20 bg-slate-400 ">
            <div className="flex flex-row items-center justify-center bg-slate-300 w-2/4 max-sm:w-full max-sm:flex-col max-sm:items-start">
              <div className="flex flex-row items-center justify-center space-x-4  w-2/4 px-5 mx-7 ">
                <Image
                  src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                  width={300}
                  height={300}
                  alt="ad"
                  className="max-sm:rounded-full w-20 h-20 rounded-none max-sm:w-10 max-sm:h-10"
                />
                <p>Vincio Borja</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-4 m-10"> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid a voluptate repellat? Sed repudiandae voluptatum, impedit quae sint facilis unde cupiditate similique? Sequi porro debitis impedit nam odit dolorum.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="saving-money" className="bg-color-secondary">
        <div className="container py-8 relative">
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="leading-relaxed text-xl font-bold text-center text-color-primary">
              INFORME DE INCIDENTES DE LA PARROQUIA LUZ DE AMÉRICA
            </p>
            <div className="flex mt-4">
              <button className="bg-red-500 text-white px-4 py-2 mr-4">
                Descargar PDF
              </button>
              <button className="bg-green-500 text-white px-4 py-2">
                Descargar CSV
              </button>
            </div>
          </div>
        </div>
        </section>
      </Layout>
    </>
  );
};

export default EquipoPage;
