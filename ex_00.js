function asyncFunc() {
    return new Promise((resolve, reject) => {
        resolve("Hello World!");
    });
}


asyncFunc()
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });