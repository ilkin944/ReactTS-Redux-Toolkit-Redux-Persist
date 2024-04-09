import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import aztranslation from './az/translation.json';
import entranslation from './en/translation.json';
import trtranslation from './tr/translation.json';
import detranslation from './de/translation.json';


i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: entranslation
            },
            az: {
                translation: aztranslation
            },
            tr: {
                translation: trtranslation
            },
            de:{
                translation:detranslation
            }
        }
    }
    )