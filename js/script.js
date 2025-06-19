
document.addEventListener("DOMContentLoaded", function () {
  const translations = {

    rules_title: {
      es: "Normas de la casa",
      en: "House Rules",
      de: "Hausregeln",
      fr: "Règles de la maison",
      it: "Regole della casa"
    },
    no_smoking: {
      es: "No se permite fumar",
      en: "No smoking allowed",
      de: "Rauchen verboten",
      fr: "Interdiction de fumer",
      it: "Vietato fumare"
    },
    no_noise: {
      es: "Evite ruidos molestos por la noche",
      en: "Avoid loud noises at night",
      de: "Lärm in der Nacht vermeiden",
      fr: "Évitez les bruits forts la nuit",
      it: "Evitare rumori forti di notte"
    },
    pets_allowed: {
      es: "Mascotas bienvenidas",
      en: "Pets are welcome",
      de: "Haustiere erlaubt",
      fr: "Animaux bienvenus",
      it: "Animali ammessi"
    },
    checkin: {
      es: "Check-in: después de las 15:00",
      en: "Check-in: after 3:00 PM",
      de: "Check-in: nach 15:00 Uhr",
      fr: "Arrivée : après 15h00",
      it: "Check-in: dopo le 15:00"
    },
    checkout: {
      es: "Check-out: antes de las 11:00",
      en: "Check-out: before 11:00 AM",
      de: "Check-out: vor 11:00 Uhr",
      fr: "Départ : avant 11h00",
      it: "Check-out: entro le 11:00"
    },
  "es": {
    "title": "Can Riera – Casa en Cala Anguila",
    "subtitle": "Casa familiar cerca de Porto Cristo, ideal para familias y mascotas.",
    "about_title": "Sobre la casa",
    "about_text": "Can Riera es una casa unifamiliar de unos ~130 m², con vistas al mar y a solo 3 min a pie de las calas Cala Anguila y Cala Mendia. Situada en una zona residencial tranquila y familiar, es perfecta para desconectar con toda la familia (incluidas mascotas).",
    "gallery": "Galería",
    "book": "Reservar",
    "explore_title": "Explora los alrededores",
    "explore_intro": "Desde playas paradisíacas hasta restaurantes locales con encanto, aquí tienes algunas recomendaciones.",
    "beaches": "Playas cercanas",
    "restaurants": "Restaurantes recomendados",
    "map": "Mapa"
  },
  "en": {
    "title": "Can Riera – House in Cala Anguila",
    "subtitle": "Family-friendly home near Porto Cristo, pets welcome.",
    "about_title": "About the House",
    "about_text": "Can Riera is a single-family home of about 130 m² with sea views, just a 3-minute walk from Cala Anguila and Cala Mendia. Located in a quiet residential area, it is perfect for relaxing with the whole family (including pets).",
    "gallery": "Gallery",
    "book": "Book Now",
    "explore_title": "Explore the Area",
    "explore_intro": "From paradise beaches to charming local restaurants – here are some suggestions.",
    "beaches": "Nearby Beaches",
    "restaurants": "Recommended Restaurants",
    "map": "Map"
  },
  "de": {
    "title": "Can Riera – Haus in Cala Anguila",
    "subtitle": "Familienfreundliches Haus in der Nähe von Porto Cristo, haustierfreundlich.",
    "about_title": "Über das Haus",
    "about_text": "Can Riera ist ein Einfamilienhaus mit ca. 130 m² und Meerblick, nur 3 Gehminuten von den Buchten Cala Anguila und Cala Mendia entfernt. In einem ruhigen Wohnviertel gelegen, ideal zum Entspannen mit der ganzen Familie (auch mit Haustieren).",
    "gallery": "Galerie",
    "book": "Buchen",
    "explore_title": "Entdecken Sie die Umgebung",
    "explore_intro": "Von paradiesischen Stränden bis hin zu charmanten Restaurants – hier sind einige Empfehlungen.",
    "beaches": "Strände in der Nähe",
    "restaurants": "Empfohlene Restaurants",
    "map": "Karte"
  },
  "it": {
    "title": "Can Riera – Casa a Cala Anguila",
    "subtitle": "Casa per famiglie vicino a Porto Cristo, animali ammessi.",
    "about_title": "Informazioni sulla casa",
    "about_text": "Can Riera è una casa indipendente di circa 130 m² con vista mare, a soli 3 minuti a piedi dalle calette Cala Anguila e Cala Mendia. Situata in una zona residenziale tranquilla, perfetta per rilassarsi con tutta la famiglia (animali inclusi).",
    "gallery": "Galleria",
    "book": "Prenota",
    "explore_title": "Esplora i dintorni",
    "explore_intro": "Dalle spiagge paradisiache ai ristoranti locali – ecco alcuni suggerimenti.",
    "beaches": "Spiagge vicine",
    "restaurants": "Ristoranti consigliati",
    "map": "Mappa"
  },
  "fr": {
    "title": "Can Riera – Maison à Cala Anguila",
    "subtitle": "Maison familiale près de Porto Cristo, animaux acceptés.",
    "about_title": "À propos de la maison",
    "about_text": "Can Riera est une maison individuelle d’environ 130 m² avec vue sur la mer, à seulement 3 minutes à pied des criques Cala Anguila et Cala Mendia. Située dans un quartier résidentiel calme, parfaite pour se détendre en famille (animaux compris).",
    "gallery": "Galerie",
    "book": "Réserver",
    "explore_title": "Explorer les environs",
    "explore_intro": "Des plages paradisiaques aux restaurants locaux charmants – voici quelques recommandations.",
    "beaches": "Plages proches",
    "restaurants": "Restaurants recommandés",
    "map": "Carte"
  }
};
  let currentLang = localStorage.getItem("lang") || "es";

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
  }

  document.querySelectorAll("#lang-flags img").forEach(flag => {
    flag.addEventListener("click", () => {
      const lang = flag.dataset.lang;
      localStorage.setItem("lang", lang);
      currentLang = lang;
      applyLanguage(lang);
    });
  });

  applyLanguage(currentLang);

  // Header background rotation
  const header = document.querySelector("header");
  const bgImages = [
    "img/background/1.jpeg",
    "img/background/2.jpeg",
    "img/background/3.jpeg",
    "img/background/4.jpeg",
    "img/background/5.jpeg"
  ];
  let bgIndex = 0;
  header.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
  bgImages.forEach(src => { const img = new Image(); img.src = src; });
  setInterval(() => {
    bgIndex = (bgIndex + 1) % bgImages.length;
    header.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
  }, 5000);

  // Lightbox functionality
  const gallery = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;
    lightboxImg.src = gallery[currentIndex].src;
    lightbox.style.display = "flex";
  }

  gallery.forEach((img, i) => {
    img.addEventListener("click", () => showImage(i));
  });

  closeBtn.addEventListener("click", () => lightbox.style.display = "none");
  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    showImage((currentIndex - 1 + gallery.length) % gallery.length);
  });
  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    showImage((currentIndex + 1) % gallery.length);
  });
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") lightbox.style.display = "none";
  });
});
