var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys)
let vapidKeys = {
    publicKey: 'BG06vw1ClqPo-QOyAac3JG_aiCijqmIqi-JzFMWIOqTYRkhHO1AlRk6miqPNvaf17eLJi8ybgRkxMf2x2bCDFiA',
    privateKey: 'slESeJo-hOdkImCE7C1lx37M8ugFygp51Rf33cyX_x0'
  }

push.setVapidDetails('mailto:test', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {endpoint:
    "https://fcm.googleapis.com/fcm/send/dxkMV5fxRGY:APA91bGDAM4KSRgDndk-_S4eirBbJo7Khb5jky4CboAZLpXStvgj3iBghjJwU2ygY0vIsDwZgMpEGJqprnjw_sW0a7TvmvrIqOgRXR1bjDndzOq7XAC--RLViLhanV_nsiy4Hy8U9oP3",
        expirationTime:null,
        keys:{
            p256dh:"BFhfiFRk-263TIIB1L9gTzaJ4w5YArUw4J6esmrs7t9zweWA570yqF-q6U1zXwETIp1MztDIBi9tOkZ7OmR54jM",
            auth:"FzZ_LVHobWaZHY-CwCxrUw"}}

push.sendNotification(sub, 'text message')