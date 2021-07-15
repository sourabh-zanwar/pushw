var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys)
let vapidKeys = {
    publicKey: 'BG06vw1ClqPo-QOyAac3JG_aiCijqmIqi-JzFMWIOqTYRkhHO1AlRk6miqPNvaf17eLJi8ybgRkxMf2x2bCDFiA',
    privateKey: 'slESeJo-hOdkImCE7C1lx37M8ugFygp51Rf33cyX_x0'
  }

push.setVapidDetails('mailto:test', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/eCas2llpD-I:APA91bHMCt6XlNFOUVmgWm9buohDv-_zbTlZqV33cm_Es1WoYZV-3ViPrsGeKraVcxH442wK9qafN1IlPuaIP5ocFRQPjNaa2z3W6z92WVX_LdLRzpkIzMJMqzihKFrrdmSkIqIC85Vd",
    expirationTime:null,
    keys:
        {
            p256dh:"BI_z7I4GwiZCyxGdkEzMEEnAWWvc4jQ2LpNk4pFqSmBKR0_KYUGsDFlfQQpJ7VkTml77hsdFtWFfDHIwhE0whsQ",
            auth:"ePK4EjzHFP3fxNgbPsfq_g"
        }
    };

push.sendNotification(sub, 'text message')