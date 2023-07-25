import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

function App() {
  return (
    <div className="App">
      <Header />
      <Search handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;