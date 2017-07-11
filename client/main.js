/**
 * Created by User on 7/9/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {Bins} from '../imports/collections/bins';

const routes =  (
    <BrowserRouter>
      <div>
          <App />
          <Switch>
              <Route path="/bins/:binId" component={BinsMain}/>
              <Route path="/" component={BinsList}/>
          </Switch>
      </div>
    </BrowserRouter>
);
Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});