import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './modules/shared/Layout.jsx'
import List from './modules/list/List.jsx'

const rootRoute = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={List} />
        </Route>
    </Router>
)

render(rootRoute, document.getElementById('app'))
