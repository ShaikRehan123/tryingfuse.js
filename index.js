const fuseJS = require('fuse.js')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
const books = [
  {
    title: "Old Man's War",
    author: {
      firstName: 'John',
      lastName: 'Scalzi'
    }
  },
  {
    title: 'The Lock Artist',
    author: {
      firstName: 'Steve',
      lastName: 'Hamilton'
    }
  }
]

// 2. Set up the Fuse instance
const fuse = new fuseJS(books, {
  keys: ['title', 'author.firstName' , 'author.lastName']
  
})

// 3. Now search!
readline.question('Search: ', search => {
    const results =fuse.search(search);
    console.log(results)

    readline.close();
  });