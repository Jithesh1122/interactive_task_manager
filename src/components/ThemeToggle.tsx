type ThemeToggleProps = {
  theme: 'light' | 'dark'
  onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button className="button button--outline" onClick={onToggle} type="button">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default ThemeToggle
