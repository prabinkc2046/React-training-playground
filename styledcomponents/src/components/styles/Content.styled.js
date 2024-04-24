import styled from "styled-components";

export const StyledContainer = styled.div`
margin: 0 auto;
width: 1000px;
max-width: 100%;
background-color: ${({theme}) => theme.colors.header};
color: ${({ danger} ) => danger ? 'yellow' : 'blue'};
`