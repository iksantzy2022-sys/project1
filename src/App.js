import './App.css';
import Labelnama from './componenst/labelnama';
import Labelalamat from './componenst/labelalamat';
import Button1 from './componenst/button1';

function App() {
  return (
    <div>
      <h1>Profile</h1>

        <Labelnama nama="Rizky" />

      <Labelalamat alamat="Jl. Raya No. 123" />

      <Button1 />
    </div>
  );
}

export default App;