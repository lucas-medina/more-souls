import React from 'react'
import ReactDOM from 'react-dom';

import { GlobalStyles } from './styles/globalStyles';
import TitleScreen from './components/TitleScreen';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <TitleScreen title="a1mwkq424" subtitle="2248775929958421300" />
      </div>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
