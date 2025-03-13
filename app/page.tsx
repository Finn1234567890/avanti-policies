import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 break-words hyphens-auto">
        Datenschutz&shy;erklärung
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">Letzte Aktualisierung: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Übersicht</h2>
        <p>Avanti ist eine soziale Networking-App für Studierende der Universität Hamburg. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Erhobene Daten</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Von Ihnen bereitgestellte Daten</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>Studiengang</li>
          <li>Profilbilder</li>
          <li>Biografie</li>
          <li>Interessen</li>
          <li>Präferenzen für Verbindungen</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Automatisch erhobene Daten</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Geräteinformationen</li>
          <li>IP-Adresse</li>
          <li>App-Nutzungsstatistiken</li>
          <li>Authentifizierungsdaten</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Verwendung Ihrer Daten</h2>
        <p>Wir verwenden Ihre Daten für:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Erstellung und Verwaltung Ihres Profils</li>
          <li>Verbindung mit anderen Studierenden</li>
          <li>Authentifizierung (inkl. "Sign in with Apple")</li>
          <li>Verbesserung der App-Funktionalität</li>
          <li>Sicherheit und Betrugsprävention</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Datenspeicherung</h2>
        <p>Ihre Daten werden sicher auf Servern von Supabase gespeichert und nach den DSGVO-Richtlinien verarbeitet.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Datenweitergabe</h2>
        <p>Wir teilen Ihre Daten nur:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Mit anderen Nutzern gemäß Ihren Profileinstellungen</li>
          <li>Mit Dienstleistern (Supabase, Apple)</li>
          <li>Wenn gesetzlich erforderlich</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Ihre Rechte</h2>
        <p>Sie haben das Recht:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Auf Auskunft über Ihre Daten</li>
          <li>Auf Berichtigung unrichtiger Daten</li>
          <li>Auf Löschung Ihrer Daten</li>
          <li>Auf Datenübertragbarkeit</li>
          <li>Ihre Einwilligung zu widerrufen</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Datensicherheit</h2>
        <p>Wir schützen Ihre Daten durch:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Verschlüsselung</li>
          <li>Sichere Authentifizierung</li>
          <li>Regelmäßige Sicherheitsupdates</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Kontakt</h2>
        <p>Bei Fragen zum Datenschutz: avanti.contact.sup@gmail.com</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Änderungen</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren. Die aktuelle Version finden Sie stets in der App.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">10. Besondere Hinweise für Apple-Nutzer</h2>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">10.1 "Sign in with Apple"</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Sie können sich mit Apple ID anmelden</li>
          <li>Sie können wählen, ob Ihre E-Mail-Adresse geteilt wird</li>
          <li>Ihre Apple ID wird sicher verarbeitet</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">10.2 App Tracking Transparency</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Wir verfolgen keine Nutzeraktivitäten über andere Apps/Websites</li>
          <li>Keine Weitergabe von Identifikatoren an Dritte</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">11. Löschung des Kontos</h2>
        <p>Sie können Ihr Konto und alle zugehörigen Daten jederzeit in den App-Einstellungen löschen.</p>
      </div>
    </div>
  );
}
