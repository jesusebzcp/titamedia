import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/images";
import { SearchIcon } from "../../assets/svg";
import { LIST_LINKS } from "../../constants";

const NavBar = () => {
  return (
    <nav id={"navigation-container"}>
      <div className={"logo_nav"}>
        <img src={Logo} alt={"Logo"} />
      </div>
      <div className={"containers_links"}>
        {LIST_LINKS.map(({ path, name }, index) => {
          return (
            <NavLink
              key={index}
              exact
              to={path}
              activeClassName={"active_link"}
              className={"link"}
            >
              {name}
            </NavLink>
          );
        })}

        <button className={"button_search"}>
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
