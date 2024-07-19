import { Header } from "../components/header/index";
import { Footer } from "../components/footer/footer";

export const Home = () => {
    return (
      <>
        <Header />
        <h1 className="text-2xl font-bold">
      Bem vindo ao sistema de gestao da turma Bytes4Future Moz.
    </h1>
    <img src="src/components/home. img.jpeg" alt="" />
        <Footer />
      </>
    );
  };
  