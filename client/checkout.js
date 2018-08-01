var check = new Vue({
    el: "#product",
    data: {
        cart: JSON.parse(localStorage.getItem('cart')),
        totalItem: JSON.parse(localStorage.getItem('total')),
        totalBuy: JSON.parse(localStorage.getItem('totalBuy')),
        name: localStorage.getItem('visitorName'),
        email: '',
        password: '',
        address: '',
        city:'',
        state: '',
        zipcode: ''
    },
    methods: {
        checkout(){
            axios.post('http://35.197.148.42/users/transaction', {
              name: this.name,
              email: this.email,
              address: this.address,
              city: this.city,
              state: this.state,
              zipcode: this.zipcode,
              totalItem: this.totalItem,
              totalBuy: this.totalBuy
            })
            .then(user => {
                if(user.data.name === undefined){
                    alert('Please input your valid data')
                } else{
                    alert('Thank you for shopping with Loanis!')
                    window.location='index.html'
                }
            })
            .catch(err => {
              console.log(err)
            })
        }
    }
})