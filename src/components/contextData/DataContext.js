import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataContext, ContextProvider };
