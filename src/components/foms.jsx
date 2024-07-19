import { Header } from "../components/header/index";
import { Footer } from "../components/footer/footer";
export const Form = () => {
    <>
    <Header />
<div className="max-w-md mx-auto my-8">
<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
      Nome
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="nome"
      name="nome"
      type="text"
      placeholder="Digite seu nome"
      value={formData.nome}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      name="email"
      type="email"
      placeholder="Digite seu email"
      value={formData.email}
      onChange={handleChange}
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contato">
      Contato
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="contato"
      name="contato"
      type="text"
      placeholder="Digite seu contato"
      value={formData.contato}
      onChange={handleChange}
    />
  </div>
  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Enviar
    </button>
  </div>
</form>
</div>
<Footer />

</>
    }
export default Formulario;