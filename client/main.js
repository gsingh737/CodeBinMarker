/**
 * Created by User on 7/9/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.render-target'));
});