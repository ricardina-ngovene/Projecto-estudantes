import React, { useState } from "react";
import { Header } from "../components/header/index";
import { Footer } from "../components/footer/footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    contato: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <>
      <main className="bg-gradient-to-r from-white to-sky-blue-200 min-h-screen">
        <Header />
        <div className="flex flex-col items-center pt-5 relative">
          <div className="absolute inset-x-0 top-0 flex items-center justify-center w-full max-w-full">
            <h1 className="font-bold text-white text-5xl">Contacte-nos</h1>
          </div>

          <div className="max-w-md mx-auto my-8">
            <form
              onSubmit={handleSubmit}
              className="bg-red-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="nome" 
                >
                  Nome
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 hover:bg-neutral-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-neutral-300"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="contato"
                >
                  Contato
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 hover:bg-neutral-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contato"
                  name="contato"
                  type="text"
                  placeholder="Digite seu contato"
                  value={formData.contato}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-neutral-700 hover:bg-neutral-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
