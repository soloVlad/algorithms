const { HashMap } = require('./hashMap');

const hashMap = new HashMap();

hashMap.set('name', 'vlad');
hashMap.set('aame', 'vlad');
hashMap.set('bame', 'vlad');
hashMap.set('came', 'vlad');
hashMap.set('game', 'vlad');
hashMap.set('rame', 'vlad');
hashMap.set('fame', 'vlad');
hashMap.set('namename', 'vlad');
hashMap.set('aameaame', 'vlad');
hashMap.set('bamebame', 'vlad');
hashMap.set('camecame', 'vlad');
hashMap.set('gamegame', 'vlad');
hashMap.set('ramerame', 'vlad');
hashMap.set('famefame', 'vlad');
hashMap.set('sfsdfs', 'vlad');
hashMap.set('aasdfsdf', 'vlad');
hashMap.set('btiuiyj', 'vlad');
hashMap.set('cfgghh', 'vlad');
hashMap.set('gamefghme', 'vlad');
hashMap.set('ramerdfgme', 'vlad');
hashMap.set('famdfgdffame', 'vlad');


console.log(hashMap.entries());
console.log(hashMap.keys());
console.log(hashMap.values());

console.log(hashMap.get('famdfgdffame'));
