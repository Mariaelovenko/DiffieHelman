let p = 23
let g = 9

let a = Math.round(1+Math.random()*(100))
let b = Math.round(1+Math.random()*(100))

console.log("Приватный ключ для Алисы ", a)
console.log("Приватный ключ для Боба ", b)

let A = (BigInt(g)**BigInt(a)) % BigInt(p)
let B = (BigInt(g)**BigInt(b)) % BigInt(p)

console.log("Общий ключ для Алисы ",(B**BigInt(a)) % BigInt(p))
console.log("Общий ключ для Боба ",(A**BigInt(b)) % BigInt(p))