const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

var languages = [];
let sort = users.filter((user) => user.languages.length >= 3);
languages = sort;

var email = [];
let mapEmail = users.map((user) => user.email);
email = mapEmail;

var yearsAvg;
let yearsExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
yearsAvg = yearsExperience / users.length;

var longestEmail;
let emailSearch = users.reduce((longEmail, user) => {
    if (user.email.length > longEmail.length) {
        return user.email;
    } else  {
        return longEmail;
    }
}, "");
longestEmail = emailSearch;

var instructorNames = 'Your instructors are: ';
let instructorSearch = users.reduce((stringName, user) => stringName + (user.name + ", "), '');
instructorNames += instructorSearch.slice(0, -2);
instructorNames += '.';

var differentLanguages = '';
let languageSearch = users.reduce((langName, user) => {
    for (let lang of user.languages) {
        if (!langName.includes(lang)) {
            langName.push(lang);
        }
    }
    return langName;
}, []);






