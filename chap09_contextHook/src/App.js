import 'bootstrap/dist/css/bootstrap.css';

import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColor'
import TodoTemplate from './components/TodoTemplate'

import ColorBoxContext from './modules/ColorBoxContext'
import { SelectColorContextProvider } from './modules/SelectColorContext'
import { TodoListProvider } from './modules/TodoListContext'

function App() {

  const value = {color:'orange', moduleName: 'ColorBox'};
  
  return (
    <div className="card-body">
        <h1>Chap10 Context</h1>
        
        <ColorBoxContext.Provider value={value}>
          <SelectColorContextProvider>
            <ColorBox />
            <SelectColor />
          </SelectColorContextProvider>
        </ColorBoxContext.Provider>

        <hr />
        <TodoListProvider>
          <TodoTemplate />
        </TodoListProvider>
        </div>
  );
}

export default App;
