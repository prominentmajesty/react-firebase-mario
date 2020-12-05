import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './config/fbConfig';
import {useSelector} from 'react-redux';
import {isLoaded} from  'react-redux-firebase';

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase}))
  )  
); 

const config = {
  userProfile: 'users', // where profiles are stored in database
  useFirestoreForProfile: true // use Firestore for profile instead of RTDB
}

const rffProps = {
  firebase, 
  config: config,
  dispatch: store.dispatch,
  createFirestoreInstance 
}

function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth))
  return (
    <div className = "container">
      <span className="load">Loading...</span>
    </div>
  );
  return children
}

ReactDOM.render( 
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>  
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);
reportWebVitals();
