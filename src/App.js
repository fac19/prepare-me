import React, { useReducer } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import theme from './theme';
import SiteContext from './model/SiteContext';
import initialState from './model/initialState';
import updateState from './model/updateState';

// Pages
import StoryTemplates from './pages/StoryTemplates';
import LandingPage from './pages/LandingPage';

function App() {
  const [state, dispatch] = useReducer(updateState, initialState);
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SiteContext.Provider value={[state, dispatch]}>
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/select-story-template" component={StoryTemplates} />
              <Route path="/delete-page" component={StoryTemplates} />
              <Route path="/add-page" component={StoryTemplates} />
              <Route path="/view-mode" component={StoryTemplates} />
              <Route path="/download" component={StoryTemplates} />
              <Route path="/print" component={StoryTemplates} />
            </Switch>
          </Router>
        </SiteContext.Provider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
