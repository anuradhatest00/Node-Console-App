const yargs = require("yargs");
const db=require("./guestdb.js");

//guest -id, name , address, contact_no ,visit_date

yargs.version("1.0.1");

//add
yargs.command({
    command:'add',
    describe: 'Add a guest',
    builder:{
       name:{
           describe:"Name",
           demandOption:true,
           type:"string"
       },
       address:{
           describe:"Address", 
           demandOption:true,
           type:"string"
       },
       contact_no:{
            describe:"Contact No",
            demandOption:true,
            type:"number"
       },
       visit_date:{
            describe:"Visit Date",
            demandOption:true,
            type:"string"
        }  
    },
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
})

//update
yargs.command({
    command:'update',
    describe: 'Update a guest',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        },
        name:{
            describe:"Name",
            type:"string"
        },
        address:{
            describe:"Address",
            type:"string"
        },
        contact_no:{
            describe:"Contact No",
            type:"number"
         },
         visit_date:{
            describe:"Visit Date",
            type:"string"
         }  
    },
    handler(argv){
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});


//delete
yargs.command({
    command:'delete',
    describe: 'Delete a guest',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        }
    },
    handler(argv){
        db.deleteGuest(argv.id);
    }
});

//read
yargs.command({
    command:'read',
    describe: 'read a guest',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        }
    },
    handler(argv){
        db.readGuest(argv.id);
    }
});

//list
yargs.command({
    command:'list',
    describe: 'List all guests',
    handler(){
        db.listGuest();
    }
});

yargs.parse();


