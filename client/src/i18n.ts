import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      company: {
        name: "High Tech",
        tagline: "Global Software Engineering Agency",
        description: "Transforming visionary ideas into premium, scalable software solutions.",
        mission: "We build the technology that drives modern industry forward.",
        hq: "Almaty, Kazakhstan",
        email: "q19.almaz@gmail.com"
      },
      nav: {
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        talk: "Let's Talk"
      },
      hero: {
        badge: "Global Software Engineering Agency",
        titleStart: "We architect the digital",
        titleHighlight: "future",
        titleEnd: "",
        description: "Transforming visionary ideas into premium, scalable software solutions. We build the technology that drives modern industry forward.",
        cta: "View Our Work",
        scroll: "Scroll"
      },
      services: {
        title: "Our Services",
        subtitle: "Expert solutions tailored to your needs",
        items: [
          {
            title: "Web Development",
            description: "Custom web applications built with cutting-edge technologies and scalable architecture."
          },
          {
            title: "Mobile Apps",
            description: "Native and cross-platform mobile solutions that engage and delight users."
          },
          {
            title: "Cloud Solutions",
            description: "Secure, scalable cloud infrastructure optimized for performance and cost."
          },
          {
            title: "AI & Machine Learning",
            description: "Intelligent systems that automate processes and unlock business insights."
          }
        ]
      },
      portfolio: {
        title: "Our Work",
        subtitle: "Premium projects that showcase our expertise",
        viewProject: "View Project"
      },
      contact: {
        title: "Let's Build Something Amazing",
        subtitle: "Get in touch with our team",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
        required: "This field is required",
        invalidEmail: "Please enter a valid email address"
      },
      about: {
        subtitle: "Who's behind the work",
        title: "About Me",
        bio: "Backend-focused software engineer with 4+ years of experience building scalable APIs, data pipelines, and distributed systems. Computer Science graduate from Nazarbayev University.",
        educationLabel: "Education",
        skillsLabel: "Technical Skills",
        connectLabel: "Connect",
        experienceLabel: "Experience",
        skillCategories: {
          languages: "Languages",
          frameworks: "Frameworks",
          tools: "Tools & Infrastructure"
        },
        experience: [
          {
            company: "Investlink Ltd.",
            role: "Backend Developer",
            period: "June 2025 – Present",
            location: "Almaty, Kazakhstan",
            bullets: [
              "Built a fault-tolerant market-data ingestion pipeline from Alpaca (SSE/webhooks); sustained 25k events/min with gap detection + replay.",
              "Optimized PostgreSQL for time-series reads; reduced heavy-query latency by 55% and CPU by 30%.",
              "Hardened API security with JWT/OAuth2, RBAC, per-tenant rate limits; blocked 20% unauthorized requests."
            ]
          },
          {
            company: "Intelligent Punks",
            role: "Backend / ML Developer",
            period: "Feb 2025 – Jun 2025",
            location: "Cyprus, Remote",
            bullets: [
              "Designed Python microservices (FastAPI/DRF) across 4+ services; load-tested peak of 12k req/s.",
              "Built async PostgreSQL data layer with SQLAlchemy + asyncpg; sustained 2.5k QPS and cut heavy report times by 23%."
            ]
          },
          {
            company: "Q19",
            role: "Backend Developer",
            period: "May 2023 – Apr 2024",
            location: "Astana, Kazakhstan",
            bullets: [
              "Built and shipped REST APIs using async Python (Sanic) for 1,000+ users.",
              "Integrated Telegram bot and website with backend; implemented background jobs with Celery and Redis."
            ]
          },
          {
            company: "PythonRPA",
            role: "Fullstack Developer",
            period: "Nov 2021 – Apr 2023",
            location: "Almaty, Kazakhstan",
            bullets: [
              "Improved CSV entity-matching with Levenshtein distance; cut runtime by 14% and improved accuracy by 17.4%.",
              "Built data-processing pipelines with pandas to process 10,000+ labor records."
            ]
          }
        ]
      },
      footer: {
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us"
      }
    }
  },
  ru: {
    translation: {
      company: {
        name: "High Tech",
        tagline: "Глобальное агентство инженерии программного обеспечения",
        description: "Превращение амбициозных идей в премиум-решения масштабируемого ПО.",
        mission: "Мы создаём технологии, которые движут современную промышленность вперёд.",
        hq: "Алматы, Казахстан",
        email: "q19.almaz@gmail.com"
      },
      nav: {
        about: "Обо мне",
        services: "Услуги",
        portfolio: "Портфолио",
        talk: "Давайте обсудим"
      },
      hero: {
        badge: "Глобальное агентство инженерии программного обеспечения",
        titleStart: "Мы архитектируем цифровое",
        titleHighlight: "будущее",
        titleEnd: "",
        description: "Превращение амбициозных идей в премиум-решения масштабируемого ПО. Мы создаём технологии, которые движут современную промышленность вперёд.",
        cta: "Смотреть портфолио",
        scroll: "Прокрутить"
      },
      services: {
        title: "Наши услуги",
        subtitle: "Экспертные решения под ваши нужды",
        items: [
          {
            title: "Веб-разработка",
            description: "Пользовательские веб-приложения с новейшими технологиями и масштабируемой архитектурой."
          },
          {
            title: "Мобильные приложения",
            description: "Нативные и кроссплатформенные решения, которые привлекают и удовлетворяют пользователей."
          },
          {
            title: "Облачные решения",
            description: "Безопасная, масштабируемая облачная инфраструктура, оптимизированная по производительности и стоимости."
          },
          {
            title: "AI и машинное обучение",
            description: "Интеллектуальные системы, которые автоматизируют процессы и раскрывают деловые возможности."
          }
        ]
      },
      portfolio: {
        title: "Наши работы",
        subtitle: "Премиум-проекты, демонстрирующие нашу экспертизу",
        viewProject: "Посмотреть проект"
      },
      contact: {
        title: "Давайте создадим что-то потрясающее",
        subtitle: "Свяжитесь с нашей командой",
        name: "Имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить сообщение",
        sending: "Отправка...",
        success: "Сообщение успешно отправлено!",
        error: "Ошибка при отправке. Пожалуйста, повторите попытку.",
        required: "Это поле обязательно",
        invalidEmail: "Пожалуйста, введите корректный адрес электронной почты"
      },
      about: {
        subtitle: "Кто за этим стоит",
        title: "Обо мне",
        bio: "Backend-разработчик с 4+ годами опыта в построении масштабируемых API, конвейеров данных и распределённых систем. Выпускник Назарбаев Университета по специальности «Информатика».",
        educationLabel: "Образование",
        skillsLabel: "Технические навыки",
        connectLabel: "Связаться",
        experienceLabel: "Опыт работы",
        skillCategories: {
          languages: "Языки",
          frameworks: "Фреймворки",
          tools: "Инструменты и инфраструктура"
        },
        experience: [
          {
            company: "Investlink Ltd.",
            role: "Backend-разработчик",
            period: "Июнь 2025 – настоящее время",
            location: "Алматы, Казахстан",
            bullets: [
              "Создал отказоустойчивый конвейер ingestion данных от Alpaca (SSE/webhooks); выдержал 25k событий/мин с функцией обнаружения пробелов и повторной воспроизводки.",
              "Оптимизировал PostgreSQL для чтения временных рядов; снизил задержку тяжёлых запросов на 55%, CPU на 30%.",
              "Усилил безопасность API: JWT/OAuth2, RBAC, лимиты на тенант; заблокировал 20% несанкционированных запросов."
            ]
          },
          {
            company: "Intelligent Punks",
            role: "Backend / ML-разработчик",
            period: "Фев 2025 – Июнь 2025",
            location: "Кипр, удалённо",
            bullets: [
              "Разработал Python-микросервисы (FastAPI/DRF) для 4+ сервисов; нагрузочное тестирование — пик 12k запросов/сек.",
              "Построил асинхронный слой данных PostgreSQL с SQLAlchemy + asyncpg; 2.5k QPS, ускорение тяжёлых отчётов на 23%."
            ]
          },
          {
            company: "Q19",
            role: "Backend-разработчик",
            period: "Май 2023 – Апр 2024",
            location: "Астана, Казахстан",
            bullets: [
              "Разработал REST API на async Python (Sanic) для 1,000+ пользователей.",
              "Интегрировал Telegram-бот и сайт с backend-сервисами; фоновые задачи через Celery и Redis."
            ]
          },
          {
            company: "PythonRPA",
            role: "Fullstack-разработчик",
            period: "Ноя 2021 – Апр 2023",
            location: "Алматы, Казахстан",
            bullets: [
              "Улучшил сопоставление CSV-сущностей с расстоянием Левенштейна: время выполнения −14%, точность +17.4%.",
              "Создал конвейеры обработки данных с pandas для 10,000+ записей."
            ]
          }
        ]
      },
      footer: {
        rights: "Все права защищены.",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        contact: "Связаться с нами"
      }
    }
  },
  kk: {
    translation: {
      company: {
        name: "High Tech",
        tagline: "Жаһандық бағдарламалық инженерлік агенттік",
        description: "Жаңашыл идеяларды премиум, масштабталатын бағдарламалық шешімдерге айналдыру.",
        mission: "Біз қазіргі заманауи индустрияны алға апаратын технологияларды құраймыз.",
        hq: "Алматы, Қазақстан",
        email: "q19.almaz@gmail.com"
      },
      nav: {
        about: "Мен туралы",
        services: "Қызметтер",
        portfolio: "Портфолио",
        talk: "Сөйлесейік"
      },
      hero: {
        badge: "Жаһандық бағдарламалық инженерлік агенттік",
        titleStart: "Біз цифрлық",
        titleHighlight: "болашақты",
        titleEnd: "қалыптастырамыз",
        description: "Жаңашыл идеяларды премиум, масштабталатын бағдарламалық шешімдерге айналдыру. Біз қазіргі заманауи индустрияны алға апаратын технологияларды құраймыз.",
        cta: "Портфолиомызды қарау",
        scroll: "Айналдыру"
      },
      services: {
        title: "Біздің қызметтер",
        subtitle: "Сіздің қажеттіліктеріңіз үшін сарапты шешімдер",
        items: [
          {
            title: "Веб-әзірлеу",
            description: "Ең жаңа технологиялар және масштабталатын архитектурасы бар арнайы веб-қосымшалар."
          },
          {
            title: "Мобильді қосымшалар",
            description: "Пайдаланушыларды тартатын және қанағаттандыратын нативті және кросс-платформалық шешімдер."
          },
          {
            title: "Cloud шешімдер",
            description: "Өнімділік пен құны бойынша оңтайландырылған қауіпсіз, масштабталатын cloud инфрақұрылым."
          },
          {
            title: "AI және машиналық оқыту",
            description: "Процестерді автоматтайтын және іскери мүмкіндіктерін ашатын ақылды жүйелер."
          }
        ]
      },
      portfolio: {
        title: "Біздің жұмыстар",
        subtitle: "Біздің сарапатарлығымызды көрсетіп тұрған премиум-жобалар",
        viewProject: "Жобаны қарау"
      },
      contact: {
        title: "Бір құнды нәрсе құрайық",
        subtitle: "Біздің командамен байланысыңыз",
        name: "Аты",
        email: "Email",
        message: "Хабарлама",
        send: "Хабарлама жіберу",
        sending: "Жіберіліп жатыр...",
        success: "Хабарлама сәтті жіберілді!",
        error: "Жіберуде қате болды. Қайтадан көріңіз.",
        required: "Бұл өріс міндетті",
        invalidEmail: "Жарамды электрондық пошта мекенжайын енгізіңіз"
      },
      about: {
        subtitle: "Жұмыстың артындағы кім",
        title: "Мен туралы",
        bio: "4+ жылдық тәжірибесі бар backend бағытындағы бағдарламалық инженер: масштабталатын API, деректер конвейерлері және таратылған жүйелер. Назарбаев университетінің компьютерлік ғылымдар бойынша түлегі.",
        educationLabel: "Білім",
        skillsLabel: "Техникалық дағдылар",
        connectLabel: "Байланыс",
        experienceLabel: "Жұмыс тәжірибесі",
        skillCategories: {
          languages: "Тілдер",
          frameworks: "Фреймворктер",
          tools: "Құралдар және инфрақұрылым"
        },
        experience: [
          {
            company: "Investlink Ltd.",
            role: "Backend әзірлеуші",
            period: "Маусым 2025 – қазіргі уақытқа дейін",
            location: "Алматы, Қазақстан",
            bullets: [
              "Alpaca-дан (SSE/webhooks) деректерді жинау конвейерін жасады; минутына 25k оқиғаны ұстады.",
              "PostgreSQL уақыт қатарын оқуды оңтайландырды; ауыр сұраныстар кідірісін 55%-ға, CPU-ды 30%-ға азайтты.",
              "API қауіпсіздігін күшейтті: JWT/OAuth2, RBAC; рұқсатсыз сұраныстардың 20%-ын блоктады."
            ]
          },
          {
            company: "Intelligent Punks",
            role: "Backend / ML әзірлеуші",
            period: "Ақп 2025 – Мау 2025",
            location: "Кипр, қашықтан",
            bullets: [
              "4+ қызмет үшін Python микросервистерін (FastAPI/DRF) жасады; пик — 12k сұраныс/сек.",
              "SQLAlchemy + asyncpg көмегімен асинхронды PostgreSQL деректер қабатын жасады; 2.5k QPS, ауыр есептер 23%-ға жеделдеді."
            ]
          },
          {
            company: "Q19",
            role: "Backend әзірлеуші",
            period: "Мам 2023 – Сәу 2024",
            location: "Астана, Қазақстан",
            bullets: [
              "1,000+ пайдаланушы үшін async Python (Sanic) арқылы REST API жасады.",
              "Telegram-бот пен сайтты backend-пен біріктірді; Celery және Redis арқылы фондық тапсырмалар."
            ]
          },
          {
            company: "PythonRPA",
            role: "Fullstack әзірлеуші",
            period: "Қар 2021 – Сәу 2023",
            location: "Алматы, Қазақстан",
            bullets: [
              "Левенштейн қашықтығымен CSV сәйкестендіруді жақсартты: орындалу уақыты −14%, дәлдік +17.4%.",
              "10,000+ еңбек жазбасын өңдеуге арналған pandas конвейерлерін жасады."
            ]
          }
        ]
      },
      footer: {
        rights: "Барлық құқықтар сақталған.",
        privacy: "Құпиялылық саясаты",
        terms: "Пайдалану шарттары",
        contact: "Бізбен байланысыңыз"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['navigator', 'localStorage'],
      caches: ['localStorage']
    }
  });

export default i18n;
