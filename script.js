function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

window.addEventListener("click", (e) => console.log(e.target));

//Another solution to add webpage translation using Gtranslate API, use if hindi kailangan itranslate ang webpage sa lahat ng language

// let x = document.getElementById("body");
// document.getElementById("btn").onclick = translateLanguage;

// async function translateLanguage() {
//   const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "Accept-Encoding": "application/gzip",
//       "X-RapidAPI-Key": "0e5b51a8c9msh12406982188927bp1a171ajsnffc740228f82",
//       "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
//     },
//     body: new URLSearchParams({
//       q: x.innerHTML,
//       target: "ko", //translate to korean
//       source: "en",
//     }),
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//     x.textContent = result.data.translations[0].translatedText;
//   } catch (error) {
//     console.error(error);
//   }
// }
