import React, {useState} from "react";
import { useHistory } from "react-router-dom";


import { HeaderContainer, HeaderDivider, MenuMobile } from "./styles";

export default function Header() {

  const [open, setOpen] = useState([false,]);
  const history = useHistory();

function toggle(){
  if(!open){
    setOpen(true)
  }
  if(open){
    setOpen(false);
  }
}

if(open){
  return (
    <>
    <HeaderDivider>
      <img
        src="https://i.imgur.com/2B7YuEm.png"
        className="icon"
        alt="Mobile Menu"
        className={open ? 'mobile-menu' : 'mobile-menu open'}
        onClick={() => toggle()}
        />
        </HeaderDivider>
    <HeaderContainer>
    <HeaderDivider>
      <a href="https://api.whatsapp.com/send?phone=11953289931&text=Olá,%20estou%20interessado%20em%20um%20imóvel" target="_blank">
      <img
        src="https://i.imgur.com/erGXPEG.png"
        className="icon"
        alt="Whatsapp ícone"
        />
        (11) 95328-9931</a>
      <a href="tel:1148070111">
      <img
        src="https://i.imgur.com/WWGLHaU.png"
        className="icon"
        alt="Telefone ícone"
        />
        (11) 4807-0111 </a>
      </HeaderDivider>
      <HeaderDivider>
      <a href="tel:114586-3434"><img
        src="https://i.imgur.com/WWGLHaU.png"
        className="icon"
        alt="Telefone ícone"
        />(11) 4586-3434</a>
      <a onClick={() => history.push('/register-property')}>Anúncie o seu imóvel</a>
      </HeaderDivider>
      
    </HeaderContainer>
    </>
  );
}

  if(!open){
    return (
    <>
    <MenuMobile>

    </MenuMobile>
    <HeaderDivider>
      <img
        src="https://i.imgur.com/608lL3B.png"
        className="icon"
        alt="Mobile Menu"
        className={open ? 'mobile-menu' : 'mobile-menu open'}
        onClick={() => toggle()}
        />
      </HeaderDivider>
    <HeaderContainer />
    </>)
  }
}
