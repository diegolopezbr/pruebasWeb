import { useState } from 'react'

export default function App() {
  const [clicks, setClicks] = useState(0)

  return (
    <main className="app">
      <h1>¡Mi app está en línea!</h1>
      <p>Esta misma app se despliega en Docker, Dokploy, Heroku y Vercel.</p>

      <ul>
        <li>Servida desde: <strong>{window.location.host}</strong></li>
        <li>Modo: <strong>{import.meta.env.MODE}</strong></li>
        <li>Build: <strong>{__BUILD_TIME__}</strong></li>
      </ul>

      <button onClick={() => setClicks(clicks + 1)}>
        Clicks: {clicks}
      </button>
    </main>
  )
}
