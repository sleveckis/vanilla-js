// JSON
const post = {
    id: 1,
    title: 'Post One',
    body: "This is the body",
};

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str);

// Parse JSON into object literal again
const obj = JSON.parse(str);
console.log(obj);

// Stringify an array of objects
const post2 =[ 
    {
        id: 1,
        title: 'Post One',
        body: "This is the body",
    },
    {
        id: 2,
        title: 'Post Two',
        body: "This is the body for post two",
    },
];
const str2 = JSON.stringify(post2);
console.log(str2);
