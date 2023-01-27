import styled from "styled-components";
import { Link } from "react-router-dom";

function TagButton(props) {
    return (
        <Button>{props.name}</Button>
    )
}

const Button = styled.div`
  background: rgb(242, 242, 242);

  border: white;
  height: 2rem;
  border-radius: 0.5rem;
  display: inline-grid;
  -webkit-box-align: center;
  align-items: center;
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 3px;
  margin-right: 3px;
`

export default TagButton;