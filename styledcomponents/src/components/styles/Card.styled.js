import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
border: 1px solid black;
border-radius: 25px;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: #fff;
margin: 40px 0;
box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.5);
flex-direction: ${({layout}) => layout || 'row'};

& > div {
    flex: 1;
}

img {
    width: 80%;
}

@media (max-width: ${({theme}) => theme.mobile}){
    flex-direction: column;
}
`