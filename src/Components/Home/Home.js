import './Home.css';

function Home () {
    return (
        <div className="Home">
        <h1 className='title'>Bienvenue sur  DofusKamous ! </h1>
        <h2 className='title-buy'>Achat de Kamas :  </h2>
        <p className='description'>En suivant ce <a href="/achat">lien</a> , Vous allez pouvoir acheter des kamous au meilleur prix ! Livraison instantanée !</p>
        <h2 className='description-vente'>Vente de kamas :</h2>   
        <p className='description'>En suivant ce <a href="/vente">lien</a> , Vous allez pouvoir vendre des kamous au meilleur prix !</p>

        
        </div>
        )
}



export default Home;