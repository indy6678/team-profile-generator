const fs = require('fs');

const writeFile = () => {
    fs.writeFile(".index.html", gensite(), err =>{
        if(err) throw err;
        return
    })
    console.log("HTML complete!")
}

module.exports = writeFile