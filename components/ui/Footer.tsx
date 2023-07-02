import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
        
      <section id="footer">
        <div className="bg-regal-blue relative text-color-primary">
          <div className="container py-10">
            <div className="grid gap-10 md:grid-cols-2 pb-10">
              <div className="space-y-6">
                <Image
                  src="/images/p.webp"
                  width={400}
                  height={400}
                  alt="hero"
                />

                <div className="flex flex-col    justify-center space-y-4">
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
                <div className="flex gap-5 items-center">
                  <p>Siguenos en:</p>
                  <i className="fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary"></i>
                  <i className="fa-brands fa-twitter cursor-pointer hover:text-color-secondary"></i>
                  <i className="fa-brands fa-youtube cursor-pointer hover:text-color-secondary"></i>
                  <i className="fa-brands fa-instagram cursor-pointer hover:text-color-secondary"></i>
                </div>
              </div>
              <div className="flex justify-between md:justify-around">
                <div className="space-y-6">
                  <h4 className="font-bold text-lg">Campus Santo Domingo</h4>
                  <ul className="space-y-3">
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#">Home</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#features">Features</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#testimonial">Testimonial</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#pricing">Pricing</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#blog">Blog</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-lg">Help</h4>
                  <ul className="space-y-3">
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#">About Us</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#features">Partners</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#testimonial">Career</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#pricing">Reviews</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#blog">Terms & Conditions</a>
                    </li>
                    <li className="underline hover:no-underline hover:text-color-secondary">
                      <a href="#contact">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10 border-t border-color-gray">
              <p>
                María José Párraga Moreira y Vinicio Leonardo Borja Tapia Todos
                los derechos reservados 2023.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
