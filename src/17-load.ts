import _ from 'lodash';


const data = [
  {
    username: 'osva',
    role: 'administrator'
  },
  {
    username: 'val',
    role: 'seller'
  },
  {
    username: 'odl',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item) => {
  item.role
})

console.log(rta)
