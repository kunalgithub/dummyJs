specialRequest(function(error, xhr) { console.log('custom-Function',error,xhr);
    if (error) {
        console.log('error:',error);
    } else {
         console.log('xhr:',xhr);
         if(xhr.readyState===4 && status===200){
         	console.log('will call foundation here')
         }
    }
});