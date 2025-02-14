


const scriptsInEvents = {

	async EventSheet1_Event1_Act6(runtime, localVars)
	{
function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const apiKey = "R5kGTHVwno2BMpwt"; // Replace with your actual API key
const apiUrl = "https://api.tarkov-market.app/api/v1/item?q=btc";

fetch(apiUrl, {
    headers: { "x-api-key": apiKey }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    if (data.length > 0) {
        let rawPrice = data[0].traderPriceRub || 0;
        let formattedPrice = formatNumberWithSpaces(rawPrice); // Format price with spaces

        runtime.globalVars.btcPriceRub = formattedPrice; // Store formatted price in Construct 3

        console.log("Updated BTC Price:", formattedPrice);

        // Force Construct 3 to recognize the change
        runtime.callFunction("OnBitcoinPriceUpdated");
    } else {
        console.error("BTC item not found in API response.");
    }
})
.catch(error => console.error("Error fetching Bitcoin price:", error));
	},

	async EventSheet1_Event1_Act7(runtime, localVars)
	{
const style = document.createElement("style");
style.innerHTML = `
    .text {
        font-family: "Times New Roman", Times, serif;
        font-size: 30px;
        text-decoration: none;
        color: #007bff; /* Blue link color */
    }
    .text:hover {
        text-decoration: underline;
    }

    .textinput {
        font-family: "Times New Roman", Times, serif;
        font-size: 30px;
        text-decoration: none;
    }

    }

`;
document.head.appendChild(style);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

