import './App.css';
import Header from './components/Header';
import data from './components/data'
import Entry from './components/Entry';

function App() {

  const info = data.map((items) => {
    return (
      <Entry 
        item = {items}
      />
    )
  })

  return (
    <div className='page-wrapper'>
      <Header />
            <main>
                {info}
            </main>
        </div>
  );
}

export default App;
