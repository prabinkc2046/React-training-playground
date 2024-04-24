import styled from 'styled-components';

export const Form = styled.div`
width: 100%;
max-width: 350px;
background: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: rgba(3,3,3,0.1) 10px 0px 50px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Field = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 10px;
`

export const Label = styled.div`
  font-size: 25px;
  color: #777;
  font-weight: 600;
`

export const Input = styled.input`
width: 100%;
padding: 25px 15px;
border: 0;
background: #f0f0f0;
font-size: 18px;
color: #555;
font-weight: 600;
`

export const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #0373f3;
color: #fff;
font-weight: 600;
width: 85%;
padding: 25px 15px;
border: 0;
border-radius: 5px;
font-size: 18px;

&:hover{
  background: #0271d0;
}
`