import { useState } from "react";
import Home from "./pages/Home";
import ReservarMesa from "./pages/ReservarMesa";
import MesasDisponiveis from "./pages/MesasDisponiveis";

function App() {
  const [page, setPage] = useState("home"); // home | reserva | mesas

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-red-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">🍣 Hitori Sushi</h1>
        <nav className="flex gap-2">
          <button
            onClick={() => setPage("home")}
            className={`px-3 py-2 rounded-lg ${
              page === "home" ? "bg-white text-red-600" : "bg-red-500"
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setPage("reserva")}
            className={`px-3 py-2 rounded-lg ${
              page === "reserva" ? "bg-white text-red-600" : "bg-red-500"
            }`}
          >
            Reservar Mesa
          </button>
          <button
            onClick={() => setPage("mesas")}
            className={`px-3 py-2 rounded-lg ${
              page === "mesas" ? "bg-white text-red-600" : "bg-red-500"
            }`}
          >
            Mesas Disponíveis
          </button>
        </nav>
      </header>

      <main className="p-6">
        {page === "home" && <Home onStart={() => setPage("reserva")} />}
        {page === "reserva" && <ReservarMesa />}
        {page === "mesas" && <MesasDisponiveis />}
      </main>
    </div>
  );
}

export default App;
