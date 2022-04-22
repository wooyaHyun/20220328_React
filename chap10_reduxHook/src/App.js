import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/Counter'
import TodoTemplate from './components/TodoTemplate'

// npm i redux react-redux redux-actions redux-devtools-extension
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import modules from './modules/'     // import 할 파일이름이 index라면 생략 가능

const store = createStore(modules, composeWithDevTools());

function App() {
  return (
    <div className="card-body">
      <Provider store={store}>
        <TodoTemplate />
        <br />

        <Counter />
      </Provider>
            
    </div>
  );
}

export default App;
