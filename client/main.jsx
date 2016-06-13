import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import {Meteor} from 'meteor/meteor';
import ons from 'onsenui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import '../node_modules/onsenui/css/onsenui.css';
import '../node_modules/onsenui/css/onsen-css-components.css';

import Home from './Home.jsx';
import OnsenUIPage from './OnsenUI.jsx';
import MaterialUIPage from './MaterialUI.jsx';


// Change so that query key isn't added to hash urls
var browserHistory = useRouterHistory(createHashHistory)({ queryKey: false });

Meteor.startup(() => {
    // Needed for material-ui
    injectTapEventPlugin();

    if (ons.platform.isChrome() || ons.platform.isFirefox() || ons.platform.isIE()) {
        ons.platform.select('android');
    }

    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
			<Router history={browserHistory}>
				<Route path="/" component={Home}></Route>
				<Route path="/onsenui" component={OnsenUIPage}></Route>
				<Route path="/materialui" component={MaterialUIPage}></Route>
			</Router>
        </MuiThemeProvider>,
        document.querySelector('#app-root')
    );
});
