// //Question 137: Implement a try-catch block to handle potential errors in a block of code.

// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.

let jsonString = '{"name":"huma","course":"GENAI","duration":"1 year"}';

try{
/// Attempt to parse the JSON string
    let parseData=JSON.parse(jsonString);
    console.log(parseData);
}
catch(error){ // Handling parsing errors
    console.log("Error parsing JSON:", error.message);
}
//Author-Huma MOhsin