/**
This bootstraps the overall react application
**/

// React dependencies
import ReactDOM from 'react-dom';

// Redux and react-redux dependencies
import { Provider as ReduxProvider } from 'react-redux';
import { store as reduxStore }  from './reduxElements';

// React Application entry-point
import App from './App';

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
