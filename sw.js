//self.addEventListener('push', () => {
//    self.registration.sendNotification('test message', {})
//})

self.addEventListener('push', function(e) {
    
    var options = {
      body: 'Your Speech Socres are now online',
      icon: 'images/loading.gif',
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Check Scores',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Your scores are online!', options)
    );
  });