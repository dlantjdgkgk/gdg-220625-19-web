import React from 'react';

export const AppContext = React.createContext(null);

export const useAppContext = () => React.useContext(AppContext);
