const _ = require('lodash')

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true },
  { 'user': 'pebbles' },
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `_.property` iteratee shorthand.
const a = _.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
console.log('a ', a)

const arr = [{'l3.uuid': {eq: 'xxxxxx'}}]
const ret = _.dropWhile(arr, 'l3.uuid')
console.log('ret', ret)


let aa = {
  a: 1
}

aa = {
  b: 2,
  aa: aa
}

console.log(aa)
