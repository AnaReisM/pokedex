import styled from "styled-components";

export const Aside = styled.aside`
  width: 20vh;
  //background: red;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ItemList = styled.li`
  margin: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  color: tomato;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    background: tomato;
    color: white;
  }
`;
