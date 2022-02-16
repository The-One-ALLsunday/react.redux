function ab(a) {
  const str = a.toString()
  return str
}

function a() {
  const fn = () => {
    // this is a
    console.log(2)
  }
  // this.action
  console.log(1)// hehe
  /**
   * heheh
  */
  console.log(1) // sjsdljfs
  console.log(1)
}

const str = ab(a)
console.log(str)

const reg = /("([^\\"]*(\\.)?)*")|('([^\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n|$))|(\/\*(\n|.)*?\*\/)/g;
const regstr = str.replace(reg).replace(/undefined/g, '')
console.log(regstr.match(/console.log/g).length)
// console.log(str.replace(reg).replace(/undefined/g, '').toString().match(/console./))
// console.log('abcd,ii,**bc'.match(/bc/g).length)

// function removeJsComments(code)   
// {     
//   return code.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n');  
// }

// console.log(removeJsComments(str))
 




