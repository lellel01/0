
$.support.cors = true;

$('#erick').click(
    function(){                                
        $.ajax({
            type:'POST',
            url:'http://192.168.10.14:8091/mail/send',
            contentType: "application/json",
            crossDomain: true,
            headers:{
                Authorization : "Basic "+btoa("ads:adsunifasipe2021")
            },
            data: '{"nome":"Erick","email":"erick.eliel",'+
            '"site":"t thaw","corpo":"incrito no site agora!!"}',
            success: function(data){
                console.log(data);                                        
            },
            error: function(data){
                console.log(data);            
            }
        })
    }
);