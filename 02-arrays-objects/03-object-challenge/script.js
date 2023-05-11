const library = [
    {
        title: "Catcher in the Rye",
        author: "JD Salmon",
        status: 
            {
                own: true,
                reading: true,
                read: false,
            }
    },
    {
        title: "the stainless steel rat goes to hell",
        author: "Susan Nabisco",
        status: 
            {
                own: true,
                reading: false,
                read: false,
            }
    },
    {
        title: "Around the world in eighty days",
        author: "Jules Verne",
        status: 
            {
                own: true,
                reading: true,
                read: false,
            }
    },
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Destructure the title of the first book and rename the variable to firstBook
const {title: firstBook} = library[0];
console.log(firstBook);

const str = JSON.stringify(library);