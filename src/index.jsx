import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

  // <React.StrictMode> 
  <Provider store= {store}>
  <BrowserRouter>
    <App />
  </BrowserRouter> 
</Provider>
// </React.StrictMode>