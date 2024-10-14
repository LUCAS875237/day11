function promiseMe(message) {
    return new Promise((resolve, reject) => {
        if(typeof message !== 'string') {
            reject('Error: Argument is not a string');
        } else {
            resolve(`I promise you to${message}`);
        }
    });
}

promiseMe(" fly to the moon ").then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});