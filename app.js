document.getElementById('center-info').addEventListener('click', function() {
    alert('ستتمكن من التعرف على مراكز الدفاع المدني قريبًا!');
    // يمكنك إضافة أي منطق متعلق بمراكز الدفاع المدني هنا
});

document.getElementById('fire-report').addEventListener('click', function() {
    // إظهار نموذج بلاغ الحريق بعد اختيار هذا الخيار
    document.getElementById('fire-report-form').style.display = 'block';
});
