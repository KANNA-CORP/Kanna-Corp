// Connexion Wallet
document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(ethereum);
            const accounts = await web3.eth.getAccounts();
            alert(`Connecté : ${accounts[0]}`);
            fetchTokenBalance(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("Veuillez installer MetaMask!");
    }
});

// Récupérer le prix depuis CoinGecko
async function fetchTokenPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=kanna-token&vs_currencies=eur');
        const data = await response.json();
        document.getElementById('tokenPrice').textContent = 
            `Prix : €${data['kanna-token'].eur}`;
    } catch (error) {
        console.error("Erreur prix :", error);
    }
}

// Initialisation
window.addEventListener('load', () => {
    fetchTokenPrice();
});
