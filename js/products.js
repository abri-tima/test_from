// === Объединённый colorMapByProduct ===

const colorMapByProduct = {
    "Китель": {
      "ALICANTE": ["Білий", "Чорний"],
      "CAPRI": ["Білий", "Чорний"],
      "FRANKFURT": ["Білий", "Чорний"],
      "MOROCCO": ["Білий", "Чорний"],
      "NAPOLI": ["Білий", "Чорний"],
      "SPARTA": ["Білий", "Чорний"],
      "INDIANA": ["Білий", "Чорний"],
      "SIDNEY": ["Білий", "Чорний"],
      "LOS ANGELES": ["Білий", "Чорний"],
      "NEBRASKA": ["Білий", "Чорний"],
      "SANTORINI": ["Білий", "Чорний"],
      "VENEZUELA": ["Білий", "Чорний"],
      "PORTLAND": ["Чорний"],
      "NORMAN": ["Чорний"],
      "RIVERSIDE": ["Чорний"],
      "CONCORD": ["Чорний"],
      "DENVER": ["Сірий", "Бежевий"],
      "MURANO": ["Сірий", "Бежевий"],
      "CLOVIS": ["Білий", "Чорний", "Сірий", "Синій"],
      "MILAN": ["Білий", "Чорний", "Синій"],
      "BRATISLAVA": ["Білий", "Чорний", "Синій"],
      "MEXICO": ["Білий", "Чорний", "Синій"],
      "TORONTO": ["Білий", "Чорний", "Синій"],
      "WASHINGTON": ["Білий", "Чорний", "Синій"],
      "LAS VEGAS": ["Білий", "Чорний", "Синій", "Хаки", "Сірий"],
      "TEXAS": ["Білий", "Чорний", "Синій", "Хаки", "Сірий"],
      "EUROPE": ["Сірий", "Блакитний"]
    },
    "Брюки": {
      "GENEVA": ["Чорний"],
      "KANZAS": ["Чорний"],
      "BREST": ["Чорний"],
      "BAZEL": ["Чорний"],
      "KENT": ["Чорний"],
      "CHICO": ["Клітка"],
      "LINCOLN": ["Клітка"],
      "CARY": ["Сірий"],
      "AMSTERDAM": ["Смужка"],
      "BALTIMOR": ["Бежевий", "Чорний"],
      "TURIN": ["Бежевий", "Чорний"],
      "ARIZONA": ["Чорний", "Синій", "Сірий", "Меланж"],
      "BOGOTA": ["Сірий", "Помаранчевий", "Клітка"]
    },
    "Фартух": {
      "BOSTON": ["Чорний", "Бежевий", "Смужка", "Сірий"],
      "DETROIT": ["Чорний", "Бежевий", "Смужка", "Сірий"],
      "SIENA": ["Чорний", "Синій"]
    },
    "Поло, Футболки": {
      "Футболка NEVADA": ["Білий", "Чорний", "Сірий", "Хаки"],
      "Поло NEW-YORK": ["Білий", "Чорний", "Сірий"],
      "Поло DUBLIN": ["Білий", "Чорний", "Сірий"]
    },
    "Обувь": {
      "Сабо OSLO": ["Чорний", "Хаки"],
      "Сабо TULSA": ["Білий"],
      "Сабо IRVINE": ["Чорний"]
    },
    "Свитшот": {
      "MICHIGAN": ["Чорний", "Світло-сірий", "Хаки"]
    },
    "Носки": {
      "Набір LION": ["Набір"],
      "Набір ABRIKOS": ["Набір"],
      "Набір BLACK": ["Набір"],
      "Набір GRAY": ["Набір"],
      "Набір SPIDER": ["Набір"],
      "Набір TATTO": ["Набір"],
      "Набір DEMON": ["Набір"],
      "Набір EGG": ["Набір"],
      "Набір MUHOMOR": ["Набір"],
      "Набір RACCON": ["Набір"]
    }
  };
  
  // === Size Map ===
  
  const sizeMap = {
    "Набір LION": ["36-40", "41-45"],
    "Набір ABRIKOS": ["36-40", "41-45"],
    "Набір BLACK": ["36-40", "41-45"],
    "Набір GRAY": ["36-40", "41-45"],
    "Набір SPIDER": ["36-40", "41-45"],
    "Набір TATTO": ["36-40", "41-45"],
    "Набір DEMON": ["36-40", "41-45"],
    "Набір EGG": ["36-40", "41-45"],
    "Набір MUHOMOR": ["36-40", "41-45"],
    "Набір RACCON": ["36-40", "41-45"],
  
    "ALICANTE": ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
    "CAPRI": ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
    "FRANKFURT": ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
    "GENEVA": ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
    "KANZAS": ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
  
    "BOSTON": ["M", "L"],
    "DETROIT": ["M", "L"],
    "SIENA": ["M", "L"],
  
    "Футболка NEVADA": ["XS", "S", "M", "L", "XL", "XXL"],
    "Поло NEW-YORK": { "Чол": ["XS", "S", "M", "L", "XL", "XXL", "3XL"], "Жін": ["XS", "S", "M", "L", "XL", "XXL"] },
    "Поло DUBLIN": { "Чол": ["XS", "S", "M", "L", "XL", "XXL", "3XL"], "Жін": ["XS", "S", "M", "L", "XL", "XXL"] },
  
    "Сабо OSLO": ["39", "40", "41", "42", "43", "44", "45", "46"],
    "Сабо TULSA": ["39", "40", "41", "42", "43", "44"],
    "Сабо IRVINE": ["39", "40", "43", "44"],
  
    "MICHIGAN": ["XS", "S", "M", "L", "XL", "XXL"]
  };
  
  // === Dynamic listener ===
  
  document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.querySelector("#product-list");
    const productArticleSelect = document.querySelector("#product-list-article");
    const productListColor = document.querySelector("#product-list-color");
    const productListSize = document.querySelector("#product-list-size");
    const genderSelect = document.querySelector("#gender");
  
    productArticleSelect.addEventListener("change", () => {
      const selectedProduct = productSelect.value;
      const selectedArticle = productArticleSelect.value;
      const selectedGender = genderSelect.value;
  
      const colors = (colorMapByProduct[selectedProduct] && colorMapByProduct[selectedProduct][selectedArticle]) || [];
      const sizesRaw = sizeMap[selectedArticle] || [];
  
      productListColor.innerHTML = '<option value=""></option>';
      colors.forEach(color => {
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        productListColor.appendChild(option);
      });
  
      productListSize.innerHTML = '<option value=""></option>';
      const sizes = typeof sizesRaw === "object" && !Array.isArray(sizesRaw) && selectedGender ? sizesRaw[selectedGender] || [] : sizesRaw;
  
      sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        productListSize.appendChild(option);
      });
    });
  });
  