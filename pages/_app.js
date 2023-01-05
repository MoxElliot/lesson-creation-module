import React from 'react';
import '../styles/index.scss';
import '../styles/instructorCal.scss';
import '../styles/instructorDash.scss';
import '../styles/studentCal.scss';
import { Provider } from "react-redux";
import { store } from "../redux/store"


function App({ Component, pageProps }) {

  return (
    <>
    <Provider store={store}>
      <Component {...pageProps }/>
    </Provider>
    </>
  )
}

export default App;
