//Reactの基本動作に必要なもの
import React from 'react';
import ReactDOM from 'react-dom';
//Reduxを実現するためのもの
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
//ルーティング
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//コンポーネント集
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
// default よくわからん
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store= { store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ EventsIndex }/>
        <Route exact path="/events/new" component={ EventsNew }/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
