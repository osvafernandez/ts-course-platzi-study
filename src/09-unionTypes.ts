(()=>{
  let userId: string | number;
  userId =1231;
  userId = 'qd'

  function greeting(myText: string | number){
    if(typeof myText == 'string'){
      console.log(`string ${myText.toLowerCase()}`);
    }else{
      console.log(`string ${myText.toFixed(1)}`)
    }
  }

  greeting('sa')
  greeting(123.1231)

})()
