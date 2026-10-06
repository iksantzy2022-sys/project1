import './App.css';
import Labelnama from './componenst/labelnama';
import Labelalamat from './componenst/labelalamat';

function App() {
  return (
    <div>
      <h1>Profile</h1>
      <Labelnama nama="Rizky" />
      <Labelalamat alamat="Jl. Raya No. 123" />

    </div>
  );
}

export default App;