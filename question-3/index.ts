// //Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

// Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to pause the execution of your JavaScript code at a specific line. This gives you an opportunity to inspect variables, step through code one line at a time, and understand how your code executes in real-time.

function calculate(){
    let a=10;
    let b=20;
    let result=a+b;
    //set a breakpoint here
    console.log("Result:" , result);
    //for complex data
    let c=45;
    let d=56;
    let complexresult=(a+b)+1/(c*d)
      //set another breakpoint here
    console.log("ComplexResult:", complexresult);
    
    
}
calculate();
//Author-Huma Mohsin