var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys)
let vapidKeys = {
    publicKey: 'BG06vw1ClqPo-QOyAac3JG_aiCijqmIqi-JzFMWIOqTYRkhHO1AlRk6miqPNvaf17eLJi8ybgRkxMf2x2bCDFiA',
    privateKey: 'slESeJo-hOdkImCE7C1lx37M8ugFygp51Rf33cyX_x0'
  }

push.setVapidDetails('mailto:test', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'text message')