function checkStatus(promise) {
    promise.then(message => {
        console.log(message);
        console.log("Checking status over");
    })
        .catch(error => {
            console.log(error);
            console.log("Checking status over");
        });
}

checkStatus(promiseMe(" fly to the moon "));