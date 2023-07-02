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
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
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
                      Password
                    </label>
                    <input
                      className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="******************"
                    />
                    <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as youd like
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
