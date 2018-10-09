
const fs=require("fs");
let fetchNote= ()=>{
    try{
        var noteString=fs.readFileSync("notes-node.json");
        return JSON.parse(noteString);
    } catch(e){
            return [];
    }
};
 let saveNote=(notes)=>{
    fs.writeFileSync("notes-node.json",JSON.stringify(notes));
 };
var addNote=(title,body)=>{
    var notes=fetchNote();
    var note={
        title,
        body
    };
    let duplicate=notes.filter((note)=> note.title===title);//for returning true or false

    if (duplicate.length==0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
    

};

var getAll=()=>{
    return fetchNote();
}

let reading=(title)=>{
    let notes=fetchNote();
    let filter=notes.filter((note)=>note.title===title);
    return filter[0];
}

let removing=(title)=>{
    // console.log("we are removing",title);
    var notes=fetchNote();
    let d = notes.filter((note)=> note.title !=title);
    saveNote(d);
    return notes.length!=d.length;
}
const logNote=(note)=>{
    debugger;
    console.log("--");
    console.log("title: ",note.title);
    console.log("body: ",note.body);
};

module.exports={
    addNote,
    getAll,
    reading,
    logNote,
    removing
}