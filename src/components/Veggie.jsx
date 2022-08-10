import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const check = localStorage.getItem("veggie");

  const getPopular = async () => {
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin-top: 1.2rem;
  margin-left: 4rem;
  margin-right: 4rem;
  margin-bottom: 0;
  overflow: hidden;
  height: 18rem;
`;

const Card = styled.div`
  position: relative;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    height: 12rem;
    border-radius: 2rem;
  }
  p {
    position: absolute;
    left: 50%;
    bottom: 35%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, 0%);
    z-index: 4;
    color: white;
    font-weight: 600;
    font-size: small;
    text-align: center;
    white-space: nowrap;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  height: 12rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  border-radius: 2rem;
`;
export default Veggie;
