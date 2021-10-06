db.inventory.find({})
/*
Metodo para encontrar datos en una base de datos
*/
db.inventory.find({ status:"D"})
/*
Metodo para buscar algo en especifico
*/
db.inventory.find({campo: { $eq: valor }}) 
/*
Metodo para buscar valores iguales en un mismo campo
*/