import React from 'react';
import DisplayCurrentBitcoinPrice from './components/CurrentPrice';
import CurrentPrice from './components/CurrentPrice';
import userDetails from './components/UserDetails';
function App() {
  return (
    <div className="App">
      {/* <CurrencyLists /> */}
      {/* <CurrentPrice /> */}
      <userDetails />
    </div>
  );
}

export default App;
