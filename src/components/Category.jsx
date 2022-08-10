import React from "react";
import styled from "styled-components";
import {
  GiPizzaSlice,
  GiHamburger,
  GiNoodles,
  GiChopsticks,
} from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <Slink to={"/cuisine/italian"}>
        <GiPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/american"}>
        <GiHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40%;
  text-decoration: none;
  background: linear-gradient(to left, #494949, #313131);
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.6rem;
  }
  svg {
    color: white;
    font-size: 1.3rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
export default Category;
