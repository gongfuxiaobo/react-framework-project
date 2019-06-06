import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'
import routers from './routes/index'

function initRouter(data) {
  if (data && data.length > 0) {
    return data.map(router => (
      <Route
        path={router.path}
        exact
        component={router.component}
        key={router.name}
      >
        {initRouter(router.childrens)}
      </Route>
    ))
  } else {
    return
  }
}

console.log(initRouter(routers))

function RouterConfig({ history, app }) {
  const Home = dynamic({
    app,
    component: () => import('./routes/home/index')
  })
  const User = dynamic({
    app,
    component: () => import('./routes/home/user')
  })
  const Error404 = dynamic({
    app,
    component: () => import('./routes/error/404')
  })

  return (
    <Router history={history}>
      <Switch>
        {/* {routers.map((router, index) => (
          <Route
            path={router.path}
            exact
            component={router.component}
            key={index}
          />
        ))} */}
        {/* <Redirect from="/" to="/404" /> */}
        <Route path="/home" exact component={Home} />
        <Route path="/user" exact component={User} />
        <Route component={Error404} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
