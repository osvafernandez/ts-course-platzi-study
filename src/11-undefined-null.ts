(()=>{
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNumber: number | null = null; //
  myNumber = 123

  let myString: string | undefined = undefined
  myString = 'asd'

  // function hi(name: string |  null){
  //   let hello = 'hola ';
  //   if (name){
  //     hello += name
  //   }else{
  //     hello += 'nobody'
  //   }
  //   console.log(hello)
  // }

  function hi2(name: string | null){
    let hello = 'Hello '
    hello += name?.toLowerCase() || 'nobody'
    console.log(hello)
  }


})()
