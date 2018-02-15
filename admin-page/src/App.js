import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Menu from './Components/Menu';

const menu = [
  {
    name: 'Dashboard',
    path: '/dashboard'
  },
  {
    name: '文章',
    path: '/posts',
    sub: [
      {
        name: '新建',
        path: '/new'
      },
      {
        name: '所有',
        path: '/all'
      },
      {
        name: '分类',
        path: '/category'
      },
      {
        name: '标签',
        path: '/tag'
      }
    ]
  }
];

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const loggedIn = true;

class App extends Component {
  render() {
    return (
      <Router>
        <main className="blog-go">
          <aside className="menu">
            <div className="logo-area">
              <a href="#">Logo</a>
            </div>
            <Menu menu={menu} menuClass="sidebar-menu"></Menu>
          </aside>
          <section className="content">
            <Route exact path='/' render={() => (
              loggedIn ? (
                <Redirect to="/dashboard"/>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
          </section>
        </main>
      </Router>
    );
  }
}

export default App;
