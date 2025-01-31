let cult = navigator.language
if (cult === 'ar-SA' || cult === 'he-IL') { // Arabic, Hebrew, etc.
  document.getElementById('sidebar').style.order=999
}