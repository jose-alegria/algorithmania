console.log('hola')

const cadena = '(Hello (,) world (!))';
const cadena1 = '()()()()';
const cadena2 = '()()()()('; 
const cadena3 = ')()()()()('; 
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
    /* const firstOpener = cadena.indexOf('(');
    const firstCloser = cadena.indexOf(')');

    console.log(firstOpener, firstCloser)
    if (firstOpener < firstCloser) {
      console.log('lets keep going')
      openers++;
      const newCadena = cadena.substring(firstOpener+1);
      const nextOpener = newCadena.indexOf('(');
      const nextCloser = newCadena.indexOf(')');
      console.log(nextOpener, nextCloser, nextOpener < nextCloser)
      if (nextOpener < nextCloser) {
        console.log('another opener')
        openers++;
      } else {
        openers--
      }
      console.log(openers)
      //validateParenthesisBalance(newCadena) */
    
  } else {
    console.log('INVALID')
  }

}

const findOpeners = (cadena) => {
  console.log(cadena)
  const nextOpener = cadena.indexOf('(');
  const nextCloser = cadena.indexOf(')');
  if (nextOpener < nextCloser) {
    console.log('another opener');
    const newCadena = cadena.substring(nextOpener+1);
    openers++;
    findOpeners(newCadena)
  } else {
    openers--;
  }
  console.log(openers)
}

validateParenthesisBalance(cadena)
validateParenthesisBalance(cadena1)
/*validateParenthesisBalance(cadena2)
validateParenthesisBalance(cadena3) */