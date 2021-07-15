var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys)
let vapidKeys = {
    publicKey: 'BG06vw1ClqPo-QOyAac3JG_aiCijqmIqi-JzFMWIOqTYRkhHO1AlRk6miqPNvaf17eLJi8ybgRkxMf2x2bCDFiA',
    privateKey: 'slESeJo-hOdkImCE7C1lx37M8ugFygp51Rf33cyX_x0'
  }

push.setVapidDetails('mailto:test', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {endpoint:
        "https://fcm.googleapis.com/fcm/send/cCdzAJeJf08:APA91bEYJypgH5ZtW70DTqe5U9XTp9o96FDaxTfGCopENEtrtWJNdCGxaP1zcV4OOGdOkbEJh3bZRxYQnJlIt35KItoSNMgCLiRAkLlZ1UZsyQy-Hr9B3PMOrmofqbPDrKTnS_qFvhWE",
        expirationTime:null,
        keys:{
            p256dh:"BG51c8ShjjLqeYK8T4_GFbQJyFMQjR31voprqrd8phwCVFNTJa77093nuMutcXUlOzQ0rLgkH1RerTII8q37x6U",
            auth:"U7rom0i0EFAczklKdSix-g"}}

push.sendNotification(sub, 'text message')

