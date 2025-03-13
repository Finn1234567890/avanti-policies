export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie-Richtlinie</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">Letzte Aktualisierung: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Verwendung von Cookies</h2>
        <p>Avanti verwendet notwendige Cookies und ähnliche Technologien für:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Authentifizierung (Sign in with Apple, Email)</li>
          <li>Sitzungsverwaltung</li>
          <li>App-Funktionalität</li>
          <li>Sicherheit</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Arten von Cookies</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Notwendige Cookies</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Authentifizierungs-Token</li>
          <li>Sitzungs-IDs</li>
          <li>Sicherheits-Tokens</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Funktionale Cookies</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Nutzereinstellungen</li>
          <li>Spracheinstellungen</li>
          <li>Login-Status</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Keine Werbe-Cookies</h2>
        <p>Wir verwenden keine Cookies für:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Werbung</li>
          <li>Tracking über andere Apps/Websites</li>
          <li>Marketing-Zwecke</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Datenspeicherung</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Cookies werden lokal auf Ihrem Gerät gespeichert</li>
          <li>Authentifizierungsdaten werden sicher bei Supabase gespeichert</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Ihre Kontrolle</h2>
        <p>Sie können:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Ihre Daten in den App-Einstellungen verwalten</li>
          <li>Ihr Konto jederzeit löschen</li>
        </ul>
      </div>
    </div>
  );
} 