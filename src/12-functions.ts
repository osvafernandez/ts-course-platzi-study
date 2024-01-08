(()=>{
  function createProductToJson( title: string,
    createdAt: Date,
    stock: number,
    size: 'S' | "M" | "L" | 'XL'){
      return {
        title, createdAt, stock, size
      }
  }

  const producto = createProductToJson('P1', new Date(), 12, 'XL')
  console.log(producto.createdAt)

  type Size = 'S' | "M" | "L" | 'XL' | undefined;

  const createProductToJson2 = ( title: string,
    createdAt: Date,
    stock: number,
    size?: Size) => {
      return {
        title, createdAt, stock, size
      }
  }
})()
