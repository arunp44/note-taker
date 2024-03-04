const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');
const { patch } = require('../routes');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
// Promise version of fs.writeFile
const writeFromFile = util.promisify(fs.writeFile);
const destination = "db/db.json"

class Store {
  read(){
    return readFromFile(destination, "utf8");
  }
  write(note) {
    return writeFromFile(destination, JSON.stringify(note));
  }
  getNotes () {
    return this.read().then((note)=>{
      let parsednote;
      try{parsednote= [].concat(JSON.parse(note))
  } catch (error) {
    parsednote = []
  }
            return parsednote
    });
  }
  
  postNote(note) {
    const {title, text} = note
    console.log(title, text)

    const usernote = {title,text,id: uuidv4()}
    return this.getNotes()
    .then((data) => [...data, usernote])
    .then((allnotes)=>this.write(allnotes))
  }

  delete(id) {
    return this.getNotes()
    .then((notes) => notes.filter((note)=>note.id !== id))
    .then((data)=> this.write(data))
  }


}

module.exports = new Store();

