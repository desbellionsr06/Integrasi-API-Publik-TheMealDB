// src/App.jsx
import MealDashboard from "./components/meals/MealDashboard";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0f172a', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', margin: 0, padding: 0 }}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>🍳 Dashboard Kuliner Resep</h1>
          <p style={styles.subtitle}>Tugas Mandiri (PjBL) - Integrasi API Publik TheMealDB</p>
        </div>
      </header>
      <main style={styles.mainContent}>
        {/* Render Dashboard Tugas Mandiri */}
        <MealDashboard />
      </main>
    </div>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 60%, #3b82f6 100%)',
    color: 'white',
    padding: '3rem 0',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(26, 64, 127, 0.3)',
    width: '100%',
    boxSizing: 'border-box'
  },
  headerContent: {
    width: '100%',
    margin: '0 auto',
  },
  title: {
    margin: 0,
    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    color: '#ffffff',
  },
  subtitle: {
    margin: '0.75rem 0 0 0',
    fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
    color: '#bfdbfe',
    fontWeight: '400',
  },
  mainContent: {
    flex: 1,
    width: '100%',
    padding: '0',
    boxSizing: 'border-box',
    margin: '0',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default App;