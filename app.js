// إعداد Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// إضافة الحدث لإرسال البلاغ
document.getElementById('fire-report-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const description = document.getElementById('fire-description').value;
    const location = document.getElementById('fire-location').value;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // حفظ البلاغ في Firebase
            const fireReport = {
                description: description,
                location: location,
                lat: lat,
                lon: lon,
                timestamp: new Date().toISOString()
            };

            // حفظ البيانات في قاعدة بيانات Firebase
            database.ref('fire-reports').push(fireReport).then(function() {
                alert('تم إرسال بلاغ الحريق بنجاح!');
                document.getElementById('fire-report-form').reset();
            }).catch(function(error) {
                alert('حدث خطأ أثناء إرسال البلاغ: ' + error.message);
            });
        }, function(error) {
            alert('تعذر استرجاع الموقع.');
        });
    } else {
        alert('الموقع غير مدعوم من هذا المتصفح.');
    }
});
