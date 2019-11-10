import styled from 'styled-components';

const WordsWrapper = styled.ul`
  background: #e4eaed;
  min-width:240px;
  display:inline-flex;
  box-shadow: 0 0 3px #999999;
  flex-flow: column;
  text-decoration:none;
  margin-top:45px;
`;

const Li = styled.li`
  display:flex;
  flex-flow:column wrap;
  padding:7px;
`;

const Title = styled.span`
  font-weight:bold;
  font-size:18px;
`;
const PosText = styled.span`
  font-size:10px;
  font-weight:400;
  color:#adadad;
`;
export {
  WordsWrapper,
  Li,
  Title,
  PosText,
};
