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
        "BASEL": ["Чорний"],
        "KENT": ["Чорний"],
        "CHICO": ["Клітка"],
        "LINCOLN": ["Клітка"],
        "CARY": ["Сірий"],
        "AMSTERDAM": ["Смужка"],
        "BALTIMOR": ["Бежевий", "Чорний"],
        "TURIN": ["Бежевий", "Чорний"],
        "ARIZONA": ["Чорний", "Синій", "Сірий", "Меланж", "Хакі"],
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
        "MONACO": ["Чорний", "Синій", "Сірий"],
        "ROME": ["Чорний", "Синій"],
        "SIENA": ["Чорний", "Синій"],
        "VIRGINIA": ["Білий"],
        "TENERIFE": ["Бежевий", "Чорний"],
        "SAVANNA": ["Блакитний", "Сірий"],
        "SPARKS": ["Чорно-сірий", "Синє-сірий"],
        "ALASKA": ["Синій", "Сірий", "Смужка", "Білий"],
        "BEND": ["Чорний", "Сірий", "Синій"],
        "VANCOUVER": ["Хакі", "Чорний", "Смужка"],
        "OREGON": ["Чорний", "Синій", "Смужка", "Сірий"],
        "BOSTON": ["Чорний", "Бежевий", "Смужка", "Сірий"],
        "DETROIT": ["Чорний", "Бежевий", "Смужка", "Синій"],
        "MONTERREY": ["Чорний", "Смужка"],
        "COPENHAGEN": ["Сірий", "Хакі"]
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
const imageURLMap = {
    // кителя
    "CLOVIS": {
      "Чол": {
        "Білий": "https://i.abrikos.com/6698-home_default_retina/kitel-muzhskoj-clovis.webp",
        "Чорний": "https://i.abrikos.com/7176-home_default_retina/kitel-muzhskoj-clovis.jpg",
        "Сірий": "https://i.abrikos.com/7179-home_default_retina/kitel-muzhskoj-clovis.jpg",
        "Синій": "https://i.abrikos.com/7177-home_default_retina/kitel-muzhskoj-clovis.jpg"
      },
      "Жін": {
        "Білий": "https://i.abrikos.com/6737-home_default_retina/kitel-zhenskij-clovis.webpp",
        "Чорний": "https://i.abrikos.com/7182-home_default_retina/kitel-zhenskij-clovis.jpg",
        "Сірий": "https://i.abrikos.com/7184-home_default_retina/kitel-zhenskij-clovis.jpg",
        "Синій": "https://i.abrikos.com/7186-home_default_retina/kitel-zhenskij-clovis.jpg"
      }
    },
    "WASHINGTON": {
      "Чол": {
        "Білий": "https://i.abrikos.com/6725-home_default_retina/kitel-muzhskoj-washington.webp",
        "Чорний": "https://i.abrikos.com/7056-home_default_retina/kitel-muzhskoj-washington.jpg",
        "Синій": "https://i.abrikos.com/7059-home_default_retina/kitel-muzhskoj-washington.jpg"
      },
      "Жін": {
        "Білий": "https://i.abrikos.com/7064-home_default_retina/kitel-zhenskij-washington.webp",
        "Чорний": "https://i.abrikos.com/7068-home_default_retina/kitel-zhenskij-washington.jpg",
        "Синій": "https://i.abrikos.com/7071-home_default_retina/kitel-zhenskij-washington.jpg"
      }
    },
    "ALICANTE": {
      "Чол": {
        "Чорний": "https://i.abrikos.com/6709-home_default_retina/kitel-muzhskoj-alicanteblack.webp",
        "Білий": "https://i.abrikos.com/7049-home_default_retina/kitel-muzhskoj-alicantewhite.webp"
        },
      "Жін": {
        "Чорний": "https://i.abrikos.com/7300-home_default_retina/kitel-zhenskij-alicanteblack.webp",
        "Білий": "https://i.abrikos.com/7298-home_default_retina/kitel-zhenskij-alicantewhite.webp"
        }
    },
    "LAS VEGAS": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6715-home_default_retina/kitel-muzhskoj-las-vegasblack.webp",
          "Білий": "https://i.abrikos.com/6716-home_default_retina/kitel-muzhskoj-las-vegaswhite.webp",
          "Синій": "https://i.abrikos.com/6793-home_default_retina/kitel-muzhskoj-las-vegasnavy.webp",
          "Сірий": "https://i.abrikos.com/6723-home_default_retina/kitel-muzhskoj-las-vegasgray.webp",
          "Хакі": "https://i.abrikos.com/6717-home_default_retina/kitel-muzhskoj-las-vegaskhaki.webp"
          },
        "Жін": {
            "Чорний": "https://i.abrikos.com/6749-home_default_retina/kitel-zhenskij-las-vegasblack.webp",
            "Білий": "https://i.abrikos.com/6747-home_default_retina/kitel-zhenskij-las-vegaswhite.webp",
            "Синій": "https://i.abrikos.com/6748-home_default_retina/kitel-zhenskij-las-vegasnavy.webp",
            "Сірий": "https://i.abrikos.com/6777-home_default_retina/kitel-zhenskij-las-vegasgray.webp",
            "Хакі": "https://i.abrikos.com/6750-home_default_retina/kitel-zhenskij-las-vegaskhaki.webp"
          }
      },
      "MURANO": {
        "Чол": {
          "Бежевий": "https://i.abrikos.com/6712-home_default_retina/kitel-muzhskoj-muranobeige.webp",
          "Сірий": "https://i.abrikos.com/6711-home_default_retina/kitel-muzhskoj-muranogray.webp"
          },
        "Жін": {
          "Бежевий": "https://i.abrikos.com/6782-home_default_retina/kitel-zhenskij-muranobeige.webp",
          "Сірий": "https://i.abrikos.com/6780-home_default_retina/kitel-zhenskij-muranogray.webp"
          }
      },
      "PORTLAND": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6710-home_default_retina/kitel-muzhskoj-portland.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/6746-home_default_retina/kitel-zhenskij-portland.webp"
          }
      },
      "MILAN": {
        "Чол": {
          "Білий": "https://i.abrikos.com/6961-home_default_retina/kitel-muzhskoj-milan-1.webp",
          "Чорний": "https://i.abrikos.com/6960-home_default_retina/kitel-muzhskoj-milan-1.jpg",
          "Синій": "https://i.abrikos.com/6958-home_default_retina/kitel-muzhskoj-milan-1.jpg"
          },
        "Жін": {
          "Білий": "https://i.abrikos.com/6751-home_default_retina/kitel-zhenskij-10030200_milan.webp",
          "Чорний": "https://i.abrikos.com/6952-home_default_retina/kitel-zhenskij-10030200_milan.jpg",
          "Синій": "https://i.abrikos.com/6946-home_default_retina/kitel-zhenskij-10030200_milan.jpg"
          }
      },
      "NORMAN": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/7717-home_default_retina/kitel-muzhskoj-norman.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7729-home_default_retina/kitel-zhenskij-norman.webp"
          }
      },
      "RIVERSIDE": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/7293-home_default_retina/kitel-muzhskoj-riverside.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7446-home_default_retina/kitel-zhenskij-riverside.webp"
          }
      },
      "FRANKFURT": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/7028-home_default_retina/kitel-muzhskoj-frankfurtblack.webp",
          "Білий": "https://i.abrikos.com/7031-home_default_retina/kitel-muzhskoj-frankfurtwhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7036-home_default_retina/kitel-zhenskij-frankfurtblack.webp",
          "Білий": "https://i.abrikos.com/7041-home_default_retina/kitel-zhenskij-frankfurtwhite.webp"
          }
      },
      "DENVER": {
        "Чол": {
          "Бежевий": "https://i.abrikos.com/6700-home_default_retina/kitel-muzhskoj-denverbeige.webp",
          "Сірий": "https://i.abrikos.com/6701-home_default_retina/kitel-muzhskoj-denvergray.webp"
          },
        "Жін": {
          "Бежевий": "https://i.abrikos.com/6738-home_default_retina/kitel-zhenskij-denverbeige.webp",
          "Сірий": "https://i.abrikos.com/6739-home_default_retina/kitel-zhenskij-denvergray.webp"
          }
      },
      "TEXAS": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6703-home_default_retina/kitel-muzhskoj-texasblack.webp",
          "Білий": "https://i.abrikos.com/6705-home_default_retina/-kitel-muzhskoj-texaswhite.webp",
          "Синій": "https://i.abrikos.com/6726-home_default_retina/kitel-muzhskoj-texasnavy.webp",
          "Сірий": "https://i.abrikos.com/6727-home_default_retina/kitel-muzhskoj-texasgray.webp",
          "Хакі": "https://i.abrikos.com/6704-home_default_retina/kitel-muzhskoj-texaskhaki.webp"
          },
        "Жін": {
            "Чорний": "https://i.abrikos.com/6745-home_default_retina/kitel-zhenskij-texasblack.webp",
            "Білий": "https://i.abrikos.com/6742-home_default_retina/kitel-zhenskij-texaswhite.webp",
            "Синій": "https://i.abrikos.com/6744-home_default_retina/kitel-zhenskij-texasnavy.webp",
            "Сірий": "https://i.abrikos.com/6776-home_default_retina/kitel-zhinochij-texasgray.webp",
            "Хакі": "https://i.abrikos.com/6743-home_default_retina/kitel-zhenskij-texaskhaki.webp"
          }
      },
      "VENEZUELA": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6685-home_default_retina/kitel-muzhskoj-venezuelablack.webp",
          "Білий": "https://i.abrikos.com/6877-home_default_retina/kitel-muzhskoj-venezuelawhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/6763-home_default_retina/kitel-zhenskij-venezuelablack.webp",
          "Білий": "https://i.abrikos.com/6764-home_default_retina/kitel-zhenskij-venezuelawhite.webp"
          }
      },
      "NAPOLI": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6982-home_default_retina/kitel-muzhskoj-napoliblack.webp",
          "Білий": "https://i.abrikos.com/6988-home_default_retina/kitel-muzhskoj-napoliwhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7189-home_default_retina/kitel-zhenskij-napoliblack.webp",
          "Білий": "https://i.abrikos.com/7191-home_default_retina/kitel-zhenskij-napoliwhite.webp"
          }
      },
      "SEATTLE": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6790-home_default_retina/kitel-muzhskoj-seattleblack.webp",
          "Білий": "https://i.abrikos.com/7005-home_default_retina/kitel-muzhskoj-seattlewhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7009-home_default_retina/kitel-zhenskij-seattleblack.webp",
          "Білий": "https://i.abrikos.com/7014-home_default_retina/kitel-zhenskij-seattlewhite.webp"
          }
      },
      "EUROPE": {
        "Чол": {
          "Блакитний": "https://i.abrikos.com/6728-home_default_retina/kitel-muzhskoj-europeblue.webp",
          "Сірий": "https://i.abrikos.com/6729-home_default_retina/kitel-muzhskoj-europegray.webp"
          },
        "Жін": {
          "Блакитний": "https://i.abrikos.com/7282-home_default_retina/kitel-zhenskij-europeblue.webp",
          "Сірий": "https://i.abrikos.com/7279-home_default_retina/kitel-zhenskij-europegray.webp"
          }
      },
      "CAPRI": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6706-home_default_retina/kitel-muzhskoj-capriblack.webp",
          "Білий": "https://i.abrikos.com/6707-home_default_retina/kitel-muzhskoj-capriwhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/6779-home_default_retina/kitel-zhenskij-capriblack.webp",
          "Білий": "https://i.abrikos.com/6778-home_default_retina/kitel-zhenskij-capriwhite.webp"
          }
      },
      "SPARTA": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/7022-home_default_retina/kitel-muzhskoj-spartablack.webp",
          "Білий": "https://i.abrikos.com/7020-home_default_retina/kitel-muzhskoj-spartawhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7017-home_default_retina/kitel-zhenskij-spartablack.webp",
          "Білий": "https://i.abrikos.com/6759-home_default_retina/kitel-zhenskij-spartawhite.webp"
          }
      },
      "CONCORD": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6815-home_default_retina/kitel-muzhskoj-concord.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7309-home_default_retina/kitel-zhenskij-concord.webp"
          }
      },
      "BRATISLAVA": {
        "Чол": {
          "Білий": "https://i.abrikos.com/6719-home_default_retina/kitel-muzhskoj-bratislava.webp",
          "Чорний": "https://i.abrikos.com/6886-home_default_retina/kitel-muzhskoj-bratislava.jpg",
          "Синій": "https://i.abrikos.com/6885-home_default_retina/kitel-muzhskoj-bratislava.jpg"
          },
        "Жін": {
          "Білий": "https://i.abrikos.com/6736-home_default_retina/kitel-zhenskij-bratislava.webp",
          "Чорний": "https://i.abrikos.com/7094-home_default_retina/kitel-zhenskij-bratislava.jpg",
          "Синій": "https://i.abrikos.com/7097-home_default_retina/kitel-zhenskij-bratislava.jpg"
          }
      },
      "MEXICO": {
        "Чол": {
          "Білий": "https://i.abrikos.com/6920-home_default_retina/kitel-muzhskoj-mexico.webp",
          "Чорний": "https://i.abrikos.com/6925-home_default_retina/kitel-muzhskoj-mexico.jpg",
          "Синій": "https://i.abrikos.com/6923-home_default_retina/kitel-muzhskoj-mexico.jpg"
          },
        "Жін": {
          "Білий": "https://i.abrikos.com/6752-home_default_retina/kitel-zhenskij-mexico.webp",
          "Чорний": "https://i.abrikos.com/6933-home_default_retina/kitel-zhenskij-mexico.jpg",
          "Синій": "https://i.abrikos.com/6935-home_default_retina/kitel-zhenskij-mexico.jpg"
          }
      },
      "MOROCCO": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6968-home_default_retina/kitel-muzhskoj-moroccomblack.webp",
          "Білий": "https://i.abrikos.com/6787-home_default_retina/kitel-muzhskoj-moroccowhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/6981-home_default_retina/kitel-zhenskij-moroccoblack.webp",
          "Білий": "https://i.abrikos.com/6976-home_default_retina/kitel-zhenskij-moroccowhite.webp"
          }
      },
      "TORONTO": {
        "Чол": {
          "Білий": "https://i.abrikos.com/6732-home_default_retina/kitel-muzhskoj-toronto111.webp",
          "Чорний": "https://i.abrikos.com/2888-home_default_retina/kitel-muzhskoj-toronto111.jpg",
          "Синій": "https://i.abrikos.com/2886-home_default_retina/kitel-muzhskoj-toronto111.jpg"
          },
        "Жін": {
          "Білий": "https://i.abrikos.com/6773-home_default_retina/kitel-zhenskij-toronto.webp",
          "Чорний": "https://i.abrikos.com/2981-home_default_retina/kitel-zhenskij-toronto.jpg",
          "Синій": "https://i.abrikos.com/2979-home_default_retina/kitel-zhenskij-toronto.jpg"
          }
      },
      "INDIANA": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6914-home_default_retina/kitel-muzhskoj-indiana.jpg",
          "Білий": "https://i.abrikos.com/6733-home_default_retina/kitel-muzhskoj-indiana.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/4514-home_default_retina/kitel-zhenskij-indiana.jpg",
          "Білий": "https://i.abrikos.com/6774-home_default_retina/kitel-zhenskij-indiana.webp"
          }
      },
      "SIDNEY": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6881-home_default_retina/kitel-muzhskoj-sidneyblack.webp",
          "Білий": "https://i.abrikos.com/6999-home_default_retina/kitel-muzhskoj-sidneywhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/6880-home_default_retina/kitel-zhenskij-sidneyblack.webp",
          "Білий": "https://i.abrikos.com/6767-home_default_retina/kitel-zhenskij-sidneywhite.webp"
          }
      },
      "LOS ANGELES": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/6915-home_default_retina/kitel-muzhskoj-los-angelesblack.webp",
          "Білий": "https://i.abrikos.com/6795-home_default_retina/kitel-muzhskoj-los-angeleswhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/6772-home_default_retina/kitel-zhenskij-los-angelesblack.webp",
          "Білий": "https://i.abrikos.com/6770-home_default_retina/-kitel-zhenskij-los-angeleswhite.webp"
          }
      },
      "NEBRASKA": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/7173-home_default_retina/kitel-muzhskoj-nebraskablack.webp",
          "Білий": "https://i.abrikos.com/6794-home_default_retina/kitel-muzhskoj-nebraskawhite.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/6754-home_default_retina/kitel-zhenskij-nebraskablack.webp",
          "Білий": "https://i.abrikos.com/6753-home_default_retina/kitel-zhenskij-nebraskawhite.webp"
          }
      },
      "SANTORINI": {
        "Чол": {
          "Чорний": "https://i.abrikos.com/7155-home_default_retina/kitel-muzhskoj-santorini.jpg",
          "Білий": "https://i.abrikos.com/6734-home_default_retina/kitel-muzhskoj-santorini.webp"
          },
        "Жін": {
          "Чорний": "https://i.abrikos.com/7148-home_default_retina/kitel-zhenskij-santorini.jpg",
          "Білий": "https://i.abrikos.com/6775-home_default_retina/kitel-zhenskij-santorini.webp"
          }
      },
      // брюки
      "GENEVA": {
          "Чорний": "https://i.abrikos.com/7269-home_default_retina/bryuki-geneva.webp"
      },
      "KANZAS": {
          "Чорний": "https://i.abrikos.com/7270-home_default_retina/bryuki-kanzasblack.webp"
      },
      "BREST": {
          "Чорний": "https://i.abrikos.com/6621-home_default_retina/bryuki-brestblack.webp"
      },
      "CARY": {
          "Сірий": "https://i.abrikos.com/7451-home_default_retina/bryuki-cary.webp"
      },
      "CHICO": {
          "Клітка": "https://i.abrikos.com/7343-home_default_retina/bryuki-chico.webp"
      },
      "BALTIMOR": {
          "Бежевий": "https://i.abrikos.com/7374-home_default_retina/bryuki-baltimor-beige.webp",
          "Чорний": "https://i.abrikos.com/7379-home_default_retina/bryuki-baltimor-black.webp"
      },
      "BASEL": {
          "Чорний": "https://i.abrikos.com/7386-home_default_retina/bryuki-baselblack.webp"
      },
      "LINCOLN": {
          "Клітка": "https://i.abrikos.com/7334-home_default_retina/bryuki-lincoln.webp"
      },
      "ARIZONA": {
          "Хакі": "https://i.abrikos.com/7394-home_default_retina/bryuki-arizonakhaki.webp",
          "Чорний": "https://i.abrikos.com/6602-home_default_retina/bryuki-arizonablack.webp",
          "Сірий": "https://i.abrikos.com/7404-home_default_retina/bryuki-arizonagray.webp",
          "Синій": "https://i.abrikos.com/6603-home_default_retina/bryuki-arizonanavy.webp",
          "Меланж": "https://i.abrikos.com/7408-home_default_retina/bryuki-arizonamelange.webp"
      },
      "KENT": {
        "Чорний": "https://i.abrikos.com/7737-home_default_retina/bryuki-kentblack.webp"
    },
    "TURIN": {
        "Бежевий": "https://i.abrikos.com/7340-home_default_retina/bryuki-turinbeige.webp",
        "Чорний": "https://i.abrikos.com/7337-home_default_retina/bryuki-turinblack.webp"
    },
    "BOGOTA": {
        "Сірий": "https://i.abrikos.com/7365-home_default_retina/bryuki-bogotagray.webp",
        "Помаранчевий": "https://i.abrikos.com/7361-home_default_retina/bryuki-bogotaorange.webp",
        "Клітка": "https://i.abrikos.com/7355-home_default_retina/bryuki-bogotacell.webp"
    },
    "AMSTERDAM": {
        "Смужка": "https://i.abrikos.com/7365-home_default_retina/bryuki-bogotagray.webp"
    },
    // фартухи
    "COLORADO": {
        "Смужка": "https://i.abrikos.com/1829-home_default_retina/fartuk-colorado.webp"
    },
    "MONACO": {
        "Чорний": "https://i.abrikos.com/7528-home_default_retina/fartuk-monacoblack.webp",
        "Синій": "https://i.abrikos.com/7555-home_default_retina/fartuk-monaconavy.webp",
        "Сірий": "https://i.abrikos.com/7563-home_default_retina/fartuk-monacogray.webp"
    },
    "TENERIFE": {
        "Чорний": "https://i.abrikos.com/7523-home_default_retina/fartuk-tenerifeblack.webp",
        "Бежевий": "https://i.abrikos.com/7513-home_default_retina/fartuk-tenerifebeige.webp"
    },
    "SAVANNA": {
        "Блакитний": "https://i.abrikos.com/6626-home_default_retina/fartuk-savannablue.webp",
        "Світло-сірий": "https://i.abrikos.com/6627-home_default_retina/fartuk-savannagray.webp"
    },
    "SPARKS": {
        "Чорно-сірий": "https://i.abrikos.com/7542-home_default_retina/fartuk-sparksblack.webp",
        "Синє-сірий": "https://i.abrikos.com/7539-home_default_retina/fartuk-sparksnavy.webp"
    },
    "ALASKA": {
        "Синій": "https://i.abrikos.com/7248-home_default_retina/fartuk-alaskanavy.webp",
        "Сірий": "https://i.abrikos.com/7263-home_default_retina/fartuk-alaskagray.webp",
        "Смужка": "https://i.abrikos.com/7421-home_default_retina/fartuk-alaskastreep.webp",
        "Білий": "https://i.abrikos.com/6630-home_default_retina/fartuk-alaskawhite.webp"
    },
    "BEND": {
        "Чорний": "https://i.abrikos.com/6631-home_default_retina/fartuk-bendblack.webp",
        "Сірий": "https://i.abrikos.com/6632-home_default_retina/fartuk-bendgray.webp",
        "Синій": "https://i.abrikos.com/6633-home_default_retina/fartuk-bendnavy.webp"
    },
    "VANCOUVER": {
        "Хакі": "https://i.abrikos.com/7611-home_default_retina/fartuk-vancouverkhaki.webp",
        "Чорний": "https://i.abrikos.com/7601-home_default_retina/fartuk-vancouverblack.webp",
        "Смужка": "https://i.abrikos.com/6635-home_default_retina/fartuk-vancouverstreep.webp"
    },
    "ASTANA": {
        "Чорний": "https://i.abrikos.com/6617-home_default_retina/fartuk-astana.webp"
    },
    "OREGON": {
        "Чорний": "https://i.abrikos.com/7683-home_default_retina/fartuk-oregonblack.webp",
        "Синій": "https://i.abrikos.com/7693-home_default_retina/fartuk-oregonnavy.webp",
        "Смужка": "https://i.abrikos.com/6636-home_default_retina/fartuk-oregonstrip.webp",
        "Сірий": "https://i.abrikos.com/7685-home_default_retina/fartuk-oregongray.webp"
    },
    "BOSTON": {
        "Чорний": "https://i.abrikos.com/7694-home_default_retina/fartuk-bostonblack.webp",
        "Бежевий": "https://i.abrikos.com/7436-home_default_retina/fartuk-bostonbeige.webp",
        "Смужка": "https://i.abrikos.com/7445-home_default_retina/fartuk-bostonstreep.webp",
        "Синій": "https://i.abrikos.com/7457-home_default_retina/fartuk-bostonnavy.webp"
    },
    "ROME": {
        "Чорний": "https://i.abrikos.com/7667-home_default_retina/fartuk-romeblack.webp",
        "Синій": "https://i.abrikos.com/7674-home_default_retina/fartuk-romenavy.webp"
    },
    "VIRGINIA": {
        "Білий": "https://i.abrikos.com/7628-home_default_retina/fartuk-virginia.webp"
    },
    "DETROIT": {
        "Чорний": "https://i.abrikos.com/7498-home_default_retina/fartuk-detroitblack.webp",
        "Бежевий": "https://i.abrikos.com/7477-home_default_retina/fartuk-detroitbeige.webp",
        "Смужка": "https://i.abrikos.com/7474-home_default_retina/fartuk-detroitstreep.webp",
        "Синій": "https://i.abrikos.com/7488-home_default_retina/fartuk-detroitnavy.webp"
    },
    "LONDON": {
        "Чорний": "https://i.abrikos.com/6639-home_default_retina/fartuk-london.webp"
    },
    "MANILA": {
        "Чорний": "https://i.abrikos.com/6640-home_default_retina/fartuk-manila.webp"
    },
    "MONTERREY": {
        "Чорний": "https://i.abrikos.com/6641-home_default_retina/fartuk-monterrey.webp",
        "Смужка": "https://i.abrikos.com/6642-home_default_retina/fartuk-monterreystrip.webp"
    },
    "VILNIUS": {
        "Чорний": "https://i.abrikos.com/6614-home_default_retina/fartuk-vilnius.webp"
    },
    "COLOMBO": {
        "Чорний": "https://i.abrikos.com/6643-home_default_retina/fartuk-colombo.webp"
    },
    "OTTAWA": {
        "Чорний": "https://i.abrikos.com/6644-home_default_retina/fartuk-ottawa.webp"
    },
    "SIENA": {
        "Чорний": "https://i.abrikos.com/7464-home_default_retina/fartuk-tunika-siena.webp",
        "Синій": "https://i.abrikos.com/7470-home_default_retina/fartuk-tunika-siena.jpg"
    },
    "COPENHAGEN": {
        "Хакі": "https://i.abrikos.com/6646-home_default_retina/fartuk-copenhagenolive.webp",
        "Сірий": "https://i.abrikos.com/6645-home_default_retina/fartuk-copenhagengray.webp"
    },
    // футболки поло
    "Футболка NEVADA": {
        "Білий": "https://i.abrikos.com/4862-home_default_retina/futbolka-nevadawhitee.webp",
        "Чорний": "https://i.abrikos.com/4739-home_default_retina/futbolka-nevadablackk.webp",
        "Сірий": "https://i.abrikos.com/4872-home_default_retina/futbolka-nevadagrayy.webp",
        "Хакі": "https://i.abrikos.com/4873-home_default_retina/futbolka-nevadakhakii.webp"
    },
    "Поло NEW-YORK": {
        "Чол": {
            "Білий": "https://i.abrikos.com/1102-home_default_retina/polo-muzhskoe-new-yorkwhite.webp",
            "Чорний": "https://i.abrikos.com/1104-home_default_retina/-polo-muzhskoe-new-yorkblack.webp",
            "Сірий": "https://i.abrikos.com/1108-home_default_retina/-polo-muzhskoe-new-yorkgray.webp"
          },
          "Жін": {
            "Білий": "https://i.abrikos.com/2607-home_default_retina/polo-zhenskoe-new-yorkwhite.webp",
            "Чорний": "https://i.abrikos.com/2610-home_default_retina/polo-zhenskoe-new-yorkblack.webp",
            "Сірий": "https://i.abrikos.com/2602-home_default_retina/polo-zhenskoe-new-yorkgray.webp"
        }
    },
    "Поло DUBLIN": {
        "Чол": {
            "Білий": "https://i.abrikos.com/1110-home_default_retina/futbolka-muzhskaya-dublinwhite.webp",
            "Чорний": "https://i.abrikos.com/1114-home_default_retina/futbolka-muzhskaya-dublinblack.webp",
            "Сірий": "https://i.abrikos.com/1112-home_default_retina/-futbolka-muzhskaya-dublingray.webp"
          },
          "Жін": {
            "Білий": "https://i.abrikos.com/2612-home_default_retina/futbolka-zhenskaya-dublinwhite.webp",
            "Чорний": "https://i.abrikos.com/2984-home_default_retina/futbolka-zhenskaya-dublinblack.webp",
            "Сірий": "https://i.abrikos.com/2620-home_default_retina/zen-futbolka-dublingray77.webp"
        }
    },
    // обувь
    "Сабо OSLO": {
        "Чорний": "https://i.abrikos.com/7763-home_default_retina/sabo-osloblack.webp",
        "Хакі": "https://i.abrikos.com/5962-home_default_retina/sabo-oslokhaki.webp"
    },
    "Сабо TULSA": {
        "Білий": "https://i.abrikos.com/5957-home_default_retina/sabo-tulsa.webp"
    },
    "Сабо IRVINE": {
        "Чорний": "https://i.abrikos.com/5955-home_default_retina/sabo-irvineblack.webp"
    },
    // свитшот
    "MICHIGAN": {
        "Чорний": "https://i.abrikos.com/7245-home_default_retina/svitshot-michiganblack.webp",
        "Світло-сірий": "https://i.abrikos.com/7246-home_default_retina/svitshot-michigangray.webp",
        "Хакі": "https://i.abrikos.com/7247-home_default_retina/svitshot-michigankhaki.webp"
    },
    // головные уборы
    "Шапка ALABAMA": {
        "Білий": "https://i.abrikos.com/5848-home_default_retina/shapka-alabama.jpg",
        "Чорний": "https://i.abrikos.com/5850-home_default_retina/shapka-alabama.jpg",
        "Сірий": "https://i.abrikos.com/5837-home_default_retina/shapka-alabama.jpg",
        "Меланж": "https://i.abrikos.com/5847-home_default_retina/shapka-alabama.jpg",
        "Пудра": "https://i.abrikos.com/5849-home_default_retina/shapka-alabama.jpg"
    },
    "Повʼязка SOFIA": {
        "Білий": "https://i.abrikos.com/5838-home_default_retina/povyazka-sofia.jpg",
        "Чорний": "https://i.abrikos.com/5841-home_default_retina/povyazka-sofia.jpg",
        "Сірий": "https://i.abrikos.com/5844-home_default_retina/povyazka-sofia.jpg",
        "Бежевий": "https://i.abrikos.com/5842-home_default_retina/povyazka-sofia.jpg",
        "Червоний": "https://i.abrikos.com/5840-home_default_retina/povyazka-sofia.jpg",
        "Світло-сірий": "https://i.abrikos.com/5843-home_default_retina/povyazka-sofia.jpg",
        "Жовтий": "https://i.abrikos.com/5839-home_default_retina/povyazka-sofia.jpg"
    },
    "Бондана DUBAI": {
        "Білий": "https://i.abrikos.com/5902-home_default_retina/bandana-dubai.jpg",
        "Чорний": "https://i.abrikos.com/5896-home_default_retina/bandana-dubai.jpg",
        "Сірий": "https://i.abrikos.com/5890-home_default_retina/bandana-dubai.jpg",
        "Червоний": "https://i.abrikos.com/5901-home_default_retina/bandana-dubai.jpg",
        "Жовтий": "https://i.abrikos.com/5892-home_default_retina/bandana-dubai.jpg",
        "Рожевий": "https://i.abrikos.com/5903-home_default_retina/bandana-dubai.jpg",
        "Блакитний": "https://i.abrikos.com/5895-home_default_retina/bandana-dubai.jpg",
        "Помаранчевий": "https://i.abrikos.com/5891-home_default_retina/bandana-dubai.jpg",
        "Зелений": "https://i.abrikos.com/5897-home_default_retina/bandana-dubai.jpg"
    },
    "Кепка MADAGASKAR": {
        "Чорний": "https://i.abrikos.com/5864-home_default_retina/kepka-madagaskar.jpg",
        "Білий": "https://i.abrikos.com/5865-home_default_retina/kepka-madagaskar.webp"
    },
    "Кепка GRANADA": {
        "Хакі": "https://i.abrikos.com/5914-home_default_retina/kepka-granada.webp"
    },
    "Кепка PALERMO": {
        "Чорний": "https://i.abrikos.com/5871-home_default_retina/kepka-22050003.webp",
        "Сірий": "https://i.abrikos.com/5870-home_default_retina/kepka-22050003.jpg"
    },
    "Кепка RIMINI": {
        "Білий": "https://i.abrikos.com/5874-home_default_retina/kepka-22050004.jpg",
        "Чорний": "https://i.abrikos.com/5877-home_default_retina/kepka-22050004.jpg",
        "Сірий": "https://i.abrikos.com/5875-home_default_retina/kepka-22050004.jpg",
        "Синій": "https://i.abrikos.com/5876-home_default_retina/kepka-22050004.jpg"
    },
    "Панама HONG KONG": {
        "Темний-беж": "https://i.abrikos.com/1137-home_default_retina/golovnoj-ubor-panama-hong-kongbeige.webp",
        "Сірий": "https://i.abrikos.com/1138-home_default_retina/golovnoj-ubor-panama-hong-konggray.webp",
        "Помаранчевий": "https://i.abrikos.com/1139-home_default_retina/golovnoj-ubor-panama-hong-kongorange.webp"
    },
    "Таблетка KABUL": {
        "Чорний": "https://i.abrikos.com/5858-home_default_retina/tabletka-kabul.webp",
        "Білий": "https://i.abrikos.com/5859-home_default_retina/tabletka-kabul.jpg"
    },
    "Гриб PARIS": {
        "Чорний": "https://i.abrikos.com/5873-home_default_retina/grib-standart-paris.jpg",
        "Білий": "https://i.abrikos.com/5872-home_default_retina/grib-standart-paris.webp"
    },
    // носки
    "Набір LION": {
        "Набір": "https://i.abrikos.com/6044-home_default_retina/nabor-noskov-lion.webp"
    },
    "Набір ABRIKOS": {
        "Набір": "https://i.abrikos.com/5982-home_default_retina/nabor-noskov-abrikos.webp"
    },
    "Набір BLACK": {
        "Набір": "https://i.abrikos.com/5990-home_default_retina/nabor-noskov-black.webp"
    },
    "Набір GRAY": {
        "Набір": "https://i.abrikos.com/6055-home_default_retina/nabor-noskov-gray.webp"
    },
    "Набір SPIDER": {
        "Набір": "https://i.abrikos.com/6011-home_default_retina/nabor-noskov-spider.webp"
    },
    "Набір TATTO": {
        "Набір": "https://i.abrikos.com/5963-home_default_retina/nabor-noskov-tattoo.webp"
    },
    "Набір DEMON": {
        "Набір": "https://i.abrikos.com/6002-home_default_retina/nabor-noskov-demon.webp"
    },
    "Набір EGG": {
        "Набір": "https://i.abrikos.com/6022-home_default_retina/nabor-noskov-egg.webp"
    },
    "Набір MUHOMOR": {
        "Набір": "https://i.abrikos.com/6033-home_default_retina/nabor-noskov-muhomor.webp"
    },
    "Набір RACCON": {
        "Набір": "https://i.abrikos.com/6066-home_default_retina/nabor-noskov-raccon.webp"
    },


  };
  

const existingProductIds = new Set(); // ← сюда будем сохранять ID уже загруженных блоков
function restartLogoAnimation() {
    const svg = document.getElementById("animated-logo");
    const clonedSvg = svg.cloneNode(true);
    svg.parentNode.replaceChild(clonedSvg, svg);
}
const loginButton = document.querySelector("button"); // або конкретніше: #login-button
loginButton.addEventListener("click", () => {
    const login = document.querySelector("#rest-name").value.trim();
    if (!login) return;

    restartLogoAnimation(); 

    // Покажемо завантаження
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.remove("hidden-for-loading");

    // Спробуємо завантажити дані
    fetchUserData(login);
});


    const addHumanButton = document.querySelector(".button-add-human");
    const formContainer = document.querySelector("#form-container");
    const saveButton = document.querySelector(".button-save-form");
    // списки с продуктами(список с названиеми продуктов)
    const productSelect = document.querySelector("#product-list");
    const productArticleSelect = document.querySelector("#product-list-article");
    const productSizeSelect = document.querySelector("#product-list-size");
    const genderSelect = document.querySelector("#gender");
    const startMessage = document.querySelector("#start-message");
    let loginIsValid = false;
    let sizes = [];
    let oldName = "";
    let oldGender = "";


    const productArticlesMap = {
    "Кітель": [
        "CLOVIS", "WASHINGTON", "ALICANTE", "LAS VEGAS", "MURANO", "PORTLAND", "MILAN", "NORMAN", "RIVERSIDE",
        "FRANKFURT", "DENVER", "TEXAS", "VENEZUELA", "NAPOLI", "SEATTLE", "EUROPE", "CAPRI", "CONCORD",
        "SPARTA", "BRATISLAVA", "MEXICO", "MOROCCO", "TORONTO", "INDIANA", "SIDNEY", "LOS ANGELES", "NEBRASKA",
        "SANTORINI"
    ],
    "Брюки": [
        "GENEVA", "KANZAS", "BREST", "CARY", "CHICO", "BALTIMOR", "BASEL", "LINCOLN", "ARIZONA", "KENT",
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
        "Кітель": ["Не знаю", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
        "Брюки": ["Не знаю", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
        "Фартук":{
            "BOSTON": ["M", "L"],
            "DETROIT": ["M", "L"],
            "SIENA": ["M", "L"],
            "COLORADO": ["0"],
            "ASTANA": ["0"],
            "LONDON": ["0"],
            "MANILA": ["0"],
            "VILNIUS": ["0"],
            "COLOMBO": ["0"],
            "OTTAWA": ["0"],
            "MONACO": ["0"],
            "ROME": ["0"],
            "VIRGINIA": ["0"],
            "TENERIFE": ["0"],
            "SAVANNA": ["0"],
            "SPARKS": ["0"],
            "ALASKA": ["0"],
            "BEND": ["0"],
            "VANCOUVER": ["0"],
            "OREGON": ["0"],
            "MONTERREY": ["0"],
            "COPENHAGEN": ["0"]
        },
        "Головний убір": ["0"],
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
        if (!loginIsValid) {
            const errorMessage = document.querySelector("#custom-message-error");
            errorMessage.classList.add("show");
            setTimeout(() => errorMessage.classList.remove("show"), 3000);
            return;
        }
        const formData = getFormData();
        if (!formData) return;
    
        if (editTarget && editTarget instanceof Element) {
            const oldName = editTarget.querySelector(".info-name")?.textContent;
            const oldGender = editTarget.querySelector(".info-gender")?.textContent;
            const nameChanged = oldName !== formData.name;
            const genderChanged = oldGender !== formData.gender;
        
            document.querySelectorAll(".info-block-product").forEach(block => {
                const currentName = block.querySelector(".info-name")?.textContent;
                const currentGender = block.querySelector(".info-gender")?.textContent;
        
                if (currentName === oldName && currentGender === oldGender) {
                    // Оновити дані в DOM
                    block.querySelector(".info-name").textContent = formData.name;
                    block.querySelector(".info-gender").textContent = formData.gender;
        
                    const container = block.closest(".human-block");
                    if (container) {
                        const nameHeader = container.querySelector(".info-container-first");
                        if (nameHeader) nameHeader.textContent = `${formData.name}_${formData.gender}`;
                    }
                    const updateData = {
                        product: block.querySelector(".info-product").textContent,
                        productName: block.querySelector(".info-productName").textContent,
                        color: block.querySelector(".info-color").textContent,
                        quantityItems: block.querySelector(".info-quantityItems").textContent,
                        productSize: block.querySelector(".info-productSize").textContent,
                        chestSize: block.querySelector(".info-chestSize").textContent.replace(" см", ""),
                        qualityLogo: block.querySelector(".info-qualityLogo").textContent,
                        qualityEmbroideries: block.querySelector(".info-qualityEmbroideries").textContent,
                        id: block.dataset.id,
                        name: formData.name,
                        gender: formData.gender,
                        oldName,
                        oldGender
                    };
                    sendToGoogleSheet(updateData);
                }
            });
        
            updateProductBlock(editTarget, formData);
            existingProductIds.add(formData.id);
            sendToGoogleSheet(formData);
        } else if (editTarget && editTarget.container) {
            // Додавання виробу
            const newProduct = createProductBlock(formData);
            editTarget.container.appendChild(newProduct);
        } else {
            // Додавання нової людини
            createHumanBlock(formData);

        }
    
        // Сховати форму
        sendToGoogleSheet(formData);
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
        let productId = editTarget instanceof Element ? editTarget.dataset.id : crypto.randomUUID();
        if (editTarget && editTarget instanceof HTMLElement && editTarget.dataset?.id) {
            productId = editTarget.dataset.id;
        }
        

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


        return { name, gender, product, productName, color, quantityItems, productSize, chestSize, qualityLogo, qualityEmbroideries, id: productId };
    }

    const cancelButton = document.querySelector("#cancel-button");

    cancelButton.addEventListener("click", () => {
        const formContainer = document.querySelector("#form-container");
        formContainer.classList.add("hidden");
    
        // Показати всі блоки назад
        document.querySelectorAll(".human-block").forEach(h => h.classList.remove("hidden"));
        document.querySelectorAll(".add-product").forEach(btn => btn.classList.remove("hidden"));
    
        resetForm(formContainer);
        editTarget = null;
    });
    
    
    

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

        block.dataset.id = data.id;

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

            const id = block.dataset.id;
            deleteFromGoogleSheet(id);
        
            block.remove();

            const remainingProducts = productsContainer.querySelectorAll(".info-block-product");
        
            if (remainingProducts.length === 0) {
                humanBlock.remove();
            
                // Перевірити: чи залишилось ще хоч щось?
                const remainingHumans = document.querySelectorAll(".human-block");
                if (remainingHumans.length === 0) {
                    startMessage.classList.remove("hidden");
                    startMessage.innerHTML = `
                        <span class="message-span">👨‍🍳 Пора навести стиль на кухні! </span>
                        Додай перший комплект, натиснувши <strong>«Додати людину» 👇</strong><br />
                    `;
                }
            }
            
        });

        const imgCont = document.createElement("div");
        imgCont.classList.add("img-container");
        
        const productImg = document.createElement("img");
        
        const product = data.product;
        const productName = data.productName;
        const color = data.color;
        const genderRaw = data.gender; // "Чол" або "Жін"
        const gender = normalizeGender(genderRaw); // male / female
        
        const productFolderMap = {
            "Кітель": "kitel",
            "Фартук": "fartuk",
            "Взуття": "vzuttia",
            "Поло, Футболки": "polo",
            "Головний убір": "golovniy-ubir",
            "Брюки": "bryuky",
            "Світшот": "svitshot",
            "Шкарпетки": "shkarpetky"
        };
        
        const genderSensitive = ["Кітель", "Поло, Футболки"];
        const folder = productFolderMap[product] || "misc";
        
        let imagePath = "";
        
        // 🧠 1. Пробуємо знайти посилання по гендеру + кольору
        if (imageURLMap[productName] &&
            imageURLMap[productName][genderRaw] &&
            imageURLMap[productName][genderRaw][color]) {
                
            imagePath = imageURLMap[productName][genderRaw][color];
            console.log("🟢 Завантажено по гендеру:", imagePath);
        }
        
        // 🧠 2. Якщо нема по гендеру — пробуємо без гендеру
        else if (imageURLMap[productName] &&
                 imageURLMap[productName][color]) {
            imagePath = imageURLMap[productName][color];
            console.log("🟢 Завантажено без гендеру:", imagePath);
        }
        
        // 📁 3. Якщо нічого — локальна картинка
        if (!imagePath) {
            const normalizedName = normalize(productName);
            const normalizedColor = normalize(color);
            if (genderSensitive.includes(product)) {
                imagePath = `./images/${folder}/${gender}/${normalizedName}_${normalizedColor}.jpg`;
            } else {
                imagePath = `./images/${folder}/${normalizedName}_${normalizedColor}.jpg`;
            }
            console.log("📁 Фолбек на локальну картинку:", imagePath);
        }
        
        
        productImg.src = imagePath;
        productImg.alt = `${productName} - ${color}`;
        productImg.classList.add("product-image");
        
        // 🔁 Якщо не завантажилось — fallback на placeholder
        productImg.onerror = function () {
            this.src = './images/placeholder.jpg';
            console.warn("❌ Не вдалося завантажити:", imagePath);
        };
        
        imgCont.appendChild(productImg);
        block.querySelector(".info-block-second").appendChild(imgCont);
        
        
        

        console.log("productName:", data.productName, "→", productName);
        console.log("color:", data.color, "→", color);
        console.log("gender:", data.gender, "→", gender);
        console.log("path:", imagePath);
        
        
        productImg.src = imagePath;
        productImg.alt = `${data.productName} - ${data.color}`;
        productImg.classList.add("product-image");
        
        productImg.onerror = function () {
            this.src = './images/placeholder.jpg';
        };
        imgCont.appendChild(productImg);
        block.querySelector(".info-block-second").appendChild(imgCont);
        

        return block;
    }

    function updateProductBlock(block, data) {
        const humanBlock = block.closest(".human-block");
    
        if (humanBlock) {
            const nameBlock = humanBlock.querySelector(".info-container-first");
            if (nameBlock) {
                nameBlock.textContent = `${data.name}_${data.gender}`;
            }
    
            // Оновити приховані дані у всіх продуктах
            humanBlock.querySelectorAll(".info-name").forEach(el => el.textContent = data.name);
            humanBlock.querySelectorAll(".info-gender").forEach(el => el.textContent = data.gender);
        }
    
        const newBlock = createProductBlock(data);
        block.replaceWith(newBlock);
    }
    
    
    
    function fillFormWithData(block) {
        const name = block.querySelector(".info-name").textContent;
        const gender = block.querySelector(".info-gender").textContent;
        const product = block.querySelector(".info-product").textContent;
        const productName = block.querySelector(".info-productName").textContent;
        const color = block.querySelector(".info-color").textContent;
        const size = block.querySelector(".info-productSize").textContent;
    
        document.querySelector(".input-name-human").value = name;
        document.querySelector("#gender").value = gender;
    
        // Обновить список артикулів
        productSelect.value = product;
        const articleOptions = productArticlesMap[product] || [];
        productArticleSelect.innerHTML = `<option value=""></option>`;
        articleOptions.forEach(article => {
            const option = document.createElement("option");
            option.value = article;
            option.textContent = article;
            productArticleSelect.appendChild(option);
        });
        productArticleSelect.value = productName;
    
        // Обновить список кольорів
        productColor.innerHTML = `<option value=""></option>`;
        const colors = colorMapByProduct[product]?.[productName] || [];
        colors.forEach(c => {
            const option = document.createElement("option");
            option.value = c;
            option.textContent = c;
            productColor.appendChild(option);
        });
        productColor.value = color;
    
        // Обновить список розмірів
        productSizeSelect.innerHTML = `<option value=""></option>`;
        let sizes = [];
        const sizesMap = {
            "Кітель": ["Не знаю", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
            "Брюки": ["Не знаю", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62"],
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
    
        if (Array.isArray(sizesMap[product])) {
            sizes = sizesMap[product];
        } else if (typeof sizesMap[product] === "object") {
            const sizeEntry = sizesMap[product][productName];
            if (Array.isArray(sizeEntry)) {
                sizes = sizeEntry;
            } else if (typeof sizeEntry === "object" && sizeEntry[gender]) {
                sizes = sizeEntry[gender];
            }
        }
    
        sizes.forEach(s => {
            const option = document.createElement("option");
            option.value = s;
            option.textContent = s;
            productSizeSelect.appendChild(option);
        });
        productSizeSelect.value = size;
    
        // Остальные поля
        document.querySelector("#quality-items").value = block.querySelector(".info-quantityItems").textContent;
        document.querySelector("#product-list-size").value = block.querySelector(".info-productSize").textContent;
        document.querySelector("#chest-size").value = block.querySelector(".info-chestSize").textContent.replace(" см", "");
        document.querySelector("#quality-logo").value = block.querySelector(".info-qualityLogo").textContent;
        document.querySelector("#quality-embroideries").value = block.querySelector(".info-qualityEmbroideries").textContent;
    
        oldName = block.querySelector(".info-name").textContent;
        oldGender = block.querySelector(".info-gender").textContent;

        editTarget = block;
    }
    
    

    function resetForm(container) {
        container.querySelectorAll("input, select").forEach(el => el.value = "");
    }

    const sendButton = document.querySelector(".button-send-form");

// sendButton.addEventListener("click", function () {
//     const restaurantName = document.querySelector("#rest-name").value;
//     const humanBlocks = document.querySelectorAll(".human-block");

//     humanBlocks.forEach(human => {
//         const nameGender = human.querySelector(".info-container-first").textContent.split("_");
//         const name = nameGender[0];
//         const gender = nameGender[1];

//         const products = human.querySelectorAll(".info-block-product");

//         products.forEach(product => {
//             const id = product.dataset.id;
    
//             // Проверка: если уже есть такой ID, не отправляем
//             if (existingProductIds.has(id)) return;

//             const data = {
//                 restaurantName,
//                 name,
//                 gender,
//                 product: product.querySelector(".info-product").textContent,
//                 productName: product.querySelector(".info-productName").textContent,
//                 color: product.querySelector(".info-color").textContent,
//                 quantityItems: product.querySelector(".info-quantityItems").textContent,
//                 productSize: product.querySelector(".info-productSize").textContent,
//                 chestSize: product.querySelector(".info-chestSize").textContent.replace(" см", ""),
//                 qualityLogo: product.querySelector(".info-qualityLogo").textContent,
//                 qualityEmbroideries: product.querySelector(".info-qualityEmbroideries").textContent
//             };

//             // // Викликаємо функцію надсилання:
//             // sendToGoogleSheet(data);
//         });
//     });

//     if (humanBlocks.length === 0) {
//         const successMessage = document.querySelector("#custom-message-error");
//         successMessage.classList.add("show");
//             setTimeout(() => {
//                 successMessage.classList.remove("show");
//             }, 2000);
//         return;
//     } else if (humanBlocks.length >= 1) {
//         const successMessage = document.querySelector("#custom-message");
//         successMessage.classList.add("show");
//             setTimeout(() => {
//                 successMessage.classList.remove("show");
//             }, 8000);
//     }

//     document.querySelectorAll(".human-block").forEach(block => block.remove());
//     startMessage.classList.remove("hidden");
//     startMessage.innerHTML = `
//         <span class="message-span">👨‍🍳 Пора навести стиль на кухні! </span>
//         Додай перший комплект, натиснувши <strong>«Додати людину» 👇</strong><br />
//     `;
//     console.log("✅ Trying to show success message");

//     setTimeout(() => {
//         location.reload();
//     }, 8000);

//     return;
// });

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxVLDLEEQtlBKBYOLv-jj5FEvJ5uVRgKAy0i0VsiLytZIXvV3kammuwKP62c2RvdmjR/exec";

function sendToGoogleSheet(data) {
    const login = localStorage.getItem("userLogin");
    if (!loginIsValid) {
        console.warn("🚫 Спроба збереження без валідного логіну!");
        return;
    }
    
    data.login = login;
    if (!data.id) data.id = crypto.randomUUID(); // або Date.now().toString()

    data.oldName = oldName;
    data.oldGender = oldGender;
    data.action = "update";

    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        console.log("✅ Дані збережено:", data);
    }).catch(err => {
        console.error("❌ Помилка надсилання:", err);
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
    if (!loginIsValid) {
        const errorMessage = document.querySelector("#custom-message-error");
        errorMessage.classList.add("show");
        setTimeout(() => errorMessage.classList.remove("show"), 3000);
        return;
    }
    startMessage.classList.add("hidden");
});


function fetchUserData(login) {
    fetch(`${GOOGLE_SCRIPT_URL}?login=${encodeURIComponent(login)}`)
        .then(res => res.text())
        .then(text => {
            console.log("🔍 СЕРВЕР ВІДПОВІВ:", text);
            let data;
            try {
              data = JSON.parse(text);
            } catch (e) {
              console.error("❌ JSON parsing error:", e);
              return;
            }

            if (data?.error === "login_not_found") {
                loginIsValid = false;

                const errorMessage = document.querySelector("#custom-message-error");
                errorMessage.classList.add("show");
                setTimeout(() => errorMessage.classList.remove("show"), 4000);

                document.getElementById("loading-screen").classList.add("hidden-for-loading");
                return;
            }

            loginIsValid = true;
            localStorage.setItem("userLogin", login);

            // ⏳ Показати вітання
            setTimeout(() => {
                document.getElementById("loading-screen").classList.add("hidden-for-loading");
                document.getElementById("login-button").style.display = "none";

                const welcomeText = document.createElement("div");
                welcomeText.classList.add("welcome-message");
                welcomeText.textContent = `✨ Вітаємо у системі, ${login}!`;
                document.getElementById("login-button").parentElement.appendChild(welcomeText);
            }, 2500);

            const humanMap = new Map();

            data.forEach(row => {
                const [ , name, gender, product, productName, color, quantityItems, productSize, chestSize, qualityLogo, qualityEmbroideries, id] = row;

                if (!name || gender === "" || !product || !productName) return;

                const formData = { name, gender, product, productName, color, quantityItems, productSize, chestSize, qualityLogo, qualityEmbroideries, id };
                existingProductIds.add(id);

                const key = `${name}_${gender}`;
                if (!humanMap.has(key)) humanMap.set(key, []);
                humanMap.get(key).push(formData);
            });

            humanMap.forEach((items, key) => {
                const [firstItem, ...restItems] = items;
                createHumanBlock(firstItem);

                const container = Array.from(document.querySelectorAll(".human-block")).find(b =>
                    b.querySelector(".info-container-first").textContent === `${firstItem.name}_${firstItem.gender}`
                ).querySelector(".products-container");

                restItems.forEach(data => {
                    container.appendChild(createProductBlock(data));
                });
            });

            const humanBlocks = document.querySelectorAll(".human-block");
            const startMessage = document.querySelector("#start-message");

            if (humanBlocks.length === 0) {
                startMessage.classList.remove("hidden");
                startMessage.innerHTML = `
                    <span class="message-span">👨‍🍳 Пора навести стиль на кухні! </span>
                    Додай перший комплект, натиснувши <strong>«Додати людину» 👇</strong><br />
                `;
                document.getElementById("addHumanBtnInline")?.addEventListener("click", () => {
                    addHumanButton.click();
                });
            } else {
                startMessage.classList.add("hidden");
            }
        })
        .catch(err => {
            loginIsValid = false;
            console.error("❌ fetchUserData error:", err);
        });
}




function deleteFromGoogleSheet(id) {
    const login = localStorage.getItem("userLogin");

    const formData = new FormData();
    
    if (id) {
        formData.append("id", id);
    } else {
        formData.append("login", login);
    }

    formData.append("action", "delete");

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        console.log("🗑️ Дані видалені з Google Sheets:", id || login);
    }).catch(err => {
        console.error("❌ Помилка при видаленні з Google Sheets:", err);
    });
}

document.addEventListener("click", function (e) {
    const block = e.target.closest(".info-block-first");
    if (!block) return;

    // toggle 'open'
    block.classList.toggle("open");

    const products = block.nextElementSibling;
    if (products && products.classList.contains("products-container")) {
      if (block.classList.contains("open")) {
        products.style.maxHeight = products.scrollHeight + "px";
        products.style.opacity = "1";
      } else {
        products.style.maxHeight = "0";
        products.style.opacity = "0";
      }
    }
  });

  function normalize(str) {
    return str
        .toLowerCase()
        .replaceAll(" ", "_")
        .replace(/а/g, "a")
        .replace(/б/g, "b")
        .replace(/в/g, "v")
        .replace(/г/g, "h")
        .replace(/ґ/g, "g")
        .replace(/д/g, "d")
        .replace(/е/g, "e")
        .replace(/є/g, "ie")
        .replace(/ж/g, "zh")
        .replace(/з/g, "z")
        .replace(/и/g, "y")
        .replace(/і/g, "i")
        .replace(/ї/g, "i")
        .replace(/й/g, "i")
        .replace(/к/g, "k")
        .replace(/л/g, "l")
        .replace(/м/g, "m")
        .replace(/н/g, "n")
        .replace(/о/g, "o")
        .replace(/п/g, "p")
        .replace(/р/g, "r")
        .replace(/с/g, "s")
        .replace(/т/g, "t")
        .replace(/у/g, "u")
        .replace(/ф/g, "f")
        .replace(/х/g, "kh")
        .replace(/ц/g, "ts")
        .replace(/ч/g, "ch")
        .replace(/ш/g, "sh")
        .replace(/щ/g, "shch")
        .replace(/ю/g, "iu")
        .replace(/я/g, "ia")
        .replace(/ь/g, "")
        .replace(/’/g, "")
        .replace(/[^\w]/g, "");
}


function normalizeGender(gender) {
    return gender === "Чол" ? "male" : gender === "Жін" ? "female" : "";
}


});