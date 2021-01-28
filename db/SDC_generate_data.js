const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const { Shoe, Color, Size, Quantity } = require('./index.js');

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 3,
    min: 2
  }
});

const shoeGenerator = (count, model) => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const shoes = {
    names: [],
    quantities: []
  };
  for (var i = 0 ; i < count ; i++) {
    let sizeIds;
    let woman;
    if (getRandomInt(0,10) % 2 === 0) {
      woman = true;
      sizeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      woman = false;
      sizeIds = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    }
    const colorIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    shoes.names.push({name: (woman ? 'Women\'s ' : 'Men\'s ') + lorem.generateWords(getRandomInt(2,4))});

    for (var k = 0 ; k < getRandomInt(17, 22) ; k++) {
      colorIds.splice(getRandomInt(0, colorIds.length), 1);
    }
    for (var l = 0 ; l < colorIds.length ; l++) {
      shoes.quantities.push({shoe_id: model, color_id: colorIds[l],  quantities: `${sizeIds[0]}:${getRandomInt(0, 9)} ${sizeIds[1]}:${getRandomInt(0, 9)} ${sizeIds[2]}:${getRandomInt(0, 9)} ${sizeIds[3]}:${getRandomInt(0, 9)} ${sizeIds[4]}:${getRandomInt(0, 9)} ${sizeIds[5]}:${getRandomInt(0, 9)} ${sizeIds[6]}:${getRandomInt(0, 9)} ${sizeIds[7]}:${getRandomInt(0, 9)} ${sizeIds[8]}:${getRandomInt(0, 9)} ${sizeIds[9]}:${getRandomInt(0, 9)} ${sizeIds[10]}:${getRandomInt(0, 9)} ${sizeIds[11]}:${getRandomInt(0, 9)} ${sizeIds[12]}:${getRandomInt(0, 9)}`});
    }
    model++
  }
  return shoes;
}

const shoeSizes = [{size: '5'}, {size: '5.5'}, {size: '6'}, {size: '6.5'}, {size: '7'}, {size: '7.5'}, {size: '8'}, {size: '8.5'}, {size: '9'}, {size: '9.5'}, {size: '10'}, {size: '10.5'}, {size: '11'}, {size: '11.5'}, {size: '12'}, {size: '12.5'}, {size: '13'}, {size: '13.5'}];

const shoeColors = [{
  name: 'Blue Whale',
  shoe_color: 'Dodger Blue',
  sole_color: 'Light Cyan',
  shoe_hex: '#1E90FF',
  sole_hex: '#E0FFFF',
  limited: false
},
{
  name: 'Red Sky',
  shoe_color: 'Orange Red',
  sole_color: 'Light Sky Blue',
  shoe_hex: '#FF4500',
  sole_hex: '#87CEFA',
  limited: false
},
{
  name: 'Green Lake',
  shoe_color: 'Dark Sea Green',
  sole_color: 'Sea Green',
  shoe_hex: '#8FBC8F',
  sole_hex: '#2E8B57',
  limited: false
},
{
  name: 'Cosmos',
  shoe_color: 'Dark Slate Blue',
  sole_color: 'Indigo',
  shoe_hex: '#483D8B',
  sole_hex: '#4B0082',
  limited: false
},
{
  name: 'Pink Plunge',
  shoe_color: 'Hot Pink',
  sole_color: 'Deep Pink',
  shoe_hex: '#FF69B4',
  sole_hex: '#FF1493',
  limited: false
},
{
  name: 'Blue Burst',
  shoe_color: 'Deep Sky Blue',
  sole_color: 'Navy',
  shoe_hex: '#00BFFF',
  sole_hex: '#000080',
  limited: false
},
{
  name: 'Red Waters',
  shoe_color: 'Crimson',
  sole_color: 'Aqua',
  shoe_hex: '#DC143C',
  sole_hex: '#00FFFF',
  limited: false
},
{
  name: 'White Washed',
  shoe_color: 'Alice Blue',
  sole_color: 'Ivory',
  shoe_hex: '#F0F8FF',
  sole_hex: '#FFFFF0',
  limited: false
},
{
  name: 'Cement',
  shoe_color: 'Light Gray',
  sole_color: 'Dark Gray',
  shoe_hex: '#D3D3D3',
  sole_hex: '#A9A9A9',
  limited: false
},
{
  name: 'Woodworks',
  shoe_color: 'Burly Wood',
  sole_color: 'Saddle Brown',
  shoe_hex: '#DEB887',
  sole_hex: '#8B4513',
  limited: false
},
{
  name: 'Blue Lagoon',
  shoe_color: 'Medium Blue',
  sole_color: 'Light Sky Blue',
  shoe_hex: '#0000CD',
  sole_hex: '#87CEFA',
  limited: true
},
{
  name: 'Aurora Borealis',
  shoe_color: 'Chartreuse',
  sole_color: 'Lime',
  shoe_hex: '#7FFF00',
  sole_hex: '#00FF00',
  limited: true
},
{
  name: 'Pale Wood',
  shoe_color: 'Moccasin',
  sole_color: 'Papaya Whip',
  shoe_hex: '#FFE4B5',
  sole_hex: '#FFEFD5',
  limited: true
},
{
  name: 'Azure Canyon',
  shoe_color: 'Dark Cyan',
  sole_color: 'Pale Goldenrod',
  shoe_hex: '#008B8B',
  sole_hex: '#EEE8AA',
  limited: true
},
{
  name: 'Burning Desire',
  shoe_color: 'Crimson',
  sole_color: 'Red',
  shoe_hex: '#DC143C',
  sole_hex: '#FF0000',
  limited: true
},
{
  name: 'Sunset',
  shoe_color: 'Coral',
  sole_color: 'Orange Red',
  shoe_hex: '#FF7F50',
  sole_hex: '#FF4500',
  limited: true
},
{
  name: 'New Moon',
  shoe_color: 'Dark Slate Gray',
  sole_color: 'Black',
  shoe_hex: '#2F4F4F',
  sole_hex: '#000000',
  limited: true
},
{
  name: 'Harvest Moon',
  shoe_color: 'Orange',
  sole_color: 'Dark Orange',
  shoe_hex: '#FFA500',
  sole_hex: '#FF8C00',
  limited: true
},
{
  name: 'Sea Breeze',
  shoe_color: 'Pale Turquoise',
  sole_color: 'Light Cyan',
  shoe_hex: '#AFEEEE',
  sole_hex: '#E0FFFF',
  limited: true
},
{
  name: 'Galaxy',
  shoe_color: 'Gainsboro',
  sole_color: 'Dark Gray',
  shoe_hex: '#DCDCDC',
  sole_hex: '#A9A9A9',
  limited: true
},
{
  name: 'Lavender Dream',
  shoe_color: 'Lavender',
  sole_color: 'Plum',
  shoe_hex: '#E6E6FA',
  sole_hex: '#DDA0DD',
  limited: true
},
{
  name: 'Orange Crush',
  shoe_color: 'Orange',
  sole_color: 'White',
  shoe_hex: '#FFA500',
  sole_hex: '#FFFFFF',
  limited: true
},
{
  name: 'Quasimodo',
  shoe_color: 'Gold',
  sole_color: 'Dark Orchid',
  shoe_hex: '#FFD700',
  sole_hex: '#9932CC',
  limited: true
},
{
  name: 'Spriest',
  shoe_color: 'Dark Magenta',
  sole_color: 'Indigo',
  shoe_hex: '#8B008B',
  sole_hex: '#4B0082',
  limited: true
},
{
  name: 'Manzanilla',
  shoe_color: 'Olive',
  sole_color: 'Fire Brick',
  shoe_hex: '#808000',
  sole_hex: '#B22222',
  limited: true
}]
let model = 1;
let seeder = async () => {
  await Color.bulkCreate(shoeColors);
  await Size.bulkCreate(shoeSizes);
  for (var i = 0 ; i < 10000 ; i++) {
    let shoes = shoeGenerator(1000, model);
    model += 1000;
    await Shoe.bulkCreate(shoes.names);
    await Quantity.bulkCreate(shoes.quantities);
  }
}
seeder();