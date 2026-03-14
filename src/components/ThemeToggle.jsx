import './ThemeToggle.css'

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => onToggle(!isDark)}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="toggle-icon">{isDark ? '☀️' : '🌙'}</span>
      <span className="toggle-text">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
