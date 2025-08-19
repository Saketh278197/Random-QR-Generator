let button = document.getElementById("generateqr");

let data = document.getElementById('text');
let qrr = document.getElementById('QRR');
button.addEventListener("click", async function(){
    if(data.value ===''){
        alert('Enter some data')
    }else{
   
let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data.value)}`;
        qrr.setAttribute("src", qrUrl);
    }
    data.value = "";
})