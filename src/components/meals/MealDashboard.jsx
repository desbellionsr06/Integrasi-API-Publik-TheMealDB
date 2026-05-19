// src/components/meals/MealDashboard.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import MealCard from './MealCard';

export default function MealDashboard() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('chicken'); // Default pencarian awal
  const [selectedCategory, setSelectedCategory] = useState('');

  // Endpoint 1: Mengambil Kategori Makanan untuk Dropdown Filter
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(res.data.categories || []);
      } catch (err) {
        console.error("Gagal mengambil kategori", err);
      }
    };
    fetchCategories();
  }, []);

  // Endpoint 2: Mengambil Makanan Berdasarkan Input Pencarian ATAU Filter Kategori
  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
        
        if (selectedCategory) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
        }

        const response = await axios.get(url);
        setMeals(response.data.meals || []);
      } catch (err) {
        setError('Gagal memuat resep makanan. Periksa koneksi internet Anda.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [searchQuery, selectedCategory]);

  return (
    <div style={styles.dashboardContainer}>
      {/* Fitur Pencarian & Filter */}
      <div style={styles.controlsSection}>
        <div style={styles.controls}>
          <input
            type="text"
            placeholder="🔍 Cari makanan (contoh: daging, kue, pasta)..."
            value={searchQuery}
            onChange={(e) => {
              setSelectedCategory(''); // Reset kategori jika mengetik pencarian baru
              setSearchQuery(e.target.value);
            }}
            style={styles.searchInput}
          />

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSearchQuery(''); // Reset pencarian jika memilih kategori dropdown
              setSelectedCategory(e.target.value);
            }}
            style={styles.selectInput}
          >
            <option value="">📂 Semua Kategori</option>
            {categories.map((cat) => (
              <option key={cat.idCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Conditional Rendering State */}
      {loading && <div style={styles.centerText}>⏳ Sedang memuat resep kuliner...</div>}
      
      {error && <div style={{...styles.centerText, color: '#dc2626'}}>{error}</div>}
      
      {!loading && !error && meals.length === 0 && (
        <div style={styles.centerText}>❌ Resep tidak ditemukan. Coba kata kunci lain!</div>
      )}

      {/* Grid Layout Responsif Otomatis */}
      {!loading && !error && (
        <div style={styles.grid}>
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
    height: '100%',
    padding: '2.5rem 2rem',
    boxSizing: 'border-box',
    backgroundColor: '#0f172a',
  },
  controlsSection: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
  },
  controls: {
    display: 'flex',
    gap: '1rem',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'nowrap',
  },
  searchInput: {
    flex: '1 1 auto',
    minWidth: '200px',
    padding: '15px 20px',
    fontSize: '15px',
    borderRadius: '12px',
    border: '2px solid #334155',
    boxSizing: 'border-box',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    transition: 'all 0.3s ease',
    outline: 'none',
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    minHeight: '50px',
  },
  selectInput: {
    flex: '0 1 auto',
    minWidth: '180px',
    padding: '15px 20px',
    fontSize: '15px',
    borderRadius: '12px',
    border: '2px solid #334155',
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    boxSizing: 'border-box',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    transition: 'all 0.3s ease',
    outline: 'none',
    minHeight: '50px',
    cursor: 'pointer',
  },
  centerText: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '500',
    padding: '4rem 2rem',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#94a3b8',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
    width: '100%',
    flexGrow: 1,
  }
};