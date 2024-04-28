function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
//document.querySelector('.goog-te-combo').ariaLabel = 'Language';
window.addEventListener('click', (e) => console.log(e.target))
