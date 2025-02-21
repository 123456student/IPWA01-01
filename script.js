let lng = navigator.language
if (lng === 'ar' || lng === 'he') { // Arabic, Hebrew, etc.
  document.getElementById('sidebar').style.order = 999
}
