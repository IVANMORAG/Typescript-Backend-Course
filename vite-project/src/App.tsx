import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

type User = {
  email: string;
  password: string;
};

const App = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleRegister = (user: User) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u: User) => u.email === user.email);
    
    if (userExists) {
      alert('El usuario ya existe');
      return;
    }
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso!');
    setIsLoginView(true);
  };

  const handleLogin = (user: User) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      (u: User) => u.email === user.email && u.password === user.password
    );
    
    if (foundUser) {
      alert('Login exitoso!');
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="auth-container">
      {isLoginView ? (
        <LoginForm 
          onLogin={handleLogin} 
          onSwitchView={() => setIsLoginView(false)} 
        />
      ) : (
        <RegisterForm 
          onRegister={handleRegister} 
          onSwitchView={() => setIsLoginView(true)} 
        />
      )}
    </div>
  );
};

export default App;