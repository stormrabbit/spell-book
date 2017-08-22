import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import App from "./routes/App.js";
import PropValues from './components/propValues/PropValues';
import Races from './components/races/Races';
import Classes from './components/classes/Classes';
import Feats from './components/feats/Feats';
import Skills from './components/skills/Skills';
import Stories from './components/stories/Stories';
import NotFound from './components/notfound/Notfound';
import HomePage from './components/host/HomePage';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="/propvalues" component={PropValues} />
        <Route path="/races" component={Races} />
        <Route path="/classes" component={Classes} />
        <Route path="/skills" component={Skills} />
        <Route path="/feats" component={Feats} />
        <Route path="/stories" component={Stories} />
        <Route path="/*" component={NotFound} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
