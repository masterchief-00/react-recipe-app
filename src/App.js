import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router,Link } from "react-router-dom";
import Search from "./components/Search";
import styled from 'styled-components'
import {RiRestaurantLine} from 'react-icons/ri'

function App() {
  return (
    <div className="App">
      <Router>
      <Nav>
        <RiRestaurantLine />
        <Logo to={"/"}>React-Food</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}


const Logo=styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two',cursive;  
`;

const Nav=styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    font-size: 1.5rem;
  }
`
export default App;
