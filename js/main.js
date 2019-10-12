

window.onload = () => {
    'use strict';

    let notifStatus = document.getElementById("notifStatus");

    Notification.requestPermission(status => {
        notifStatus.innerHTML = "Notification Status: " + status;
    })

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }else{
        console.log("Could not register service worker")
    }
  }

function showNotif(){
    navigator.serviceWorker.getRegistration().then(
        reg => {
            reg.showNotification("Talk A Bit '20",{
                body:"Bem vindo ao melhor TaB de sempre!"
            });
        }
    )
}