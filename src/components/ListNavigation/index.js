import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";

import { IconGrid, IconList } from "../../assets/svg";
import { LIST_LINKS } from "../../constants";
import { LIST_ITEMS, EXTRA_DATA } from "../../data";
import Loading from "../Loading";
const ListNavigation = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(LIST_ITEMS);

  const handleMenu = (index) => {
    setList(LIST_ITEMS);
    setLoading(true);
    setMenuIndex(index);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setList(list.concat(EXTRA_DATA));
      setLoading(false);
    }, 2000);
  };

  return (
    <Element
      id={"container_list_navigation"}
      className={"container"}
      name={"container_list_navigation"}
    >
      <div className={"container_buttons_mode"}>
        <button>
          <IconGrid />
        </button>
        <button>
          <IconList />
        </button>
      </div>
      <div>
        <Element className={"containers_links"} name={"containers_links"}>
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
        </Element>
      </div>
      <Container>
        <div className={"container-flex-products  "}>
          {loading ? (
            <Loading />
          ) : (
            <Row className={"justify-content-md-center"}>
              {list.map(({ image_url, name }, index) => {
                return (
                  <Col className={"item"} key={index} sm={2} md={3}>
                    <img src={image_url} alt={name} className={"img_product"} />
                  </Col>
                );
              })}
            </Row>
          )}
          {list.length < 15 && (
            <div className={"container-button-loader"}>
              <button
                className={"button-load-more"}
                onClick={() => handleLoadMore()}
              >
                show me more
              </button>
            </div>
          )}
        </div>
      </Container>
    </Element>
  );
};

export default ListNavigation;
