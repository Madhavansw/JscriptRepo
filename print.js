function printMessage(msg)
 { 
    if (typeof msg === "undefined")
         { 
            console.log("No message provided"); 

         }
         else
           {
             console.log("Message: " + msg);
           } 
            
}

printMessage.call("Java Script Language!");
