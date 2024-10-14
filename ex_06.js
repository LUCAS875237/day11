function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${task} done`);
        }, timeRequired);
    });
}

function factory(tasks) {
    if (!tasks || tasks.length === 0) return;

    tasks.forEach(taskObj => {
        worker(taskObj.task, taskObj.timeRequired)
            .then(result => console.log(result));
    });
}

let tasks = [
    {
        'task': 'Teaching Astronomy',
        'timeRequired': 500,
    },
    {
        'task': 'Refill fuel',
        'timeRequired': 1500,
    },
    {
        'task': 'Repair module',
        'timeRequired': 1000,
    },
];

factory(tasks);
