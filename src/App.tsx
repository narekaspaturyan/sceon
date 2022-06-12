import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from 'components/error-boundary';

import Layout from 'layout';
import Routes from 'routes';

import 'react-datepicker/dist/react-datepicker.css';
import './styles/index.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <Routes />
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
