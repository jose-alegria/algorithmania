/*
  1. we need to count how many  ( and ) are, if they are equal, we are fine, else, is wrong
  2. after knowing the count is balanced, we need to find the corresponding close parethesis to the opener
      we should not find an ( first
      if we find a (, let's find the next )
      if we find another (, we should find the next )
      once we find a ) we can mark a closed parenthesis
*/
let openers = 0;
const validateParenthesisBalance = (cadena) => {
  console.log('validando: ', cadena)
  const openersCount = cadena.match(new RegExp('\\(', "g")).length;
  const closersCount = cadena.match(new RegExp('\\)', "g")).length;
  openers = 0;
  if (openersCount === closersCount) {
    findOpeners(cadena);
  } else {
    console.log('INVALID')
  }
}

const findOpeners = (cadena) => {
  const nextOpener = cadena.indexOf('(');
  const nextCloser = cadena.indexOf(')');
  if (nextOpener > -1 && nextOpener < nextCloser) {
    const newCadena = cadena.substring(nextOpener+1);
    openers++;
    findOpeners(newCadena)
  } else {
    const newCadena = cadena.substring(nextCloser+1);
    openers--;
    if (openers === 0 && nextOpener == -1) {
      console.log('VALID')
      return
    }
    if (openers < 0) {
      console.log('INVALID')
      return
    }
    findOpeners(newCadena)
  }
}

const cadena0 = '(Hello (,) world (!))';
const cadena1 = '()';
const cadena2 = '(hello world)';
const cadena3 = ')(';
const cadena4 = 'Random text (as this) is ok().';
const cadena5 = ')()(';
const cadena6 = ' ())(()';

validateParenthesisBalance(cadena0)
validateParenthesisBalance(cadena1)
validateParenthesisBalance(cadena2)
validateParenthesisBalance(cadena3)
validateParenthesisBalance(cadena4)
validateParenthesisBalance(cadena5)
validateParenthesisBalance(cadena6)