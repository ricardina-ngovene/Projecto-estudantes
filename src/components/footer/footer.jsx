import { WhatsappLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react";
import { InstagramLogo } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react";
export const Footer = () => {
    return (
  
      <footer className="bg-red-600 py-4 mt-auto">
       <div className="container mx-auto px-4"> <p className="text-center text-black">&copy, Meu Site 2024. Todos os direitos reservados. RAN</p> </div>
        <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <WhatsappLogo size={24} />
          <FacebookLogo size={24} />
          <InstagramLogo size={24}/>
          <GithubLogo size={24}/>
        </div>

      </div>
   
      </footer>
    );
  };