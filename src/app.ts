class Person {
  constructor(private name: string) {

  }
}
const max = new Person('Veronica')

// counst btn: Element = document.querySelector('#btn')!;
btn.addEventListener('click', () => {
  console.log('Btn clicked');

})

// =====
let anyFlag
function logInfo(data: string) {
  console.log(data);
  anyFlag = true
  console.log(anyFlag);
}

logInfo('I am log string')

function multiple(a: number, b: number) {
  return a * b
}
