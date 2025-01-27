export const categoryStyles = [
  { cat: "sport", color: "green" },
  { cat: "galerije", color: "purple" },
  { cat: "grude-online", color: "darkmagenta" },
  { cat: "lifestyle", color: "chocolate" },
  { cat: "politika", color: "red" },
  { cat: "crna-kronika", color: "darkslategray" },
  { cat: "gospodarstvo", color: "#105d68" },
  { cat: "kultura", color: "brown" },
  { cat: "vijesti", color: "crimson" },
  { cat: "zanimljivosti", color: "cornflowerblue" },
  { cat: "ostale-vijesti", color: "darkslateblue" },
  { cat: "promo", color: "royalblue" },
  { cat: "izdvojeno", color: "darkblue" },
];

export const matchColors = (color: string) => {
  const findColor = categoryStyles.find((style) => style.cat === color);

  if (!findColor) {
    return;
  }

  return findColor.color;
};
