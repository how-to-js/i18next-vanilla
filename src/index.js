import i18next from "i18next";

i18next
  .init({
    lng: "en", // if you're using a language detector, do not define the lng option
    resources: {
      en: {
        translation: {
          hello_world: "hello world",
        },
      },
    },
  })
  .then((t) => {
    console.log(t("hello_world")); // -> same as i18next.t
  });
