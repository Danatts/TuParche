import MainRouter from './config/routes';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}

export default App;
