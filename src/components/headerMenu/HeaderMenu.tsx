import logo from "../../assets/Images/TopMenuLogo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Top,
  Menu,
  Image,
  SearchBar,
  LoginButton,
  Line,
  Portrait,
  ListMenu
} from "./HeaderStyledComponents";

function HeaderMenu(): JSX.Element {
  const profileImageLocalStorage: string = localStorage.getItem('profile') as string
  const [profilePicture, setProfilePicture] = useState<string>("")
  const [menuHidden, setMenuHidden] = useState<boolean>(true)

  useEffect(() => {
    setProfilePicture(profileImageLocalStorage)
  }, [profileImageLocalStorage])

  function changeMenuState() {
    setMenuHidden(!menuHidden);
    console.log(menuHidden)
  }

  function logOut() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Top>
      <Menu>
        <Link to="/" >
          <Image src={logo} alt="ArtPicker" />
        </Link>
        <div>
          <SearchBar placeholder="Pesquisar Post" />
        </div>
        {profilePicture ?
          <Portrait src={profilePicture} onClick={changeMenuState} /> :
          <Link to="/signin" >
            <LoginButton>Login</LoginButton>
          </Link>
        }
        <ListMenu menuHidden={menuHidden}>
          <Link to="/sendpost">
            <li>Postar imagem</li>
          </Link>
          <li onClick={logOut}>Logout</li>
        </ListMenu>
      </Menu>
      <Line />
    </Top>
  );
};

export default HeaderMenu;