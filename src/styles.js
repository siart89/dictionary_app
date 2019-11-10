import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    background:#fff;
    padding:0;
    margin:0;
  }
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
`;

const MainWrapper = styled.section`
  max-width:70vw;
  width:100%;
  min-height:50vh;
  margin: 50px auto;
  padding: 25px 20px;
  box-shadow: 0 0 6px #d6d6d6;
  border-radius:5px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
`;

// FORM STYLES

const Form = styled.form`
  display:flex;
`;

const Input = styled.input`
  padding: 4px 5px;
  max-width: 240px;
  width:100%;
  height:40px;
  font-size:16px;
  outline:none;
  border: 1px solid #999;
  border-radius:3px;
`;

const Button = styled.button`
  width:40px;
  background:#fff;
  outline:none;
  border: 1px solid #999;
  cursor: pointer;
`;

export {
  GlobalStyles,
  MainWrapper,
  Form,
  Input,
  Button,
};
