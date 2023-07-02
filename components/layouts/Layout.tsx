import Head from "next/head";
import React, { FC } from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";


interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Vinicio Borja y Marria Parrga" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
      >
        {children}
        <Footer />
      </main>
    </>
  );
};
