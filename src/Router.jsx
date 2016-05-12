import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './modules/shared/Layout.jsx'
import Welcome from './modules/welcome/Welcome.jsx'

const rootRoute = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Welcome} />
        </Route>
    </Router>
)

render(rootRoute, document.getElementById('app'))
