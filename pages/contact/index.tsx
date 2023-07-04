import React from "react";
import { Layout } from "../../components/layouts/Layout";

const ContactPage = () => {
  return (
    <>
      <Layout title="Contacto">
        <section id="saving-money">
          <div className=" py-20 relative">
            <div className="py-20 bg-color-secondary flex  flex-col w-full justify-center items-center">
              <h1 className="title mb-4 text-3xl color-gray-light font-bold  text-center text-color-primary">
                Hablemos de lo que necesitas y cómo te podemos ayudar.
              </h1>
              <i className="fas fa-chevron-down text-color-primary text-3xl text-center"></i>
            </div>
          </div>
        </section>
        <section id="contact-form" className="bg-color-primary">
          <div className="container">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-lg mb-4 text- color-gray-light font-bold  text-center text-color-primary-light">
                Si prefieres enviarnos un mensaje directamente, por favor
                completa el siguiente formulario y nos pondremos en contacto
                contigo a la brevedad:
              </h4>
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label 
                      className="block tracking-wide text-gray-700 text-xs  mb-2 font-mono"
            
                      htmlFor="grid-first-name"
                    >
                      Nombres
                    </label>
                    <input
                      className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                    <p className="text-red-500 text-xs italic">
                       {/* Por favor complete este campo. */}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Telefono
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password" 
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder=""
                    />
                    <p className="text-gray-600 text-xs italic">
                        {/* Por favor complete este campo. */}
                    </p>
                  </div>
                  
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password" 
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      
                      placeholder=""
                    >
                    </textarea>
                    <p className="text-gray-600 text-xs italic">
                      
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                  <button type="submit" className="submit-button bg-blue-500 text-white py-2 px-4 rounded-lg">Enviar</button>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </section>
        <section id="saving-money" className="bg-color-secondary">
          <div className="container py-8 relative">
            <p className="leading-relaxed mb-4 text-xl text-center font-bold text-color-primary">
            Si tienes alguna consulta o necesitas más información sobre la aplicación Seguridad ESPE, estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
            </p>
            </div>
        </section>
        <section className=" py-20  text-center">
        <div className="container flex justify-between text-black">
          <div className="w-1/3">
            <p className="text-xl font-bold">
              Contenido de la columna 1
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-xl font-bold">
              Contenido de la columna 2
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-xl font-bold">
              Contenido de la columna 3
            </p>
          </div>
        </div>
      </section>
      <section className="py-100 text-center">
        {/* Agrega aquí el código del mapa */}

        <div  className="container flex justify-center text-black " style={{ height: '400px' }}>
        <iframe className="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14362.34376615065!2d-79.3174620878782!3d-0.41326645086554714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d53237044f39bb%3A0x24ed753bfe34c98b!2sUniversidad%20de%20las%20Fuerzas%20Armadas%20-%20ESPE%20-%20Santo%20Domingo!5e0!3m2!1sen!2sec!4v1688466546265!5m2!1sen!2sec" 
        width="900" height="450" 
         loading="lazy" ></iframe>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default ContactPage;
