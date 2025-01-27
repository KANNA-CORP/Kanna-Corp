document.getElementById('connectWallet').addEventListener('click', connectWallet);

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            alert(`Connected: ${accounts[0]}`);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("Install MetaMask!");
    }
}
