// src/components/meals/MealCard.jsx
export default function MealCard({ meal }) {
  return (
    <div style={styles.card} onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    }}>
      <div style={styles.imageContainer}>
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          style={styles.image} 
        />
        <span style={styles.badge}>{meal.strCategory || "Recipe"}</span>
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{meal.strMeal}</h3>
        <p style={styles.origin}>📍 {meal.strArea || "International"}</p>
        <a 
          href={meal.strYoutube || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          style={meal.strYoutube ? styles.button : styles.buttonDisabled}
          onMouseEnter={(e) => {
            if (meal.strYoutube) {
              e.currentTarget.style.backgroundColor = '#c92a2a';
              e.currentTarget.style.transform = 'scale(1.02)';
            }
          }}
          onMouseLeave={(e) => {
            if (meal.strYoutube) {
              e.currentTarget.style.backgroundColor = '#e74c3c';
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
        >
          {meal.strYoutube ? "📺 Tonton Tutorial" : "Tidak Ada Video"}
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #334155',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '240px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  content: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  badge: {
    position: 'absolute',
    top: '14px',
    left: '14px',
    backgroundColor: 'rgba(59, 130, 246, 0.95)',
    color: '#fff',
    padding: '7px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '700',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    letterSpacing: '0.3px',
    backdropFilter: 'blur(10px)',
  },
  title: {
    margin: '0 0 0.75rem 0',
    fontSize: '19px',
    color: '#f1f5f9',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: '700',
    lineHeight: '1.35',
  },
  origin: {
    margin: '0 0 1.25rem 0',
    fontSize: '15px',
    color: '#cbd5e1',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: '500',
  },
  button: {
    marginTop: 'auto',
    textAlign: 'center',
    padding: '13px 18px',
    backgroundColor: '#3b82f6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '0.3px',
  },
  buttonDisabled: {
    marginTop: 'auto',
    textAlign: 'center',
    padding: '13px 18px',
    backgroundColor: '#475569',
    color: '#94a3b8',
    textDecoration: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    pointerEvents: 'none',
    border: 'none',
    letterSpacing: '0.3px',
  }
};