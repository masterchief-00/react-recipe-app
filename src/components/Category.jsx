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
      <div>
        <GiPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div>
        <GiHamburger />
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </List>
  );
}

const List=styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
export default Category;
