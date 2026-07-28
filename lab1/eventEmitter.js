import{EventEmitter}from "node:events";
const task =new EventEmitter();
const sayHi=(name)=>{
    console.log(`Logged in ${name}`);
};
const starts=()=>{
    console.log("System started");
};

task.once("greet",starts);//Event and method binding
task.on("greet",sayHi);
task.on("greet",(name)=>{
    console.log('${name}start shopping');
});
task.emit("greet","Anil Pandey");//Announcement
task.emit("greet","Amit singh");
task.emit("greet","Altaf Raja");