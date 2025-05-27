export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col gap-12">
      <header className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <span className="font-bold text-xl text-blue-700 text-center md:text-left">
          AI Concierge for Turiscope
        </span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a
            href="#chat"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
          >
            Start Chat
          </a>
          <a
            href="/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition text-center"
          >
            Admin Panel
          </a>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-800">
          AI Concierge for Hotels & Restaurants
        </h1>
        <p className="text-lg md:text-2xl text-blue-900 mb-8 max-w-2xl">
          Instantly answer guest questions in your Turiscope app – automatically, 24/7, in multiple
          languages. Integrated with your knowledge base and API.
        </p>
        <a
          href="#chat"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Try the chatbot
        </a>
      </section>

      <section className="py-12 bg-white ">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Automated FAQ</h3>
            <p>Answers the most common guest questions without front desk involvement.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Multilingual</h3>
            <p>Supports English, Croatian, Polish, and more.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Turiscope Integration</h3>
            <p>Works seamlessly with your Turiscope app and API.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Example guest questions</h2>
          <ul className="space-y-2 text-blue-900">
            <li>• What are the breakfast hours?</li>
            <li>• Can I order a taxi?</li>
            <li>• What time is check-out?</li>
            <li>• What are the restaurant opening hours?</li>
          </ul>
        </div>
      </section>

      <footer className="py-6 text-center text-blue-700">
        &copy; {new Date().getFullYear()} AI Concierge for Turiscope
      </footer>
    </main>
  )
}
