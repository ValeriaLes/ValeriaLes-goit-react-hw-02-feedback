import { styled } from "styled-components";

export const Button = styled.button`

border: 1px solid;
border-radius: 5px;
background-color: white;
cursor: pointer;
&:not(:last-child) {
    margin-right: 10px;
}
&:active {
    background-color: blue;

}

`