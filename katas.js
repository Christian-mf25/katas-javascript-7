let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let arrayStr  = ["a", "b", "c"];

const dobra = num => {
	return num * 2
}

const lista = (el, i, arr) => {
	console.log(el, i, arr)
}

const numPar = num => num % 2 === 0

const soma = (acc, item) =>{
    return acc += item
}

const maiorQueDez = (element, index, array) => {
	return element > 10;
}


/** FOREACH */

const newForEach = (arr, callBack) =>{

	for(let i = 0; i < arr.length; i++){
		let valorAtual = arr[i]
		let indice = i
		callBack(valorAtual, indice, arr)
	}
}

console.log("forEach", arrayStr.forEach(lista))
console.log("newForEach", newForEach(arrayStr, lista))


/** FILL */

const newFill = (arr, valor, inicio = 0, fim) =>{

	let final = fim

	if(fim === undefined){
		final =  arr.length - 1
	}

	for(let i = inicio; i < final; i++){
		arr[i] = valor
	}
	return arr
}

console.log("fill", arrayNum.fill(4, 1, 3))
console.log("newFill", newFill(arrayNum,4, 1, 3))


/** MAP */

const newMap = (arr, callBack) =>{

	let result = []

	for(let i = 0; i < arr.length; i++){
		let valorAtual  = arr[i]
		let indice = i
		result.push(callBack(valorAtual, indice, arr))
	}
	return result
}

console.log("map",arrayNum.map(dobra))
console.log("newMap", newMap(arrayNum, dobra))


/** SOME */

const newSome = (arr, callBack) =>{
	for(let i = 0; i < arr.length; i++){
		let valorAtual = arr[i]
		let indice = i
		if(callBack(valorAtual, indice, arr)){
			return true
		}
	}
	return false
}

console.log("some", arrayNum.some(maiorQueDez))
console.log("newSome", newSome(arrayNum, maiorQueDez))


/** FIND */

const newFind = (arr, callBack) =>{

	for(let i = 0; i < arr.length; i++){
		let valorAtual = arr[i]
		let indice = i
		if(callBack(valorAtual, indice, arr)){
			return valorAtual
		}
	}
	return undefined
}

console.log("find", arrayNum.find(maiorQueDez))
console.log("newFind", newFind(arrayNum, maiorQueDez))


/** FINDINDEX */

const newFindIndex = (arr, callBack) =>{

	for(let i = 0; i < arr.length; i++){
		let valorAtual = arr[i]
		let indice = i
		if(callBack(valorAtual, indice, arr)){
			return indice
		}
	}
	return -1
}

console.log("findIndex", arrayNum.findIndex(maiorQueDez))
console.log("newFindIndex", newFindIndex(arrayNum, maiorQueDez))


/** EVERY */

const newEvery = (arr, callBack) =>{

	for(let i = 0; i < arr.length; i++){
		let valorAtual = arr[i]
		let indice = i
		if(callBack(valorAtual, indice, arr) === false){
			return false
		}
	}
	return true
}

console.log("every", arrayNum.every(maiorQueDez))
console.log("newEvery", newEvery(arrayNum, maiorQueDez))


/** FILTER */

const newFilter = (arr, callBack) =>{

	let result = []
	
	for(let i = 0; i < arr.length; i++){
		let valorAtual = arr[i]
		let indice = i
		if(callBack(valorAtual, indice, arr)){
			result.push(valorAtual)
		}
	}
	return result
}

console.log("filter", arrayNum.filter(numPar))
console.log("newFilter", newFilter(arrayNum, numPar))


/** CONCAT */

const newConcat = (arr, ...arr2) =>{

	let result = []

	for(let i = 0; i < arr.length; i++){
		result.push(arr[i])
	}
	for(let i = 0; i < arr2.length; i++){
		let arrayAtual = arr2[i]

		for(let j = 0; j < arrayAtual.length; j++){
			let numAtual = arrayAtual[j]
			result.push(numAtual)
		}
	}
	return result
}

console.log("concat", arrayNum.concat(arrayStr, ["vddv", 123]))
console.log("newConcat", newConcat(arrayNum, arrayStr, ["vddv", 123]))


/** INCLUDES */

const newIncludes = (arr, buscar, peloIndice = 0) =>{

	for(let i = peloIndice; i < arr.length; i++){
		let valorAtual = arr[i]
		if(valorAtual === buscar){
			return true
		}
		
	}
	return false
}

console.log("includes", arrayNum.includes(4, 6))
console.log("newIncludes", newIncludes(arrayNum, 4, 6))


/** INDEXOF */

const newIndexOf = (arr, busca, inicio = 0) => {
	
	for(let i = inicio; i < arr.length; i++){
		if(busca === arr[i]){
			return i
		}
	}
	return -1
}

console.log("indexOf", arrayNum.indexOf(7, 3))
console.log("newIndexOf", newIndexOf(arrayNum, 7, 3))


/** JOIN */

const newJoin = (arr, separador = ",") =>{

	let result = ""
	let limite = arr.length - 1

	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] === "string"){
			let palavra = arr[i]
			for(let j = 0; j < palavra.length; j++){
				let letra = palavra[j]
				result += letra
			}
		}else{
			result += arr[i]
		}
		if(i !== limite){
			result += separador
		}
	}
	return result
}

console.log("join", arrayStr.join(" - "))
console.log("newJoin", newJoin(arrayStr, " - "))


/** REDUCE */

const newReduce = (arr, callBack, acumulador = 0) => {
	
	let result = acumulador

	for(let i = 0; i < arr.length; i++){
		let valorAtual = arr[i]
		let indice = i
		result = callBack(result, valorAtual, indice, arr)
	}	
	return result
}

console.log("reduce", arrayNum.reduce(soma))
console.log("newReduce", newReduce(arrayNum, soma))