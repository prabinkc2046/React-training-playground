import React from 'react';
import { ThemeProvider } from 'styled-components';
import content from './components/Content';
import GlobalStyle from './components/styles/Global';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { StyledCard } from './components/styles/Card.styled';
import Card from './components/Card';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
export default function App() {
  const theme = {
    mobile: '768px',
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#ebfbff'
    }
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
      {content.map((item, index) => (
          <Card item={item} index={index}/> 
      ))}
      </Container>
      <ItemList />
      <Footer />
      {/* <Content /> */}
    </ThemeProvider>
    </>
  )
}
