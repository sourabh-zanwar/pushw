var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys)
let vapidKeys = {
    publicKey: 'BG06vw1ClqPo-QOyAac3JG_aiCijqmIqi-JzFMWIOqTYRkhHO1AlRk6miqPNvaf17eLJi8ybgRkxMf2x2bCDFiA',
    privateKey: 'slESeJo-hOdkImCE7C1lx37M8ugFygp51Rf33cyX_x0'
  }

push.setVapidDetails('mailto:test', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
        endpoint:"https://par02p.notify.windows.com/w/?token=BQYAAAC4A0HECa6cAYB3Xuok4IJGFv7I6gpfsDirK2cuw9Qbdx%2bF5Ro01Ku%2f3rU86xJkqLVMXVeJ97TJJLf5bWpd3WzR7HhLf0gASX0rwLW9Upmx0cZS66BPE0qVdS7dTg2F35AzEkvtIIeXk4%2b9HPiJRaQqNhhelu9ZXB6DIN7BGLhA0zGCkZchguJYOAZpNW1Ck4Az66PSbUeZRJHuY08hJiWw3qXn2nOU%2fSylQk77LOFeUPgCvk1%2bu%2b0CReDtxZ5j4L9p0Zgb6Dw78aZ64lSMUTS69QAym4OCJkas4kfGl85UvrYFA8r%2b3nhkAlT60PawVULhS2Z89rBSXDF9FiwtHBZpQaFJ84SL5pTrKKNd%2b%2fhpiA%3d%3d",
        expirationTime:null,
        keys:{
            p256dh:"BC8aaZi6Do4doxE12tS_akBh1rShzAJdLlJValPxMS3UDJRfiayOpJPHHgQcLvPyCeqP9YbKov38fiVa5GI4FkQ",
            auth:"qiAlXwMpkNvo5daupvLV5w"
        }
    };

push.sendNotification(sub, 'text message')