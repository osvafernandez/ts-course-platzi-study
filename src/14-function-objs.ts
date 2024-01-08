(()=>{
  const login = (data: {email: string, password: string})=>{
    console.log(data.email, data.password)
  };

    login({
      email: 'osva@example',
      password: '13'
    })

    const products: any[] = [];

  type Size = 'S' | 'M' | 'L' | 'XL';

  const addProduct = (data: {title: string, createdAt: Date, stock: number, size?: Size})=>{
    products.push(data)
  }

  addProduct({title: 'title', createdAt: new Date, stock: 100})
  console.log(products)
})()
