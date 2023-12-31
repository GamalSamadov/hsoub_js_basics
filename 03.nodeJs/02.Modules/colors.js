class Color {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

const allColors = [
  new Color("brightred", "#E74C3C"),
  new Color("soothingpurple", "#9B59B6"),
  new Color("skyblue", "#5DADE2"),
  new Color("leafygreen", "#48C9B0"),
  new Color("sunkissedyellow", "#F4D03F"),
  new Color("groovygray", "#D7DBDD"),
]

exports.all = allColors;

exports.randomColor = () => {
  return allColors[Math.floor(Math.random() * allColors.length)];
}