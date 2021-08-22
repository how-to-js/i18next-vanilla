import i18next from "i18next";

const en = {
  translation: {
    hello_world: "hello world",
    nested: {
      key: "This key is was read from nested object",
    },
    great: "Hello {{name}}",
  },
};

i18next
  .init({
    lng: "en", // if you're using a language detector, do not define the lng option
    resources: {
      en,
    },
  })
  .then((t) => {
    console.log(t("hello_world"));
    console.log(t("nested.key"));
    console.log(t("great", { name: "Marcin" }));
  });
