// src/components/AddUserForm.jsx
import { useState } from 'react';
import axios from 'axios';

export default function AddUserForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Mengirimkan data dummy POST ke JSONPlaceholder
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }
      );

      setMessage({ type: 'success', text: 'Data berhasil ditambahkan (Simulasi POST)!' });
      setFormData({ name: '', email: '', phone: '' });

      // Memanggil fungsi refresh otomatis pada komponen tabel utama
      if (onSuccess) onSuccess();

    } catch (error) {
      setMessage({ type: 'error', text: 'Gagal mengirimkan data ke backend!' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>➕ Tambah Pengguna Baru</h3>

      {message && (
        <div style={message.type === 'success' ? styles.success : styles.error}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Alamat Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Nomor Telepon"
          value={formData.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          style={styles.button}
        >
          {isSubmitting ? 'Mengirim data...' : 'Simpan ke Server'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    border: '1px solid #e9ecef',
    maxWidth: '1140px',
    margin: '0 auto 2rem auto',
    boxSizing: 'border-box'
  },
  title: {
    marginTop: 0,
    color: '#2c3e50',
    fontFamily: 'sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '12px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '15px',
    boxSizing: 'border-box',
    width: '100%'
  },
  button: {
    padding: '12px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '1rem',
    fontFamily: 'sans-serif'
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '1rem',
    fontFamily: 'sans-serif'
  },
};