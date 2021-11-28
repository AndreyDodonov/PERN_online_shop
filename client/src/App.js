import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = observer(() => {

  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(data);
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Spinner animation={"border"} />
  }

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <AppRouter />
      </Container>
    </BrowserRouter>
  )
});

export default App;

