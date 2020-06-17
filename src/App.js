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
import PageTemplates from './pages/PageTemplates';
import PecsStoryTemplates from './pages/PecsStoryTemplates';
import PecsPageTemplates from './pages/PecsPageTemplates';
import LandingPage from './pages/LandingPage';
import StoryPage from './pages/StoryPage';
import ActionsPage from './pages/ActionsPage';
import PrintPages from './pages/PrintPages';
import MissingPage from './pages/MissingPage';
import ViewMode from './pages/ViewMode';

function App() {
  const [state, dispatch] = useReducer(updateState, initialState);
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SiteContext.Provider value={[state, dispatch]}>
          <Router>
            <Switch>
              <Route path="/actions-page" component={ActionsPage} />
              <Route exact path="/" component={LandingPage} />
              <Route path="/select-story-template" component={StoryTemplates} />
              <Route
                path="/select-pecs-template"
                component={PecsStoryTemplates}
              />
              <Route path="/story-page/:pageNumber" component={StoryPage} />
              <Route path="/delete-page" component={StoryTemplates} />
              <Route path="/select-page-template" component={PageTemplates} />
              <Route
                path="/add-pecs-page-template"
                component={PecsPageTemplates}
              />
              <Route path="/view-mode" component={ViewMode} />
              <Route path="/print" component={PrintPages} />
              <Route path="*" component={MissingPage} />
            </Switch>
          </Router>
        </SiteContext.Provider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
