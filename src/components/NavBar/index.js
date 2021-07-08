import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/images";
import { IconClose, IconMenu, SearchIcon } from "../../assets/svg";
import { LIST_LINKS } from "../../constants";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
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
          <button
            className={"content-button-menu"}
            onClick={() => setShowMenu(true)}
          >
            <IconMenu />
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className={"menu-responsive"}>
          <div className={"header-menu-responsive"}>
            <div className={"logo_nav"}>
              <img src={Logo} alt={"Logo"} />
            </div>
            <button
              className={"button-close"}
              onClick={() => setShowMenu(false)}
            >
              <IconClose />
            </button>
          </div>
          <div className={"container-links-responsive"}>
            {LIST_LINKS.map(({ path, name }, index) => {
              return (
                <NavLink
                  key={index}
                  exact
                  to={path}
                  activeClassName={"active_link"}
                  className={"link"}
                  onClick={() => setShowMenu(false)}
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
