
const  text = (name , age ) => {
    console.log(`Name : ${name} Age: ${age}`);
};

const texttwo = (name, age) => {
    console.log(`Name: ${name} age: ${age}`);
};
text.call(null, "javascript", "10 years");
texttwo.call(null, "Javascript Language", "20 years");
text.apply(null, ["javascript", "20  apply Methosdyears experience"]);
texttwo.apply(null,["Javascript", "Apply Method calling!"]);

var bindText = text.bind(null,"bindMethod", "Binding Method Experience binding!");
console.log("Calling binding method details below!");
bindText();


