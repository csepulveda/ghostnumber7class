const numberArray = [1,2,3,4,5,6,7,8,9,10]
let eachTotal = 0
let previous = 0
numberArray.forEach((number, idx) => {
	if (idx == 0 ) {
		eachTotal = number			
	} else {
		if ( idx%2 == 0 ) {
	    		eachTotal *= number
	    	} else {
	    		eachTotal += number
	    	}
	}
})
console.log("suma/multiplicacion de valores del array usando forEach: ")
console.log(eachTotal)


let reduceTotal = numberArray.reduce((preValue, nowValue, idx, arr) => {
	if ( idx%2 == 0 ) {
		return preValue * nowValue
	} else {
		return preValue + nowValue
	}
})
console.log("suma/multiplicacion de valores del array usando forEach: ")
console.log(reduceTotal)


let multiTotal = numberArray.map((item, idx, arr) => {
	return item * 10
})
console.log("multiplicar * 10 todos los item del array: ")
console.log(multiTotal)


const data = [
	{items: [1,2,3,4,5,6]},
	{items: [10,20,30,40,50,60]}
]
let sumArrays = data.map((item, idx, arr) => {
	return item.items.reduce((preValue, nowValue, idx, arr) => {
		return preValue + nowValue
	})
})
console.log("sumar todos los items del primer array: ")
console.log(sumArrays[0])
console.log("sumar todos los items del segundo array: ")
console.log(sumArrays[1])


let mergeItems = data.reduce((preValue, nowValue, idx, arr) => {
	return preValue.items.concat(nowValue.items)
})
console.log("unir los dos arrays items en uno solo: ")
console.log(mergeItems)

const medias = [
  {
    name: 'media 1',
    metas: [
      {
        reslution: {
          height: 360,
          width: 640
        },
        url: 'http://meta1.com'
      },
      {
        reslution: {
          height: 720,
          width: 1280
        },
        url: 'http://meta2.com'
      }
    ],
    thumbnails: [
      {
        is_original: false,
        url: 'http://thumbnail1.com'
      },
      {
        is_original: true,
        url: 'http://thumbnail2.com'
      },
      {
        is_original: false,
        url: 'http://thumbnail3.com'
      }
    ]
  },
  {
    name: 'media 2',
    metas: [
      {
        reslution: {
          height: 360,
          width: 640
        },
        url: 'http://meta1.com'
      },
      {
        reslution: {
          height: 720,
          width: 1280
        },
        url: 'http://meta2.com'
      }
    ],
    thumbnails: [
      {
        is_original: false,
        url: 'http://thumbnail1.com'
      },
      {
        is_original: false,
        url: 'http://thumbnail2.com'
      },
      {
        is_original: true,
        url: 'http://thumbnail3.com'
      }
    ]
  }
]

/*
 output = [{
  name: 'media 1',
  metas: ['720x480', '480x240'],
  thumbnail: 'http://thumbnail2.com'
},
{
  name: 'media 2',
  metas: ['720x480', '480x240'],
  thumbnail: 'http://thumbnail3.com'
}]
*/

// output = medias.map((item) => {
// 	item.metas = item.metas.map((meta) => {
// 		return meta.reslution.width + 'x' + meta.reslution.height
// 	})
// 	item.thumbnails = item.thumbnails.find((thumbnail) => {
// 			return thumbnail.is_original
// 	})
// 	item.thumbnail = item.thumbnails.url
// 	delete 	item.thumbnails
// 	return item
// })
// console.dir(output)

fixedOutput = media = medias.map((media) => {
		let name = media.name
		let metas = media.metas.map((meta) => meta.reslution.height + 'x' + meta.reslution.width)
		let thumbnail = media.thumbnails.find((thumbnail) => thumbnail.is_original).url
		
		return {name, metas, thumbnail}
	})
console.log("procesar un objeto usando map y find para recuperar data especifica en formato especifico: ")
console.log(fixedOutput)