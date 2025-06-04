import { useState } from 'react';

type LoginFormProps = {
  onLogin: (user: { email: string; password: string }) => void;
  onSwitchView: () => void;
};

const LoginForm = ({ onLogin, onSwitchView }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h1>Iniciar Sesión</h1>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <button type="submit">Login</button>
      
      <p>
        ¿No tienes cuenta?{' '}
        <button type="button" onClick={onSwitchView} className="switch-button">
          Regístrate
        </button>
      </p>
    </form>
  );
};

export default LoginForm;