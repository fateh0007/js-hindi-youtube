const marvel_heros= ["ironman","thor","hulk"]

const dc_heros = ["superman","batman","flash"]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros] //spreading using ...
console.log(all_new_heros)

console.log(Array.from({name: "Fateh"}))//interesting question for interview--return empty array