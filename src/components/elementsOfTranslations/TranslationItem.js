import React, { useContext } from 'react';
import { DataContext } from '../contextData/DataContext';
import {
  WordsWrapper,
  Li,
  Title,
  PosText,
} from './styles';

const TranslationItem = () => {
  const { data } = useContext(DataContext);

  return (
    <WordsWrapper>
      {data.map((item) => (
        item.pos && (
          <Li key={item.pos + item.text}>
            <Title>
              {`${item.text} [${item.ts}] `}
              <PosText>{item.pos}</PosText>
            </Title>
            <p>
              {item.tr.map((trans) => (
                <span key={trans.text}>
                  {`${trans.text}, `}
                </span>
              ))}
            </p>

          </Li>
        )
      ))}
    </WordsWrapper>
  );
};

export default TranslationItem;
