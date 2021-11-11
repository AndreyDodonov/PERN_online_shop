import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/esm/Container';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = observer(() => {

  return (
    <BrowserRouter>
      <Container>
        <NavBar/>
        <AppRouter/>
      </Container>
    </BrowserRouter>
  )
});

export default App;

