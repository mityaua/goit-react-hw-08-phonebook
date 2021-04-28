import { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import routes from './routes';
import { authOperations } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import Loader from './components/Loader';

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const PageNotFound = lazy(() =>
  import('./pages/PageNotFound' /* webpackChunkName: "404-page" */),
);

const App = ({ getCurrentUserOnLoad }) => {
  useEffect(() => {
    getCurrentUserOnLoad();
  }, [getCurrentUserOnLoad]);

  return (
    <Container>
      <AppBar />

      <ToastContainer autoClose={2500} />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.contacts} component={ContactsPage} />
          <Route path={routes.register} component={RegisterPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>

      <AppFooter />
    </Container>
  );
};

const mapDispatchToProps = {
  getCurrentUserOnLoad: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
