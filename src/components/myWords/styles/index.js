import styled from 'styled-components';

const WordsWrapper = styled.div`
  max-height:50vh;
  overflow-Y:auto;
  margin: 0 15px;
`;

const Button = styled.button`
  background:none;
  border: 1px dashed #999;
  width: 30px;
  height:30px;
  cursor:pointer;
  box-shadow: 0 0 5px #999;
 
`;

const Li = styled.li`
  font-size: 16px;
  border-bottom: 1px solid #999;
  padding:5px;
  display:flex;
  align-items:center;
  justify-content: space-between;
`;

const Word = styled.span`
  cursor:pointer;
  outline:none;
  &:hover{
    text-shadow: 1px 1px 3px #999;
  }
`;
export {
  Button,
  WordsWrapper,
  Li,
  Word,
};
