const operator = prompt('Enter an operator (+, -, * or /) 👇')

if (['+', '-', '*', '/'].includes(operator)) {
  const firstNumber = prompt('Enter the first number 👇')
  const secondNumber = prompt('Enter the second number 👇')

  const expression = `${firstNumber} ${operator} ${secondNumber}`

  if (+secondNumber !== 0 || operator !== '/') {
    alert(`${expression} = ${eval(expression)}`)
  } else {
    alert('Cannot divide by zero')
  }
} else {
  alert('Invalid operator')
}
