import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer/footer';


export const Users = () => {

   let [lista, setLista] = useState([]);
   let [novoItem, setNovoItem] = useState("");
   let [searchTerm, setSearchTerm] = useState("");
   let handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
 };
     
   useEffect(() => {
      setLista(["1. Alcinda Chirime", "2. Atália Patissone", "3. Ancha Catarina", "4. Alexandre Mahumane", "5. Domingos Chiconela", "6. Francisca Uamba", "7. Franco Bomba", "8. Georgina Manguana", "9. Gerson Chuquela", "10. Inacio Mugana", "11. Isabel Duarte", "12. Joaquim Ubisse", "13. Luis Isibia", "14. Maida Jane", "15. Pedro Chimuze","16. Reginaldo Alzira", "17. Ricardina Ngovene", "18. Vicente Sambo", "19. Simao Abel", "20. Sulein Badro", "21. Shelton Duarte", "22.Yuran Nhassengo",]);
   }, []);

   return (
      <>
         <Header />
         <main className="container mx-auto p-6 bg-red-700 text-white rounded-md mt-10 mb-10">
            <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" placeholder="Enter a name"
               className="w-full px-4 py-2 rounded-md bg-red-700 text-white placeholder-neutral-800 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500" />

<button onClick={() => adicionarNovoItem()} className="flex items-center mt-2 px-4 py-2 rounded-md bg-red-700 hover:bg-red-900 text-white focus:outline-none focus:ring-2 hover:bg-neutral-"><span className="mr-2">+</span> 
</button>
<input
type="seach"
placeholder="seach..." setSearchTerm
className="outline-none w-full pl-7 text-gray-800 bg-transparent h-10  hover:bg-neutral-200 rounded-l-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
value={searchTerm}
onChange={handleSearchChange}/>
            <ul className="list-disc  list-inside">
               {lista.map((item, index) => (
                  <li key={index} className="mb-2 flex h-10  rounded-md bg-red-600 hover:bg-red-500 justify-between items-center">
                     {item}
                     <button onClick={() => deletarItem(index)} className="ml-4 px-2 py-1 rounded-md bg-neutral-600 hover:bg-neutral-300 text-white focus:outline-none focus:ring-2 focus:ring-red-500">Deletar</button>
                  </li>
               ))}
            </ul>


         </main>


        
         <Footer/>

      </>
      
   )
   function adicionarNovoItem() {
      setLista([...lista, novoItem]);
      setNovoItem("");
   }
   
   function deletarItem(index) {
      let tmpArry = [...lista];
      tmpArry.splice(index, 1);
   
      setLista(tmpArry);
   }

}

export default Users;