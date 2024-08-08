
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>
);
