import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/Counter'
import ContactApp from './components/ContactApp'

function App() {
  return (
    <div className="card-body">
        <h1>Chap12 Redux Thunk</h1>

        <ContactApp />

        <hr />

        <Counter />
    </div>
  );
}

export default App;
