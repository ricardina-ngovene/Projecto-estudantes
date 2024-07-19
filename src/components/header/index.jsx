
import { NavBar } from "./nav-bar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-red-700 text-white h-20 px-8 text-lg">
      <h1 className="text-2xl font-bold border border-white p-2">RAN</h1>
      <section className="flex gap-5">
        <NavBar />
       
      </section>
    </header>
  );
}