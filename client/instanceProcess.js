var productList = new Vue({
  el: '#product',
  data: {
    items: '',
    total: 0,
    cart: [],
    totalBuy: 0,
    seen: true,
    show: false,
    category: [],
    onCart: '',
  },
  mounted(){
    this.getProducts()
  },
  methods: {
    addItem: function(index){
      // console.log('addItem')
      this.total+=1
      this.cart.push(this.items[index])
      this.totalBuy+= Number(this.items[index].price)
    },
    filterCategory: function(value){
      this.category = []
      this.seen= false
      this.items.forEach(product => {
        if(product.category === value){
          this.category.push(product)
        }
        
      })
      // console.log("==== category",this.category)
    },
    getProducts (){
      localStorage.removeItem('cart')
      var visitorName = localStorage.getItem('visitorName')
      if(visitorName !== null){
        this.show = true
      } 
      else if(visitorName === null){
        this.show = false
      }
      axios.get('http://localhost:3000/getAllProducts')
      .then(products => {
        this.items=products.data
        // console.log(this.items);
      })
      .catch(err => {
        res.json(err)
      })
    },
    checkout(){
      window.location.href = 'checkout.html'
      localStorage.setItem('cart',JSON.stringify(this.cart))
      localStorage.setItem('total',JSON.stringify(this.total))
      localStorage.setItem('totalBuy',JSON.stringify(this.totalBuy))
      this.onCart = JSON.parse(localStorage.getItem('cart'))
      var totalItem = JSON.parse(localStorage.getItem('total'))
      var totalShop = JSON.parse(localStorage.getItem('totalBuy'))
      // console.log(this.onCart);
    },
    logout(){
      console.log('hahaha');
      localStorage.clear()
      window.location="index.html"
      this.show = false
    }
  }
})