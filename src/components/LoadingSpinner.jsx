// src/components/LoadingSpinner.jsx
export default function LoadingSpinner() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>⏳ Memuat data dari server...</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  text: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#3498db'
  }
};