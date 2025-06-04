import { useState } from 'react';

type RegisterFormProps = {
  onRegister: (user: { email: string; password: string }) => void;
  onSwitchView: () => void;
};

const RegisterForm = ({ onRegister, onSwitchView }: RegisterFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h1>Registrar Usuario</h1>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="user@example.com"
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
      
      <button type="submit">Registrar</button>
      
      <p>
        ¿Ya tienes cuenta?{' '}
        <button type="button" onClick={onSwitchView} className="switch-button">
          Inicia sesión
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;