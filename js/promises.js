const wait = (delay) => {
    return new Promise((res, ref) => {
        setTimeout(() => {
            res();
        }, delay);
    });
}

wait(1000).then(() => {
    console.log('You\'ll see this after 1 second');
});

wait(3000).then(() => {
    console.log('You\'ll see this after 3 second');
});


const token = '838719f7e0c1d2615cd694602b4c8427f2c931ff';
const githubApiBaseUrl = 'https://api.github.com';
const options = {
    headers: {
        'Authorization': 'token ' + token
    }
}

const getMostRecentCommit = (username) => {
    const userEventsEndpoint = `/users/${username}/events/public`;
    return fetch(githubApiBaseUrl + userEventsEndpoint, options);
}

getMostRecentCommit('julian-lundquist')
    .then((data) => {
    console.log(data.json());
});