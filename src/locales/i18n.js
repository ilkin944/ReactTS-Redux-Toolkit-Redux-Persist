import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import aztranslation from './az/translation.json'
import entranslation from './en/translation.json'
import rutranslation from './ru/translation.json'
import estranslate from './es/translation.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            az: {
                translation: aztranslation
            },
            en: {
                translation: entranslation
            },
            ru: {
                translation: rutranslation
            },
            es: {
                translation: estranslate
            }
        },
        lng: 'az',
        fallbackLng: 'az',
        interpolation: {
            escapeValue: false
        }
    })