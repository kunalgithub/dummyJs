function iamReady(){
    console.log("Entering iamReady ");
    if(xhr.readyState===4){
    	console.log("Response has Come - I can continue with What I want ",xhr);
    	$(document);
    }else{
    	console.log("Not ReadyState 4 ~~ What should i do ?",xhr.readyState);
    }
	
}
iamReady();//Execute it 

function iamReady2(){
	 console.log("Entering iamReady2~~~~",xhr.readyState);
}//Dont execute it
