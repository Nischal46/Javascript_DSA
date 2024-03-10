const input = require('readline-sync');

async function FetchingData() {
    const fetchdata = await fetch('https://fakestoreapi.com/products');
    const data = await fetchdata.json();
    return data;
}

async function main() {
    const response = await FetchingData();
    console.log('The fetching of data from fakestore api is ', response);

    let start = true;

    while (start) {
        const option = +input.question("Enter choice: ");

        switch (option) {
            case 1:
                // Filter the data according to object
                const filter = response.filter(cl => cl.category === "electronics");
                console.log('electronics filter data: ', filter);
                break;

            // case 2:
            // Filter the data according to price

            // case 3:
            // Filter the data according to rate

            default:
                console.log("Invalid input");
                break;
        }
    }
}

main().catch(error => console.error(error));
