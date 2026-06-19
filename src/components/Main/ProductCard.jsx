// Componente card singolo prodotto
function ProductCard({ prodotto }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={prodotto.immagine}
          className="card-img-top"
          alt={prodotto.nome}
        />
        <div className="card-body">
          <h5 className="card-title">{prodotto.nome}</h5>
          <p className="card-text">{prodotto.descrizione}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <span className="fw-bold">€ {prodotto.prezzo}</span>
          <button className="btn btn-primary">Aggiungi al carrello</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard