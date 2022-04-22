
import 'bootstrap/dist/css/bootstrap.min.css';
import A01Style from './components/A01Style'
import A02StyleModule from './components/A02StyleModule'
import A03Classnames from './components/A03Classnames'
import A04StyledComponent from './components/A04StyledComponent'

function App() {
  return (
    <div className="card-body">
      <h1>Chap05 Style</h1>

      <A04StyledComponent /><br />

      <A03Classnames /><br />

      <A02StyleModule /><br />

      <A01Style />

    </div>
  );
}

export default App;
