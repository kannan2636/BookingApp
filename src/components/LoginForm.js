import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let formValid = true;
    const newErrors = { email: '', password: '' };

      if (!formData.email) {
        formValid = false;
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formValid = false;
        newErrors.email = 'Invalid email address.';
      }

      if (!formData.password) {
        formValid = false;
        newErrors.password = 'Password is required.';
      } else if (formData.password.length < 6) {
        formValid = false;
        newErrors.password = 'Password must be at least 6 characters.';
      }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Login successful!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span>}
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
