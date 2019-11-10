import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/fa/plus';
import addWordToMyWords from '../store/actions/addWordToMyWords';
import setSearchingWord from '../store/actions/setSearchingWord';
import {
  WordsWrapper,
  Button,
  Li,
  Word,
} from './styles';
import removeFromMyWords from '../store/actions/removeFromMyWords';


const ListOfWords = () => {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.searchingWord);
  const myWords = useSelector((state) => state.myWords);

  return (
    <WordsWrapper>
      <div>
        <Button
          type="button"
          onClick={() => {
            if (word) dispatch(addWordToMyWords(word));
          }}
        >
          <Icon icon={plus} size="30%" />
        </Button>
      </div>
      <ul>
        {[...myWords].map((elem) => (
          <Li
            key={elem}
          >
            <Word
              role="button"
              tabIndex="0"
              onClick={() => dispatch(setSearchingWord(elem))}
              onKeyDown={() => { }}
            >
              {elem}
            </Word>
            <Button
              type="button"
              onClick={() => dispatch(removeFromMyWords(elem))}
            >
            -
            </Button>
          </Li>
        ))}
      </ul>

    </WordsWrapper>
  );
};

export default ListOfWords;
