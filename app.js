

const fs=require("fs");

const _ = require('lodash');

const yargs=require("yargs");
var title={
    describe:"to add anew note",
    demand:true,
    alias:"t"

}
const argv=yargs
.command("add","adding a new note",{
    title,
    body:{
        describe:"adding abody",
        demand:true,
        alias:"b"
    }
})
.command("list","showing all list")
.command("read","reading asingle note",{title})
.command("remove","removing a single note",{title})
.help()
.argv;

const notes=require("./notes.js")

// console.log("process",process.argv);
// console.log("yargs",yargs.argv);


var commond = argv._[0];
console.log("command :",commond);
if(commond=="add"){
    
    var note=notes.addNote(argv.title,argv.body);
    if (note==undefined){
        console.log("item does note added with title",argv.title);
    }else{
        notes.logNote(note);
    }
}else if (commond=="list"){
    
    var allnote=notes.getAll();
    console.log(`the length is ${allnote.length}`)
    allnote.forEach((note) => notes.logNote(note));
}
else if(commond=="read"){

    let readNote=notes.reading(argv.title);
    if (readNote){
        console.log("we are reading");
        notes.logNote(readNote);
    }else{
    
        console.log("no note was found");
    }
}
else if(commond="remove"){
    var del_node=notes.removing(argv.title);
    let msg = del_node?"note was removed":"note was not removed";
    console.log(msg);
}else{
    console.log("somethig is fuzzy");
}