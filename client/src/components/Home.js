import React from "react";
import { Imgsection } from "./Imgsection";
import { Getstarted } from "./Getstarted";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Product } from "./Product";
import { Vision } from "./Vision";
export const Home = () => {
  return (
    <div>
      <Header />
      <Imgsection />
      <Getstarted />
      <Product />
      <Vision />
      <Footer />
    </div>
  );
};
