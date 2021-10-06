db.colleccion01.deletemany({})
db.colleccion01.insertOne(
    { item: "alfombra", qty: 55, tags: ["lana"], size: { h: 50, w: 100, uom: "cm" } }
)

db.inventory.insertMany([
    { item: "gafas virtuales", qty: 27, tags: ["rojas", "blancas"], size: { h: 15, w: 25, uom: "cm" } },
    { item: "pantallas", qty: 105, tags: ["negras"], size: { h: 30.9, w: 50.5, uom: "cm" } },
    { item: "ratones", qty: 67, tags: ["verdes", "negros"], size: { h: 19, w: 20, uom: "cm" } }
 ])

 

