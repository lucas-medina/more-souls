import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { GlobalStyles } from './styles/globalStyles'
import store from './state/store'
import AppContainer from './components/AppContainer';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer />
    </>
  )
}

ReactDOM.render(
  <Provider store={createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, document.getElementById('root'));
