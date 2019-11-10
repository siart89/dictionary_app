import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataContext } from './contextData/DataContext';
import { Form, Input } from '../styles';
import setSearchingWord from './store/actions/setSearchingWord';


const GettingData = () => {
  const { setData } = useContext(DataContext);
  const text = useSelector((state) => state.searchingWord);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20191106T200215Z.dd0daeb575ac3998.ce63ed1b0a0ed8ed7248bfa4b7f758af37c6f1d4&lang=en-ru&text=${text}`);
      const json = await resp.json();
      setData(json.def);
      console.log(json.def);
    };
    if (text) {
      getData();
    } else {
      setData([]);
    }
    setSearchText(text);
  }, [text, setData]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmitOnClick = (e) => {
    e.preventDefault();
    dispatch(setSearchingWord(searchText));
  };

  return (
    <>
      <Form onSubmit={handleSubmitOnClick}>
        <Input
          type="text"
          onChange={handleInputChange}
          value={searchText}
        />
      </Form>
    </>
  );
};

export default GettingData;
