specialRequest(function(error, xhr) { console.log('custom-Function',error,xhr);
    if (error) {
        console.log('error:',error);
    } else {
         console.log('xhr:',xhr);
    }
});