(()=>{
  type Size = 'S' | 'M' | 'L' | 'XL';
  type Product = {title: string, createdAt: Date, stock: number, size?: Size}

  const login = (data: {email: string, password: string})=>{
    console.log(data.email, data.password)
  };

    login({
      email: 'osva@example',
      password: '13'
    })

    const products: Product[] = [];

  const addProduct = (data: Product)=>{
    products.push(data)
  }

  addProduct({title: 'title', createdAt: new Date, stock: 100})
  console.log(products)
})()
