document.addEventListener("DOMContentLoaded", function () {
    const colorMapByProduct = {
      "Кітель": {
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
        "LAS VEGAS": ["Білий", "Чорний", "Синій", "Хакі", "Сірий"],
        "TEXAS": ["Білий", "Чорний", "Синій", "Хакі", "Сірий"],
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
    "Фартук": {
        "COLORADO": ["Смужка"],
        "ASTANA": ["Чорний"],
        "LONDON": ["Чорний"],
        "MANILA": ["Чорний"],
        "VILNIUS": ["Чорний"],
        "COLOMBO": ["Чорний"],
        "OTTAWA": ["Чорний"],
        "MONACO": ["Чорний", "Синій"],
        "ROME": ["Чорний", "Синій"],
        "SIENA": ["Чорний", "Синій"],
        "VIRGINIA": ["Білий"],
        "TENERIFE": ["Бежевий", "Чорний"],
        "SAVANNA": ["Блакитний", "Сірий"],
        "SPARKS": ["Чорно-сірий", "Синє-сірий"],
        "ALASKA": ["Синій", "Чорний", "Смужка", "Білий"],
        "BEND": ["Чорний", "Сірий", "Синій"],
        "VANCOUVER": ["Хакі", "Чорний", "Смужка"],
        "OREGON": ["Чорний", "Синій", "Смужка"],
        "BOSTON": ["Чорний", "Бежевий", "Смужка", "Сірий"],
        "DETROIT": ["Чорний", "Бежевий", "Смужка", "Сірий"],
        "MONTERREY": ["Чорний", "Смужка"],
        "COPENHAGEN": ["Синій", "Хакі"]
    },
    "Головний убір": {
        "Шапка ALABAMA": ["Білий", "Чорний", "Сірий", "Меланж", "Пудра"],
        "Повʼязка SOFIA": ["Білий", "Чорний", "Сірий", "Бежевий", "Червоний", "Світло-сірий", "Жовтий"],
        "Бондана DUBAI": ["Білий", "Чорний", "Сірий", "Червоний", "Жовтий", "Рожевий", "Блакитний", "Помаранчевий", "Зелений"],
        "Кепка MADAGASKAR": ["Чорний", "Білий"],
        "Кепка GRANADA": ["Хакі"],
        "Кепка PALERMO": ["Чорний", "Сірий"],
        "Кепка RIMINI": ["Білий", "Чорний", "Сірий", "Синій"],
        "Панама HONG KONG": ["Темний-беж", "Сірий", "Помаранчевий"],
        "Таблетка KABUL": ["Чорний", "Білий"],
        "Гриб PARIS": ["Чорний", "Білий"]
    },
    "Поло, Футболки": {
        "Футболка NEVADA": ["Білий", "Чорний", "Сірий", "Хакі"],
        "Поло NEW-YORK": ["Білий", "Чорний", "Сірий"],
        "Поло DUBLIN": ["Білий", "Чорний", "Сірий"]
    },
    "Взуття": {
        "Сабо OSLO": ["Чорний", "Хакі"],
        "Сабо TULSA": ["Білий"],
        "Сабо IRVINE": ["Чорний"]
    },
    "Світшот": {
        "MICHIGAN": ["Чорний", "Світло-сірий", "Хакі"]
    },
    "Шкарпетки": {
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
    const addHumanButton = document.querySelector(".button-add-human");
    const formContainer = document.querySelector("#form-container");
    const saveButton = document.querySelector(".button-save-form");
    // списки с продуктами(список с названиеми продуктов)
    const productSelect = document.querySelector("#product-list");
    const productArticleSelect = document.querySelector("#product-list-article");
    const productSizeSelect = document.querySelector("#product-list-size");
    const genderSelect = document.querySelector("#gender");
    const startMessage = document.querySelector("#start-message");
    let sizes = [];

    const productArticlesMap = {
    "Кітель": [
        "CLOVIS", "WASHINGTON", "ALICANTE", "LAS VEGAS", "MURANO", "PORTLAND", "MILAN", "NORMAN", "RIVERSIDE",
        "FRANKFURT", "DENVER", "TEXAS", "VENEZUELA", "NAPOLI", "SEATTLE", "EUROPE", "CAPRI", "CONCORD",
        "SPARTA", "BRATISLAVA", "MEXICO", "MOROCCO", "TORONTO", "INDIANA", "SIDNEY", "LOS ANGELES", "NEBRASKA",
        "SANTORINI"
    ],
    "Брюки": [
        "GENEVA", "KANZAS", "BREST", "CARY", "CHICO", "BALTIMOR", "BAZEL", "LINCOLN", "ARIZONA", "KENT",
        "TURIN", "BOGOTA", "AMSTERDAM"
    ],
    "Фартук": [
        "COLORADO", "MONACO", "TENERIFE", "SAVANNA", "SPARKS", "ALASKA", "BEND", "VANCOUVER", "ASTANA", "OREGON",
        "BOSTON", "ROME", "VIRGINIA", "DETROIT", "LONDON", "MANILA", "MONTERREY", "VILNIUS", "COLOMBO", "OTTAWA", "SIENA",
        "COPENHAGEN"
    ],
    "Головний убір": [
        "Шапка ALABAMA", "Повʼязка SOFIA", "Бондана DUBAI", "Кепка MADAGASKAR", "Кепка GRANADA", "Кепка PALERMO", "Кепка RIMINI",
        "Панама HONG KONG", "Таблетка KABUL", "Гриб PARIS"
    ],
    "Поло, Футболки": [
        "Футболка NEVADA", "Поло NEW-YORK", "Поло DUBLIN"
    ],
    "Взуття": [
        "Сабо OSLO", "Сабо TULSA", "Сабо IRVINE"
    ],
    "Світшот": [
        "MICHIGAN"
    ],
    "Шкарпетки": [
        "Набір LION", "Набір ABRIKOS", "Набір BLACK", "Набір GRAY", "Набір SPIDER", "Набір TATTO", "Набір DEMON",
        "Набір EGG", "Набір MUHOMOR", "Набір RACCON"
    ]
};


productSelect.addEventListener("change", function () {
    const selectedProduct = this.value;
    const options = productArticlesMap[selectedProduct] || [];

    productArticleSelect.innerHTML = `<option value=""></option>`;
    options.forEach(article => {
        const option = document.createElement("option");
        option.value = article;
        option.textContent = article;
        productArticleSelect.appendChild(option);
    });
    productColor.innerHTML = `<option value=""></option>`;
    productSizeSelect.innerHTML = `<option value=""></option>`;
});

productArticleSelect.addEventListener("change", function () {
    const selectedProduct = productSelect.value;
    const selectedArticle = productArticleSelect.value;
    const gender = genderSelect.value;

    // --- Колір ---
    productColor.innerHTML = `<option value=""></option>`;
    if (colorMapByProduct[selectedProduct] && colorMapByProduct[selectedProduct][selectedArticle]) {
        colorMapByProduct[selectedProduct][selectedArticle].forEach(color => {
            const option = document.createElement("option");
            option.value = color;
            option.textContent = color;
            productColor.appendChild(option);
        });
    }

    // --- Розмір ---
    const sizesMap = {
        "Кітель": ["Не знаємо", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
        "Брюки": ["Не знаємо", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
        "Фартук": ["M", "L"],
        "Головний убір": ["Немає"],
        "Поло, Футболки": {
            "Футболка NEVADA": ["XS", "S", "M", "L", "XL", "XXL"],
            "Поло NEW-YORK": {
                "Чол": ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
                "Жін": ["XS", "S", "M", "L", "XL", "XXL"]
            },
            "Поло DUBLIN": {
                "Чол": ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
                "Жін": ["XS", "S", "M", "L", "XL", "XXL"]
            }
        },
        "Взуття": {
            "Сабо OSLO": ["39", "40", "41", "42", "43", "44", "45", "46"],
            "Сабо TULSA": ["39", "40", "41", "42", "43", "44"],
            "Сабо IRVINE": ["39", "40", "43", "44"]
        },
        "Світшот": {
            "MICHIGAN": ["XS", "S", "M", "L", "XL", "XXL"]
        },
        "Шкарпетки": ["36-40", "41-45"]
    };

    productSizeSelect.innerHTML = `<option value=""></option>`;
    sizes = [];

if (Array.isArray(sizesMap[selectedProduct])) {
    // Простий масив (Кітель, Брюки)
    sizes = sizesMap[selectedProduct];
} else if (typeof sizesMap[selectedProduct] === "object") {
    const productSizes = sizesMap[selectedProduct];
    const sizeEntry = productSizes[selectedArticle];

    if (Array.isArray(sizeEntry)) {
        // Прямий масив для конкретного артикула (наприклад, BOSTON)
        sizes = sizeEntry;
    } else if (typeof sizeEntry === "object" && sizeEntry[gender]) {
        // Гендерно-розділені розміри (наприклад, Поло)
        sizes = sizeEntry[gender];
    }
}


    sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        productSizeSelect.appendChild(option);
    });
});


    
    const infoWrapper = document.createElement("div"); // общий контейнер
    infoWrapper.classList.add("info-container");
    document.body.appendChild(infoWrapper);

    let editTarget = null; // если редактируем — тут ссылка

    addHumanButton.addEventListener("click", function () {
        resetForm(formContainer);
        formContainer.classList.remove("hidden");
    
        // Сховати всі блоки
        document.querySelectorAll(".human-block").forEach(h => h.classList.add("hidden"));
        document.querySelectorAll(".add-product").forEach(btn => btn.classList.add("hidden"));
    
        editTarget = null;
    });

    saveButton.addEventListener("click", function () {
        const formData = getFormData();
        if (!formData) return;
    
        if (editTarget && editTarget instanceof Element) {
            // Редагування
            updateProductBlock(editTarget, formData);
        } else if (editTarget && editTarget.container) {
            // Додавання виробу
            const newProduct = createProductBlock(formData);
            editTarget.container.appendChild(newProduct);
        } else {
            // Додавання нової людини
            createHumanBlock(formData);

        }
    
        // Сховати форму
        formContainer.classList.add("hidden");
        resetForm(formContainer);
    
        // Показати всі блоки назад
        document.querySelectorAll(".human-block").forEach(h => h.classList.remove("hidden"));
        document.querySelectorAll(".add-product").forEach(btn => btn.classList.remove("hidden"));
    
        editTarget = null;
    });
    

    function getFormData() {
        const name = document.querySelector(".input-name-human").value;
        const gender = document.querySelector("#gender").value;
        const product = document.querySelector("#product-list").value;
        const productName = document.querySelector("#product-list-article").value;
        const color = document.querySelector("#product-list-color").value;
        const quantityItems = document.querySelector("#quality-items").value;
        const productSize = document.querySelector("#product-list-size").value;
        const chestSize = document.querySelector("#chest-size").value;
        const qualityLogo = document.querySelector("#quality-logo").value;
        const qualityEmbroideries = document.querySelector("#quality-embroideries").value;

        if (!name || !gender || !product || !productName || !color || !quantityItems || !productSize || !chestSize || !qualityLogo || !qualityEmbroideries) {
            if (!name || !gender || !product || !productName || !color || !quantityItems || !productSize || !chestSize || !qualityLogo || !qualityEmbroideries) {
                const message = document.querySelector("#custom-message-fields");
                message.classList.add("show");
                setTimeout(() => {
                    message.classList.remove("show");
                }, 2000);
                return null;
            }
        }

        return { name, gender, product, productName, color, quantityItems, productSize, chestSize, qualityLogo, qualityEmbroideries };
    }

    function createHumanBlock(data) {
        const humanBlock = document.createElement("div");
        humanBlock.classList.add("human-block");

        const nameBlock = document.createElement("div");
        nameBlock.classList.add("info-block-first");
        nameBlock.innerHTML = `<p><span class="info-container-first">${data.name}_${data.gender}</span></p>`;

        const productsContainer = document.createElement("div");
        productsContainer.classList.add("products-container");

        const productBlock = createProductBlock(data);

        const addProductBtn = document.createElement("button");
        addProductBtn.textContent = "Додати виріб";
        addProductBtn.classList.add("add-product", "info-block-button");
        addProductBtn.style = "font-size: 20px; font-weight: 800; padding: 3px 30px;";
        addProductBtn.addEventListener("click", () => {
            resetForm(formContainer);
            formContainer.classList.remove("hidden");
        
            // Скрываем все human-блоки и кнопки "додати виріб"
            document.querySelectorAll(".human-block").forEach(h => h.classList.add("hidden"));
            document.querySelectorAll(".add-product").forEach(btn => btn.classList.add("hidden"));
        
            // Заполняем имя и стать
            document.querySelector(".input-name-human").value = data.name;
            document.querySelector("#gender").value = data.gender;
        
            // Устанавливаем цель добавления
            editTarget = { container: productsContainer, name: data.name, gender: data.gender };
        });
        

        productsContainer.appendChild(productBlock);
        humanBlock.appendChild(nameBlock);
        humanBlock.appendChild(productsContainer);
        humanBlock.appendChild(addProductBtn);

        infoWrapper.appendChild(humanBlock);
    }

    function createProductBlock(data) {
        const block = document.createElement("div");
        block.classList.add("info-block-product");

        block.innerHTML = `
            <div class="info-block-second">
                <p><span class="info-container-last">${data.product} ${data.productName} - ${data.color} - ${data.quantityItems} шт</span></p>
                <p class="hidden">Ім'я: <span class="info-name">${data.name}</span></p>
                <p class="hidden">Стать: <span class="info-gender">${data.gender}</span></p>
                <p class="hidden">Виріб: <span class="info-product">${data.product}</span></p>
                <p class="hidden">Назва виробу: <span class="info-productName">${data.productName}</span></p>
                <p class="hidden">Колір: <span class="info-color">${data.color}</span></p>
                <p class="hidden">Кількість: <span class="info-quantityItems">${data.quantityItems}</span></p>
                <p class="info-productSize-cont">Розмір: <span class="info-productSize">${data.productSize}</span></p>
                <p>ОГ/ОС: <span class="info-chestSize">${data.chestSize} см</span></p>
                <p>Вишивка лого - <span class="info-qualityLogo">${data.qualityLogo}</span></p>
                <p>Вишивка імені - <span class="info-qualityEmbroideries">${data.qualityEmbroideries}</span></p>
                <div class="button-container">
                    <button class="edit-button info-block-button">Редагувати</button>
                    <button class="delete-button info-block-button">Видалити</button>
                </div>
            </div>
        `;

        const editButton = block.querySelector(".edit-button");
        const deleteButton = block.querySelector(".delete-button");

        editButton.addEventListener("click", () => {
            formContainer.classList.remove("hidden");
        
            // Скрываем всех людей и кнопки добавления виробів
            document.querySelectorAll(".human-block").forEach(h => h.classList.add("hidden"));
            document.querySelectorAll(".add-product").forEach(btn => btn.classList.add("hidden"));
        
            fillFormWithData(block);
            editTarget = block;
        });
        

        deleteButton.addEventListener("click", () => {
            const productsContainer = block.parentElement;
            const humanBlock = productsContainer.closest(".human-block");
        
            block.remove();
        
            // Проверяем: остались ли ещё вироби?
            const remainingProducts = productsContainer.querySelectorAll(".info-block-product");
            if (remainingProducts.length === 0) {
                humanBlock.remove();
            }
        });

        return block;
    }

    function updateProductBlock(block, data) {
        const newBlock = createProductBlock(data);
        block.replaceWith(newBlock); // ← теперь сработает, т.к. block — DOM-элемент
    }
    
    

    function fillFormWithData(block) {
        document.querySelector(".input-name-human").value = block.querySelector(".info-name").textContent;
        document.querySelector("#gender").value = block.querySelector(".info-gender").textContent;
        document.querySelector("#product-list").value = block.querySelector(".info-product").textContent;
        document.querySelector("#product-list-article").value = block.querySelector(".info-productName").textContent;
        document.querySelector("#product-list-color").value = block.querySelector(".info-color").textContent;
        document.querySelector("#quality-items").value = block.querySelector(".info-quantityItems").textContent;
        document.querySelector("#product-list-size").value = block.querySelector(".info-productSize").textContent;
        document.querySelector("#chest-size").value = block.querySelector(".info-chestSize").textContent.replace(" см", "");
        document.querySelector("#quality-logo").value = block.querySelector(".info-qualityLogo").textContent;
        document.querySelector("#quality-embroideries").value = block.querySelector(".info-qualityEmbroideries").textContent;
    }

    function resetForm(container) {
        container.querySelectorAll("input, select").forEach(el => el.value = "");
    }

    const sendButton = document.querySelector(".button-send-form");

sendButton.addEventListener("click", function () {
    const restaurantName = document.querySelector("#rest-name").value;
    const humanBlocks = document.querySelectorAll(".human-block");

    humanBlocks.forEach(human => {
        const nameGender = human.querySelector(".info-container-first").textContent.split("_");
        const name = nameGender[0];
        const gender = nameGender[1];

        const products = human.querySelectorAll(".info-block-product");

        products.forEach(product => {
            const data = {
                restaurantName,
                name,
                gender,
                product: product.querySelector(".info-product").textContent,
                productName: product.querySelector(".info-productName").textContent,
                color: product.querySelector(".info-color").textContent,
                quantityItems: product.querySelector(".info-quantityItems").textContent,
                productSize: product.querySelector(".info-productSize").textContent,
                chestSize: product.querySelector(".info-chestSize").textContent.replace(" см", ""),
                qualityLogo: product.querySelector(".info-qualityLogo").textContent,
                qualityEmbroideries: product.querySelector(".info-qualityEmbroideries").textContent
            };

            // Викликаємо функцію надсилання:
            sendToGoogleSheet(data);
        });
    });

    if (humanBlocks.length === 0) {
        const successMessage = document.querySelector("#custom-message-error");
        successMessage.classList.add("show");
            setTimeout(() => {
                successMessage.classList.remove("show");
            }, 1000);
        return;
    } else if (humanBlocks.length >= 1) {
        const successMessage = document.querySelector("#custom-message");
        successMessage.classList.add("show");
            setTimeout(() => {
                successMessage.classList.remove("show");
            }, 1000);

    document.querySelectorAll(".human-block").forEach(block => block.remove());
    document.querySelector("#rest-name").value = "";
    document.querySelector("#start-message").classList.remove("hidden");

    return;

    }
});

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMT3nVI4zY6N3eiszlKgallOxEI_3qDwXD0QWIIZ-qQZX0O3OmV0Z7iIwrxIx47AVT/exec";

function sendToGoogleSheet(data) {
    const formData = new FormData();

    for (const key in data) {
        formData.append(key, data[key]);
    }

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // <- ключова частина!
    })
    .then(() => {
        console.log("✅ Дані надіслано (no-cors)");
    })
    .catch(error => {
        console.error("❌ Помилка:", error);
    });
}

const productList = document.querySelector("#product-list");
const productArticle = document.querySelector("#product-list-article");
const productColor = document.querySelector("#product-list-color");

// Универсальный обработчик выбора названия виробу
productArticle.addEventListener("change", function () {
    const selectedProduct = productList.value;
    const selectedArticle = productArticle.value;

    productColor.innerHTML = `<option value=""></option>`;

    if (
        colorMapByProduct[selectedProduct] &&
        colorMapByProduct[selectedProduct][selectedArticle]
    ) {
        const colors = colorMapByProduct[selectedProduct][selectedArticle];
        colors.forEach(color => {
            const option = document.createElement("option");
            option.value = color;
            option.textContent = color;
            productColor.appendChild(option);
        });
    }
});

addHumanButton.addEventListener("click", function () {
    startMessage.classList.add("hidden");
});

});
