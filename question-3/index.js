// //Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
// Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to pause the execution of your JavaScript code at a specific line. This gives you an opportunity to inspect variables, step through code one line at a time, and understand how your code executes in real-time.
function calculate() {
    var a = 10;
    var b = 20;
    var result = a + b;
    //set a breakpoint here
    console.log("Result:", result);
    //for complex data
    var c = 45;
    var d = 56;
    var complexresult = (a + b) + 1 / (c * d);
    //set another breakpoint here
    console.log("ComplexResult:", complexresult);
}
calculate();
//Author-Huma Mohsin
