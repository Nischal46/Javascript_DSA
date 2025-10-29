// Array related questions

//----------------------------------Question no 1-----------------------------------------------------

//we have an array of user objects where there is details like id, name, email and roles. Filter out the roles who have admin and sort them alphabetically by name

function Questionno1() {
    //reduce method

    let userdetails = [
        { id: 1, name: 'Ram', email: 'ram@gmail.com', role: 'admin' },
        { id: 2, name: 'Shyam', email: 'shyam@gmail.com', role: 'user' },
        { id: 3, name: 'Laxman', email: 'laxman@gmail.com', role: 'user' },
        { id: 4, name: 'Krishna', email: 'krishna@gmail.com', role: 'admin' },
        { id: 5, name: 'Bharat', email: 'bharat@gmail.com', role: 'user' },
        { id: 6, name: 'Avimanyu', email: 'avimanyu@gmail.com', role: 'admin' }
    ]

    console.time()

    userdetails = userdetails.reduce((acc, cv) => {
        if (cv.role === 'admin') {
            acc.push(cv)
        }

        return acc;
    }, []).sort((a, b) => a.name.localeCompare(b.name))

    console.timeEnd()

    console.log('filtering of user according to admin role by using reduce method: ', userdetails);


    //filter method

    let userdetails1 = [
        { id: 1, name: 'Ram', email: 'ram@gmail.com', role: 'admin' },
        { id: 2, name: 'Shyam', email: 'shyam@gmail.com', role: 'user' },
        { id: 3, name: 'Laxman', email: 'laxman@gmail.com', role: 'user' },
        { id: 4, name: 'Krishna', email: 'krishna@gmail.com', role: 'admin' },
        { id: 5, name: 'Bharat', email: 'bharat@gmail.com', role: 'user' },
        { id: 6, name: 'Avimanyu', email: 'avimanyu@gmail.com', role: 'admin' }
    ]

    console.time()

    userdetails1 = userdetails1.filter(cl => cl.role === 'user').sort((a, b) => a.name.localeCompare(b.name));

    console.timeEnd()

    console.log('filtering of user according to user role by using filter method: ', userdetails1);


    //for of loop

    let userdetails2 = [
        { id: 1, name: 'Ram', email: 'ram@gmail.com', role: 'admin' },
        { id: 2, name: 'Shyam', email: 'shyam@gmail.com', role: 'user' },
        { id: 3, name: 'Laxman', email: 'laxman@gmail.com', role: 'user' },
        { id: 4, name: 'Krishna', email: 'krishna@gmail.com', role: 'admin' },
        { id: 5, name: 'Bharat', email: 'bharat@gmail.com', role: 'user' },
        { id: 6, name: 'Avimanyu', email: 'avimanyu@gmail.com', role: 'admin' }
    ]

    let newuserdetailsarray = [];
    for (const el of userdetails2) {
        if (el.role === 'user') {
            newuserdetailsarray.push(el);
        }
    }

    console.log('filtering of the user by using for of loop: ', newuserdetailsarray);
}

//------------------------------------------------Question no 2---------------------------------------------

function Questionno2() {
    let productDetails = [

        { productId: 1234, productName: 'Dell Laptop', price: 72000, stockQuantity: 12 },

        { productId: 1232, productName: 'Asus Laptop', price: 78000, stockQuantity: 15 },

        { productId: 134, productName: 'Dell Monitor', price: 82000, stockQuantity: 10 },

        { productId: 1434, productName: 'Mechanical Keyboard', price: 32000, stockQuantity: 16 },

        { productId: 1134, productName: 'Home Theatre', price: 62000, stockQuantity: 8 },

        { productId: 1034, productName: 'Fantech Mouse', price: 12000, stockQuantity: 22 },

        { productId: 1884, productName: 'Go pro', price: 52000, stockQuantity: 7 },

        { productId: 1334, productName: 'Camera Stand', price: 22000, stockQuantity: 25 },

        { productId: 1934, productName: 'DSLR', price: 42000, stockQuantity: 18 },

    ]
    switch (2) {
        case 1:
            //finding the top 5 products.
            productDetails = productDetails.sort((a, b) => a.stockQuantity - (b.stockQuantity)).filter((cl, ind) => ind < 6);
            console.log('Top 5 selling products: ', productDetails);
            break;

        case 2:
            //discount price
            let discountedPrice = undefined;
            productDetails = productDetails.reduce((acc, cv) => {
                if (cv) {
                    discountedPrice = cv.price - (cv.price * 13) / 100;
                    cv.discountedPrice = discountedPrice;

                    acc.push(cv)
                }

                return acc

            }, []);
            console.log('All the discounted price after giving 13% in products: ');
            console.table(productDetails)

            break;

        default:
            console.log('Invalid options. Please use valid');
            break;

    }

}
//------------------------------------Question no 3 --------------------------------------

function Questionno3() {
    let orderDetails = [
        { id: 1, date: '2024-01-23', items: ['laptop', 'keyboard'], totalAmount: 100000 },
        { id: 2, date: '2024-01-28', items: ['aoc monitor', 'graphic cards'], totalAmount: 65000 },
        { id: 3, date: '2024-02-14', items: ['headset', 'mouse'], totalAmount: 5000 }
    ]

    orderDetails = orderDetails.reduce((acc, cv) => {
        const getMonths = cv.date.split('-')[1];
        if (getMonths === '01') {
            acc += cv.totalAmount;
        }
        return acc;
    }, 0)

    console.log('total amount generated in 1st months: ', orderDetails);
}

//---------------------------Question no 4 --------------------------------------------

function Questionno4() {
    let eventDetails = [
        { eventId: '123', eventName: 'Hiking', date: '2023-12-15', attendees: ['ram', 'shyam', 'hari'] },
        { eventId: '154', eventName: 'Cycling', date: '2023-12-30', attendees: ['shyam', 'ram', 'laxman', 'ravi'] },
        { eventId: '155', eventName: 'Treking', date: '2024-02-12', attendees: ['sundar', 'ashis', 'ram'] },
        { eventId: '199', eventName: 'Futsal', date: '2024-02-20', attendees: ['hari', 'ram', 'shyam', 'laxman'] },
        { eventId: '167', eventName: 'Riding', date: '2024-03-12', attendees: ['hari', 'ram', 'shyam', 'laxman', 'bimal', 'bibek'] },
        { eventId: '165', eventName: 'Chess', date: '2024-03-30', attendees: ['aman', 'raman', 'dipesh', 'dinesh', 'ramesh', 'hari', 'suresh'] },
    ]

    //find out the member participants according to the month

    eventDetails = eventDetails.reduce((acc, cv) => {
        let getMonth = cv.date.split('-')[1];


        if (!acc[getMonth]) {
            acc[getMonth] = []
            for (const data of cv.attendees) {
                if (!(acc[getMonth]).includes(data)) {

                    acc[getMonth].push(data)
                }
                else {

                    acc[getMonth].push(data)

                }
            }
        }
        else {
            for (const data of cv.attendees) {
                if (!(acc[getMonth]).includes(data)) {
                    acc[getMonth].push(data)
                }
            }
        }


        return acc;
    }, {})

    console.table(eventDetails);
}

//------------------------------Question no 5-----------------------------------------------------------

function Questionno5() {
    let articledetails = [
        { id: '123', title: 'The Power of Subconcious Mind', category: 'Non sci-fi', publishedDate: '2024-07-10' },
        { id: '124', title: 'Think and Grow Rich', category: 'Non sci-fi', publishedDate: '2024-07-12' },
        { id: '145', title: 'The Richest Man in Babyland', category: 'sci-fi', publishedDate: '2024-06-22' },
        { id: '189', title: 'Khusi', category: 'own', publishedDate: '2024-07-09' },
        { id: '139', title: 'Atomic Habit', category: 'own', publishedDate: '2024-07-7' }
    ];

    articledetails = articledetails.filter(cl => +(cl.publishedDate.split('-')[1]) === (new Date().getMonth()) && +(cl.publishedDate.split('-')[2]) > (new Date().getDate() - 7));

    console.log('Books that had been published in last week are: ', articledetails);

}

//------------------------------------Question no 6--------------------------------------------------

function Questionno6() {
    let socialMediaPosts = [
        { postid: '123', content: 'uploading pic', likes: 250, share: 4 },
        { postid: '124', content: 'new profile picture', likes: 350, share: 5 },
        { postid: '125', content: 'upload content 3', likes: 450, share: 6 },
        { postid: '126', content: 'upload content 4', likes: 130, share: 2 },
        { postid: '127', content: 'upload content 5', likes: 50, share: 1 },
    ]

    socialMediaPosts = socialMediaPosts.sort((a, b) => b.likes - a.likes).filter((cl, ind) => ind < 3);

    console.log('filtering data according to highest likes: ', socialMediaPosts);
}

//-------------------------------------------Question no 7--------------------------------------------------

function Questionno7() {
    let taskManagement = [
        { taskId: 123, description: 'XYZ Application', assignedTo: 'Nischal Baniya', priority: 'high priority', status: 'uncompleted' },
        { taskId: 125, description: 'ABC Application', assignedTo: 'Bibek Baniya', priority: 'high priority', status: 'completed' },
        { taskId: 113, description: 'PQR Application', assignedTo: 'Nischal Baniya', priority: 'in-progress', status: 'uncompleted' },
        { taskId: 123, description: 'CDE Application', assignedTo: 'Ram Dahal', priority: 'high-priority', status: 'completed' },
    ]

    taskManagement = taskManagement.filter((cl) => cl.assignedTo === 'Nischal Baniya' && cl.priority === 'high priority' || 'in-progress' && cl.status === 'uncompleted');

    console.log('Filtering according to priority and status: ', taskManagement);

}

//----------------------------------------------Question no 8--------------------------------------------------

function Questionno8() {
    let movieDetails = [
        { id: 123, title: 'Deadpool and Wolverine', genre: 'scifi', rating: 9, releaseYear: 2024 },
        { id: 178, title: 'Spiderman', genre: 'scifi', rating: 8, releaseYear: 2023 },
        { id: 156, title: 'Transformation', genre: 'scifi', rating: 7, releaseYear: 2022 },
        { id: 189, title: 'Openheimer', genre: 'documentary', rating: 9.5, releaseYear: 2023 },
        { id: 190, title: 'John Wick', genre: 'action', rating: 8.5, releaseYear: 2022 },
        { id: 134, title: 'Avengers', genre: 'scifi', rating: 9, releaseYear: 2023 }
    ];

    movieDetails = movieDetails.reduce((acc, cv) => {
        let genre = cv.genre;
        console.log(genre);

        if (!acc[genre]) {
            acc[genre] = []
            if (cv.rating >= 8) {
                acc[genre].push(cv)
            }
        }
        else {
            if (cv.rating >= 8) {
                acc[genre].push(cv)
            }
        }
        return acc;

    }, {})

    console.log('Movie detial filter according to genre: ');
    console.log(movieDetails)
}

//-----------------------------------------------------Question no 9---------------------------------------------------

function Questionno9() {
    let transactiondetails = [
        { transactionid: 123, amount: 25000, type: 'debit', date: '2024-06-30' },
        { transactionid: 456, amount: 15000, type: 'credit', date: '2024-07-12' },
        { transactionid: 567, amount: 34000, type: 'credit', date: '2024-07-14' },
        { transactionid: 653, amount: 56000, type: 'debit', date: '2024-07-03' },
        { transactionid: 904, amount: 54000, type: 'debit', date: '2024-07-06' },

        { transactionid: 890, amount: 120000, type: 'credit', date: '2024-07-10' }
    ];

    transactiondetails = transactiondetails.reduce((acc, cv) => {
        let getcurrentMonth = cv.date.split('-')[1];

        if (+getcurrentMonth === +(new Date().getMonth())) {
            if (!acc[cv.type]) {

                acc[cv.type] = [];

                acc[cv.type].push(cv.amount);


            }

            else {

                acc[cv.type].push(cv.amount)

            }
        }

        return acc;
    }, [])

    console.log('Transactions details: ', transactiondetails);
}

//-----------------------------------------------------------Question no 10-----------------------------------------------------

function Questionno10(){
    let shoppingcart = [
        { id: 123, productname: 'tshirt', quantity: 2, priceperunit: 2200 },
        { id: 234, productname: 'cap', quantity: 3, priceperunit: 1200 },
        { id: 543, productname: 'pants', quantity: 4, priceperunit: 2500 }
    ];
    
    shoppingcart = shoppingcart.reduce((acc, cv) => {
       if(cv){
        cv.discountprice = cv.quantity*cv.priceperunit - (cv.quantity*cv.priceperunit * 10 /100);
        cv.actualprice = cv.quantity * cv.priceperunit;
        cv.discount = '10%';
    
        acc.push(cv)
       }
       
       return acc;
       
    }, [])
    
    console.log('Shopping carts after having discount of 10% ');
    console.table(shoppingcart);
}






