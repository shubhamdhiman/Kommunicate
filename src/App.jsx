

import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import InfoPage from './Components/InfoPage';
import PlanPage from './Components/PlanPage';
import AddOn from './Components/AddOn';
import SummaryPage from './Components/SummaryPage';
import { AppContextProvider } from './Components/SubComponents/AppContext'; // Import the context provider

function App() {
  const [page, setPage] = useState('Info');

  return (
    <AppContextProvider> {/* Wrap your app with the context provider */}
      <div className='w-full h-screen bg-blue-50 flex justify-center items-center '>
        <div className='w-[800px] bg-white rounded-lg h-4/5 p-3 shadow-md flex justify-between items-center'>
          <Sidebar page={page} setPage={setPage} />
          <div className='w-[450px] h-full'>
            {page === 'Info' ? (
              <InfoPage setPage={setPage} />
            ) : page === 'Plan' ? (
              <PlanPage  setPage={setPage}/>
            ) : page === 'AddOn' ? (
              <AddOn />
            ) : (
              <SummaryPage />
            )}
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
