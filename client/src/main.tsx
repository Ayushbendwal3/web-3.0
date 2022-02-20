import { render } from 'react-dom';
import './index.css';
import App from './App';
import { TransactionsProvider } from './context/TransactionContext';

render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById('root')
);
