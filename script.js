fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    // Set the value of the "ip" input field to the retrieved IP address
    // document.getElementById('ip').value = data.ip;

    // Use vpnapi.io API to detect VPN and get details
    fetch(`https://vpnapi.io/api/${data.ip}?key=eec3f6b88a684c9ca9d9f4d5264866cd`)
    .then(response => response.json())
    .then(data => {
        // Set the value of the "vpn_details" input field to the VPN details
        let vpnDetails = `VPN: ${data.security.vpn}, Proxy: ${data.security.proxy}, Tor: ${data.security.tor}, Relay: ${data.security.relay}`;
        // document.getElementById('vpn_details').value = vpnDetails;
        var vpnTF = document.getElementById('vpn');
        // vpnTF.value = data.security.vpn;
        if(!data.security.vpn && !data.security.proxy && !data.security.tor && !data.security.relay){
            console.log("Not using vpn");
            document.getElementById('blocker').style.display='none';

        }
        else{
            console.log("using vpn");
            document.getElementById('blocker').style.display='flex';
            document.getElementById('b-alert').innerText ="VPN detected Disable your VPN to use the SITE or use CloudFlare VPN (1.1.1.1)";
            setInterval(function() {
if (!document.getElementById('blocker')) {

// Create a new blocker div
var blocker = document.createElement('div');
blocker.id = 'blocker';
blocker.style.position = 'fixed';
blocker.style.display = 'flex';
blocker.style.flexDirection = 'column';
blocker.style.top = 0;
blocker.style.left = 0;
blocker.style.width = '100%';
blocker.style.height = '100%';
var img = document.createElement('img');

// set image source
img.src = 'warn.png';

// set image alt text
img.alt = 'Warning';
img.style.width = '70px';
img.style.height = 'auto';
var warnMSG = document.createElement('h1');
var warnMSGT = document.createTextNode("Access Denied!");
warnMSG.appendChild(warnMSGT);
warnMSG.style.color='red';
warnMSG.style.textAlign='center';
blocker.style.background = 'rgba(0, 0, 0,1)';
blocker.style.zIndex = 9999;

// Append the blocker div to the body
document.body.appendChild(blocker);
blocker.appendChild(img);
blocker.appendChild(warnMSG);
setInterval(function checkNone(){
if(!(document.getElementById('blocker').style.display == 'flex')){
document.getElementById('blocker').style.display = 'flex';
}
},10);
}
}, 10);

        }
    })
    .catch(error => console.error(error));
})
.catch(error => console.error(error));