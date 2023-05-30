/* Asynch JS + Related topics */


/* ---------------------------------------------------------------------------------------setTimeout and clearTimeout */
// needed this to ensure 'button' code wasn't running before button was loaded in document
window.onload=function(){

    // will happen secondd even with a wait time of zero seconds because it's put onto the task queue and waits for the call stack to clear before it's run
    setTimeout(() => {console.log("Hellow from callback")}, 2000);
    // will run first
    console.log("Hello from global scope");

    function changeText() {
        document.querySelector('h1').textContent = 'Hello from callback in a function';

    }

    console.log("Hello from global scope 2");

    const timerId = setTimeout(changeText, 3000);

    document.querySelector('button').addEventListener('click', () => {
        console.log(timerId);
        clearTimeout(timerId); 
        console.log('Timer cancelled');
    });

/* -----------------------------------------------------------------------------------setInterval and clearInterval */
// setInterval repeatedly calls code at set interval
    let intervalId;

    function startColor(){
        if (!intervalId){
            intervalId = setInterval(changeColor, 1000);
        }
    }

    function changeColor(){
        if (document.body.style.backgroundColor !== 'black'){
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }

    function stopColor() {
        clearInterval(intervalId);
    }

    document.querySelector('#start-color').addEventListener('click', startColor);
    document.querySelector('#stop-color').addEventListener('click', stopColor);

/*--------------------------------------------------------------------------------------callbacks 1 */
/* Def: A callback is literally just a function that's passed as an argument to another function */

    //THIS IS THE CALLBACK
    function toggle(e){
        e.target.classList.toggle('danger');
    }

    //THIS IS THE HIGHER-ORDER FUNCTION (specifically it's addEventListener)
    document.querySelector('#callback-button').addEventListener('click', toggle)

/*--------------------------------------------------------------------------------------callbacks 2 */
    const posts = [
        {title: 'Post One', body: 'This is post one.'},
        {title: 'Post Two', body: 'This is post two.'},
    ]

    //THIS IS THE CALLBACK
    function getPosts(){
    // After one second, we create a div, change its inner text to be post content, and add it to the div (once for each element in "posts")
        setTimeout(function() {
            posts.forEach(function (post) {
                const div = document.createElement('div');
                div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
                document.querySelector('#posts').appendChild(div);
            } )
        }, 1000)
    }
       
    //THIS IS THE HIGHER-ORDER FUNCTION
    function createPosts(post, cb){ 
        setTimeout(function () {
            posts.push(post);
            // calling the callback
            cb();
        }, 2000)
    }


    // We call create posts, which at two elapsed seconds ads the new post, then at three elapsed seconds does the div creation to show the posts on the page
    createPosts({title: 'Post Three', body: 'This is post three.'}, getPosts);
}

