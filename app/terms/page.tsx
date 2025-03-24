export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 break-words hyphens-auto">
        Nutzungs&shy;bedingungen
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">Letzte Aktualisierung: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Allgemeines</h2>
        <p>Avanti ist eine soziale Networking-App exklusiv für Studierende der Universität Hamburg (UHH). Mit der Nutzung von Avanti akzeptieren Sie diese Nutzungsbedingungen.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Nutzungsberechtigung</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Voraussetzungen</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Sie müssen eingeschriebene(r) Student(in) der UHH sein</li>
          <li>Sie müssen mindestens 17 Jahre alt sein</li>
          <li>Sie benötigen ein gültiges Profil mit:
            <ul className="list-disc pl-5 mt-2">
              <li>Ihrem echten Namen</li>
              <li>Studiengang</li>
              <li>Mindestens zwei Profilbildern</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Zustimmung zu den Nutzungsbedingungen</h3>
        <p>Durch die Nutzung der Avanti-App stimmen Sie diesen Nutzungsbedingungen zu. Sie erklären sich damit einverstanden, dass es keine Toleranz für anstößige Inhalte oder missbräuchliches Verhalten gibt.</p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.3 Unzulässige Nutzung</h3>
        <p>Sie dürfen nicht:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Falsche Identitäten verwenden</li>
          <li>Mehrere Accounts erstellen</li>
          <li>Die App für kommerzielle Zwecke nutzen</li>
          <li>Spam oder unerwünschte Nachrichten versenden</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Profilrichtlinien</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Profilbilder</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Müssen Sie selbst zeigen</li>
          <li>Dürfen keine anstößigen Inhalte enthalten</li>
          <li>Dürfen keine Urheberrechte verletzen</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Profilinformationen</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Müssen wahrheitsgemäß sein</li>
          <li>Dürfen keine beleidigenden Inhalte enthalten</li>
          <li>Dürfen keine persönlichen Kontaktdaten enthalten</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Verhaltenskodex</h2>
        <p>Sie verpflichten sich:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Respektvoll mit anderen Nutzern umzugehen</li>
          <li>Keine belästigenden oder diskriminierenden Inhalte zu teilen</li>
          <li>Keine illegalen Aktivitäten zu fördern</li>
          <li>Die Privatsphäre anderer Nutzer zu respektieren</li>
          <li>Es gibt keine Toleranz für anstößige Inhalte oder missbräuchliches Verhalten</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Sicherheit</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">5.1 Accountsicherheit</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Schützen Sie Ihre Zugangsdaten</li>
          <li>Melden Sie verdächtige Aktivitäten</li>
          <li>Nutzen Sie sichere Authentifizierungsmethoden</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">5.2 Verbotene Aktivitäten</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Hacking oder Manipulation der App</li>
          <li>Verbreitung von Malware</li>
          <li>Sammeln von Nutzerdaten</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Beendigung</h2>
        <p>Wir können Ihr Konto sperren oder löschen bei:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Verstoß gegen diese Bedingungen</li>
          <li>Falsche Angaben</li>
          <li>Schädliches Verhalten</li>
          <li>Inaktivität</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Haftungsausschluss</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Die App wird "wie besehen" zur Verfügung gestellt</li>
          <li>Wir garantieren keine unterbrechungsfreie Verfügbarkeit</li>
          <li>Wir haften nicht für Nutzerinteraktionen</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Änderungen</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Wir können diese Bedingungen jederzeit ändern</li>
          <li>Änderungen werden in der App bekannt gegeben</li>
          <li>Die weitere Nutzung gilt als Zustimmung</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Kontakt</h2>
        <p>Bei Fragen oder Problemen: avanti.contact.sup@gmail.com</p>
      </div>
    </div>
  );
} 