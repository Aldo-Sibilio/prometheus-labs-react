import ProductCard from "./ProductCard"

// dati finti in attesa del backend
const ultimiArrivi = [
    { id: 1, nome: "Pozione Super Forza", prezzo: 29.99, descrizione: "Forza di 10 uomini per 24 ore", immagine: "https://placehold.co/300x200" },
    { id: 2, nome: "Siero Invisibilità", prezzo: 49.99, descrizione: "Diventa invisibile per 1 ora", immagine: "https://placehold.co/300x200" },
    { id: 3, nome: "Pillola Telepatia", prezzo: 39.99, descrizione: "Leggi la mente delle persone vicine", immagine: "https://placehold.co/300x200" },
]

const piuVenduti = [
    { id: 4, nome: "Elisir Velocità", prezzo: 34.99, descrizione: "Corri come un fulmine per 2 ore", immagine: "https://placehold.co/300x200" },
    { id: 5, nome: "Crema Volo", prezzo: 59.99, descrizione: "Vola fino a 100 metri di altezza", immagine: "https://placehold.co/300x200" },
    { id: 6, nome: "Gocce Preveggenza", prezzo: 44.99, descrizione: "Vedi il futuro per 30 minuti", immagine: "https://placehold.co/300x200" },
]

function ProductCollection() {
  return (
    <div className="container my-5">

      {/* Ultimi Arrivi */}
      <h2 className="mb-4">Ultimi Arrivi</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {ultimiArrivi.map(prodotto => (
          <ProductCard key={prodotto.id} prodotto={prodotto} />
        ))}
      </div>

      {/* Più Venduti */}
      <h2 className="mb-4">Più Venduti</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {piuVenduti.map(prodotto => (
          <ProductCard key={prodotto.id} prodotto={prodotto} />
        ))}
      </div>

    </div>
  )
}

export default ProductCollection