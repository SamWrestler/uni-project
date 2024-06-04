if (
    window.location.href != 'http://localhost:5173/login.html' &&
    window.location.href != 'http://localhost:5173/signup.html' &&
    window.location.href != 'http://localhost:5173/dashboard.html'
    ) {
    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '6630a86c6fa5d5df6f61caa8' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
}