(()=>{
  let prices = [1,23,3,45,]
  // prices.push('asd')
  // prices.push(true)
  prices.push(12313)

  let products = ['hola', true]

  let mixed: (number | string | boolean)[] = ['hola']
  mixed.push(false)

  let numbers = [1,23,4,4]
  numbers.map(item => item*2)
})()

