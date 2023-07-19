import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };


  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://previews.dropbox.com/p/thumb/ABym7HhR0bjfqx-wEQBojPc490cyXZOLsSsaQb5uaFRHXoN3SGjwnVs6njiC4EU8DMyzEVk2sZlPa-9XP6VH_-HlB0rS9suE509Loriau8Yb1_Tg9B4FKoAnfHkOugnzt6ApRx8SXvJwi3aogAVKddi2ZNAIg0KuNBFtA2h_dU_LZY21GirQkH-Cwm2rBJBhk7uVdnD6fp1p-7Oc2hIC1sD2HwMUZT4gCIb0IjV4QdPJnQB5AjgO_WGQjr5g6OsotSNK0ddqNJ5byBZzmxwt3r_bGssNBT0F-WS2DWl951lX_TIRiX4urJuPN6qhjBVWNJdRD0TwWhK2_cdWBYS60WiZKwOewOS4f3py298ZIRdNgGaES8NFWB9dN1wtOKuBng4/p.jpeg"
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;

//For a custom search field, we tend to surround it with a div
//logoutofapp functon is going to dispatch the logout action and log us out of firebase
//first we need to tell redux that we are logging out
