import Image from "next/image";
import React from "react";
import mypic from "../../public/images/hero.png";

const HomePage = () => {
  return (
    <>
      <section className="relative">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="container py-20">
          <div className="flex flex-col items-center z-20 md:flex-row">
            <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
              <h1 className="title mb-4 text-3xl color-gray-light font-bold">
                Donde las personas se protegen entre sí.
              </h1>
              <p className="leading-relaxed mb-10">
                Por una comunidad segura, por una comunidad unida, por una
                comunidad que se preocupa por el bienestar de todos.
              </p>
              <p className="leading-relaxed mb-10">
                Descarga la aplicación y forma parte de la comunidad de
                Seguridad
              </p>
              <div className="flex flex-row justify-center items-center space-x-4 mt-4">
                {/* agregar bordes al rededor */}
                <a
                  href="#"
                  className="flex flex-row justify-center items-center space-x-2   border-2 border-solid border-color-gray rounded-lg p-2 w-44   hover:bg-slate-100  duration-200 ease-in"
                >
                  <div>
                    <Image
                      src="/images/google-play-logo.svg"
                      width={27}
                      height={27}
                      alt="hero"
                    />
                  </div>
                  <p className="text-sm font-bold">GOOGLE PLAY</p>
                </a>
                <a
                  href="#"
                  className="flex flex-row justify-center items-center space-x-2  border-2 border-solid border-color-gray rounded-lg p-2 w-44   hover:bg-slate-100  duration-200 ease-in"
                >
                  <div>
                    <Image
                      src="/images/icons8-apple-logo.svg"
                      width={30}
                      height={30}
                      alt="hero"
                    />
                  </div>

                  <p className="text-sm font-bold">APP STORE</p>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">

            </div>
          </div>
        </div>
      </section>

      <section id="saving-money" className="bg-color-secondary">
        <div className="container py-20 relative">
          <h1 className="title mb-4 text-3xl color-gray-light font-bold  text-center text-color-primary">
            Seguridad ESPE
          </h1>
          <p className="leading-relaxed mb-4 text-3xl  text-center font-bold  text-color-primary">
            Por una comunidad segura
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row text-color-primary md:ml-20 mr-20">
            {/* <div className="mb-1 md:w-2/4 ">
              <Image
                src="/images/menusession2.webp"
                width={500}
                height={500}
                alt="hero"
                className="rounded-lg"
              />
            </div> */}
            <div className="mb-6 md:w-100 md:mr-10">
              <Image src="/images/menusession2.webp" width={2000} height={2000} alt="hero"/>
            </div>
            <div className="text-center md:text-left md:w-50 md:ml-12">
              <p className=" ">
                Seguridad ESPE nace a partir del proyecto de vinculación con la
                sociedad {`"`}Implementación de aplicaciones web y móvil para
                gestionar emergencias comunitarias en la provincia de Santo
                Domingo de los Tsáchilas{`"`}, con el objetivo de aportar a la
                seguridad de la comunidad, con la comunicación, coordinación y
                respuesta ante situaciones de emergencia. La aplicación
                aprovecha la alta inclusión de dispositivos móviles e Internet
                para abordar los desafíos relacionados con la seguridad,
                brindando una solución innovadora en el campo de la protección
                ciudadana.
              </p>
              <br />
              <p className="">
                Utilizando como caso de estudio la parroquia Luz de América, se
                realizaron encuestas exhaustivas para determinar los tipos de
                incidentes más comunes en la parroquia. Estas encuestas
                identificaron diversas problemáticas de seguridad, tales como
                robos, vandalismo, altercados callejeros y emergencias médicas.
                La información recopilada se utilizó para desarrollar
                funcionalidades y servicios específicos en la aplicación
                Seguridad ESPE, adaptándola a las necesidades de los residentes
                de la parroquia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="bg-color-primary">
        <div className="container py-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
            {/* <!-- card no 1 --> */}
            <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl   ease-in duration-200">
              <h3 className="text-xl font-bold py-4">Caracteristicas</h3>
              <ul className="text-left list-disc list-inside">
                <li className="py-2">
                  Permite hacer reportes en tiempo real adjuntando una
                  descripción, foto y ubicación del suceso.
                </li>
                <li className="py-2">
                  Incluye un botón de SOS en la interfaz principal.
                </li>
                <li className="py-2">
                  Cuenta con una sección de noticias que permiten ver las
                  diferentes emergencias que ocurren a diario.
                </li>
                <li className="py-2">
                  Se pueden crear grupos personalizados para comunicarse solo
                  por mensajes de texto.
                </li>
                <li className="py-2">
                  Se ofrece la opción de añadir contactos de emergencia en caso
                  de alguna situación urgente.
                </li>
              </ul>
            </div>
            <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl   ease-in duration-200">
              <h3 className="text-xl font-bold py-4">Impactos esperadoss</h3>
              <ul className="text-left list-disc list-inside">
                <li className="py-2">
                  Mayor seguridad y reducción de pérdidas por robos o hurtos,
                  gracias a la capacidad de hacer reportes en tiempo real
                  adjuntando descripciones, fotos y ubicaciones. ​
                </li>
                <li className="py-2">
                  Mejoramiento de las condiciones de vida de la comunidad en
                  términos de seguridad, al contar con respuestas rápidas ante
                  emergencias.
                </li>
                <li className="py-2">
                  Promoción de la integración comunitaria a través de un grupo
                  personalizado para comunicarse exclusivamente por mensajes de
                  texto.
                </li>
                <li className="py-2">
                  Obtención de datos estadísticos útiles, como el tipo de
                  emergencia más común, los sectores con mayor incidencia de
                  emergencias y aquellos donde se resuelven más rápidamente,
                  gracias a la sección de noticias que muestra los diferentes
                  incidentes diarios.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="saving-money" className="bg-color-secondary">
        <div className="container py-20 relative">
          <p className="leading-relaxed mb-4 text-xl  text-center  text-color-primary md:mr-20 ml-20">
            Proporciona una solución tecnológica que permite gestionar
            situaciones de emergencia comunitaria y mejorar la seguridad en la
            comunidad.
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl   ease-in duration-200">
              <h3 className="text-xl font-bold py-4">Reportes en tiempo real</h3>
              <p className="text-left">
              <Image src="/images/reportar.jpg" width={500} height={500} alt="hero2"/>
              </p>
            </div>
            <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl   ease-in duration-200">
              <h3 className="text-xl font-bold py-4">Noticias al instante</h3>
              <p className="text-left">
              <Image src="/images/noticias-al-instante.png" width={500} height={500} alt="hero2"/>
              </p>
            </div>
            <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl   ease-in duration-200">
              <h3 className="text-xl font-bold py-4">Chat inmediato</h3>
              <p>
              <Image src="/images/chat-inmediato.jpg" width={500} height={500} alt="hero2"/>
              </p>
            </div>
            <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl   ease-in duration-200">
              <h3 className="text-xl font-bold py-4">Agregar lugares</h3>
              <p className="text-left">
              <Image src="/images/hero.png" width={500} height={500} alt="hero2"/>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="saving-money" className="bg-color-primary">
      <div className="container py-20 relative">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="text-center md:text-left md:flex-1 ml-32 mr-32">
            <p className="leading-relaxed">
              Por medio de la aplicación móvil se reportarán emergencias
              comunitarias proporcionando detalles precisos del incidente y las
              autoridades competentes podrán acudir en su ayuda. Además, cuenta
              con un botón SOS para solicitar ayuda inmediata.
            </p>
            <br />
            <p>
              La aplicación web tiene como objetivo principal brindar reportes
              estadísticos detallados sobre diversos tipos de incidentes en la
              zona Luz de América. Cuenta con la opción de filtrar los incidentes
              según su ubicación, tipo, fecha y hora, permitiéndote acceder a
              datos específicos y relevantes para un determinado análisis.
            </p>
            <br />
            <p>
              La aplicación web complementa la aplicación móvil al proporcionar
              reportes estadísticos detallados sobre los diversos tipos de
              incidentes en la zona de Luz de América. A través de la plataforma,
              las autoridades y responsables de la toma de decisiones pueden
              acceder a informes que brindan una visión general de la situación
              de seguridad en la comunidad.
            </p>
          </div>
          <div className="mb-4 md:w-60 md:mr-52 ml-12">
          <Image src="/images/hero.png" width={2000} height={2000} alt="hero2"/>
          <Image src="/images/menusession2.webp" width={2000} height={2000} alt="hero"/>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default HomePage;
