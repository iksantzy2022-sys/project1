import './App.css';
import Labelnama from './componenst/labelnama';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      
        <Labelnama nama="Hilman Maulana"   />
        <Labelnama nama="Andika Saputra"   />
        <Labelnama nama="Nabil abbiyu"   />

      <p>Alamat : Kebon Jeruk</p>
    </div>
  );
}

export default App;