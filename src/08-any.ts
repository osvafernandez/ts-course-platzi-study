(()=>{
  let myDynamiVar: any;
  myDynamiVar = ''
  myDynamiVar = 100
  myDynamiVar = true
  myDynamiVar = {}

  myDynamiVar = 'Hola';
  const rta = (myDynamiVar as string).toLowerCase()

  myDynamiVar = 23;
  const rta2 = (<number>myDynamiVar).toFixed()
})()
