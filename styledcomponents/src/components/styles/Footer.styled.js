import styled from "styled-components";
export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
color: royalblue;

ul {
    list-style-type: none;
    margin: 20px;
    padding: 10px;
    width: auto;
    height: auto;

    border: 0;
    text-align: center;

    line-height: 1.5;
}

ul li {
    padding: 5px;
    cursor: pointer;
    overflow: hidden;
    visibility: visible;
}

p {
    padding: 5px;
    width: 325px;
    height: auto;
    margin: 5px auto;
    overflow: hidden;
    text-decoration: none;
}


`
