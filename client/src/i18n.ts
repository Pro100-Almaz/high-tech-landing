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
