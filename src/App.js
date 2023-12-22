import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import './styles/styles.css';
import Header from './components/Header';
import Main from './components/Main';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Portfolio de Martín "canillas" Osan</title>
      </Helmet>
      <Header />  
      <Main />
      <Grid />   
    </div>
  );
}

export default App;
