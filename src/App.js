// import 'devextreme/dist/css/dx.common.css';
// import './themes/generated/theme.base.css';
// import './themes/generated/theme.additional.css';
import React, { useEffect, useRef,useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { FETCH_ENUMS } from './redux/types';
import './dx-styles.scss';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import NotAuthenticatedContent from './NotAuthenticatedContent';
import { locale, loadMessages } from 'devextreme/localization';
import plMessages from './messages/pl.json';
import themes from 'devextreme/ui/themes';

import {
  toggleThemeDark,
  toggleThemeLight
} from './redux/actions/themesActions';

const LIGHT_THEME = 'material.blue.light';
const DARK_THEME = 'material.blue.dark';

function App() {
  const { user, loading } = useAuth();
  const [currentTheme, setCurrentTheme] = useState('');
  const dispatch = useDispatch();

  const [darkMode, setDarkMode] = useState(
    currentTheme === 'material.blue.dark' ? false : true
  );

  const toggleTheme = () => {
    window.localStorage.setItem(
      'dx-theme',
      !darkMode ? DARK_THEME : LIGHT_THEME
    );

    themes.current(window.localStorage.getItem('dx-theme'));
    setDarkMode(!darkMode);

    if(themes.current() === LIGHT_THEME) {
      dispatch(toggleThemeLight());
    }else {
      dispatch(toggleThemeDark());
    }
  };
 
  
  useEffect(() => {
    if (themes.current() === LIGHT_THEME) {
      dispatch(toggleThemeLight());
    } else {
      dispatch(toggleThemeDark());
    }

    if (window.localStorage.getItem('dx-theme')) {
      themes.current(window.localStorage.getItem('dx-theme'));
    }
    setCurrentTheme(window.localStorage.getItem('dx-theme') || LIGHT_THEME);
  }, []);

  if (loading) {
    return <LoadPanel visible />;
  }

  if (user) {
    return <Content toggleTheme={toggleTheme}/>;
  }

  return <NotAuthenticatedContent />;
}

export default () => {
  const screenSizeClass = useScreenSizeClass();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_ENUMS });
  }, [dispatch]);

  const langSet = useRef(false);

  const setLang = () => {
    if (!langSet.current) {
      langSet.current = true;

      loadMessages(plMessages);
      locale(navigator.language);
    }
  };
  setLang();

  return (
    <GlobalErrorBoundary>
      <Router>
        <AuthProvider>
          <NavigationProvider>
            <div className={`app dx-theme-background-color ${screenSizeClass}`}>
              <App />
            </div>
          </NavigationProvider>
        </AuthProvider>
      </Router>
    </GlobalErrorBoundary>
  );
};
