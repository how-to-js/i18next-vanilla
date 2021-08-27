import i18next from "i18next";

window.i18next = i18next;

const en = {
    translation: {
      hello_world: "hello world",
      nested: {
        key: "This key is was read from nested object",
      },
      great: "Hello {{name}}",
    },
  },
  pl = {
    translation: {
      hello_world: "Witaj świecie",
      nested: {
        key: "Ten klucz został odczytany z zagnieżdzonego obiektu",
      },
      great: "Witaj {{name}}",
    },
  },
  es = {
    translation: {
      hello_world: "Hola mundo",
      nested: {
        key: "Esta clave se ha leído desde un objeto anidado",
      },
      great: "Hola {{name}}",
    },
  };

i18next
  .init({
    resources: {
      en,
      pl,
      es,
    },
    fallbackLng: "en",
  })
  .then((t) => {
    console.log(t("hello_world"));
    console.log(t("nested.key"));
    console.log(t("great", { name: "Marcin" }));
  });
