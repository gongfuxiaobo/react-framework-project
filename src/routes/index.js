import Home from './home/index'
import Home1 from './home/user'
import Home2 from './home/list'
import Message from './message/index'

const Routers = [
  {
    name: 'Home',
    path: '/home',
    component: Home,
    icon: 'icon-home',
    routes: [
      {
        name: 'Home1',
        path: '/home1',
        component: Home1,
        routes: [
          {
            name: 'Home2',
            path: '/home2',
            exact: true,
            component: Home2,
            routes: []
          }
        ]
      }
    ]
  },
  {
    name: 'Message',
    path: '/message',
    component: Message,
    icon: 'icon-message',
    routes: []
  }
]

export default Routers
