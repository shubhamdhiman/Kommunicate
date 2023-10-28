import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [appData, setAppData] = useState({
    planType: '',
    planPrice:'',
    planDuration: 'Monthly',
    addOns: [],
    grandTotal:""
  });

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
}
