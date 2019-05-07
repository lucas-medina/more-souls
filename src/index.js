import React from 'react'
import ReactDOM from 'react-dom';
import Board from './components/Board';

import { GlobalStyles } from './styles/globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Board />
      </div>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
