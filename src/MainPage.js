import React from 'react';
import { useDispatch } from 'react-redux';
import { MainWrapper } from './styles';
import GettingData from './components/GettingData';
import TranslationItem from './components/elementsOfTranslations/TranslationItem';
import ListOfWords from './components/myWords/ListOfWords';
import toLocalStorage from './components/store/actions/toLocalStorage';

const MainPage = () => {
  const dispatch = useDispatch();

  window.addEventListener('beforeunload', () => {
    dispatch(toLocalStorage());
  });

  return (
    <MainWrapper>
      <div>
        <GettingData />
        <TranslationItem />
      </div>
      <ListOfWords />
    </MainWrapper>
  );
};

export default MainPage;
