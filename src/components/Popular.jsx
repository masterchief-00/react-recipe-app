import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data);
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
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
  margin: 4rem 4rem;
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
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    transform: translate(-50%, 0%);
    z-index: 3;
    color: white;
    font-weight: 600;
    font-size: small;
    text-align: center;
    white-space: nowrap;
  }
`;
export default Popular;
