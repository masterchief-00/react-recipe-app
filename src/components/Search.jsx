import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import{useNavigate} from 'react-router-dom'

function Search() {
  const [query, setQuery] = useState("");
  const navigate=useNavigate();

  const handleSearchChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    navigate('/searched/'+e.target.value);
  };
  return (
    <FormStyle>
      <div>
        <FaSearch />
        <input type="text" value={query} onChange={handleSearchChange} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  input {
    border: none;
    background: linear-gradient(to right, #494949, #313131);
    font-size: 1.3rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }

  div {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 34.5%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
