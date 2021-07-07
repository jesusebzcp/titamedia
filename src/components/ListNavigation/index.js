import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconGrid, IconList } from "../../assets/svg";
import { LIST_LINKS } from "../../constants";
import { LIST_ITEMS } from "../../data";
import Loading from "../Loading";
const ListNavigation = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleMenu = (index) => {
    setLoading(true);
    setMenuIndex(index);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div id={"container_list_navigation"} className={"container"}>
      <div className={"container_buttons_mode"}>
        <button>
          <IconGrid />
        </button>
        <button>
          <IconList />
        </button>
      </div>
      <div>
        <div className={"containers_links"}>
          {LIST_LINKS.map(({ name }, index) => {
            return (
              <a
                href={"#!"}
                key={index}
                activeClassName={"active_link"}
                className={menuIndex === index ? "active_link" : "link"}
                onClick={() => handleMenu(index)}
              >
                {name}
              </a>
            );
          })}
        </div>
      </div>
      <Container
        className={"container-flex-products  justify-content-md-center"}
      >
        {loading ? (
          <Loading />
        ) : (
          <Row>
            {LIST_ITEMS.map(({ image_url, name }, index) => {
              return (
                <Col className={"item"} key={index}>
                  <img src={image_url} alt={name} className={"img_product"} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ListNavigation;
