let cult = navigator.language
if (cult === 'ar-SA' || cult === 'he-IL') { // Arabic, Hebrew, etc.
  document.getElementById('sidebar').style.order=999
}
document.addEventListener("DOMContentLoaded", function () {
  showSubsiteFromHash();
});
window.addEventListener("hashchange", showSubsiteFromHash);

const elementsIndex = new Array("co2-table", "about-us", "the-mission");

function showElement(id) {

  elementsIndex.forEach(element => {
    document.getElementById(element).style.display="none"
  });
  if(elementsIndex.includes(id)){
    document.getElementById(id).style.display="inline"
  }else{
    document.getElementById("co2-table").style.display="inline"
  }
}

function showSubsiteFromHash() {
  let hash = window.location.hash.substring(1); // Remove the #
  showElement(hash)
}