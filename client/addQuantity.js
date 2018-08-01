Vue.component('quantity', {
    template: `
      <div class="quantity-toggle">
        <button @click="decrement()">&mdash;</button>
        <input type="text" :value="quantity" readonly>
        <button @click="increment()">&#xff0b;</button>
      </div>
    `,
    data () {
      return {
        quantity: 1
      }
    },
    methods: {
      increment () {
        this.quantity++
      },
      decrement () {
        if(this.quantity === 1) {
          alert('Negative quantity not allowed')
        } else {
          this.quantity--
        }
      }
    }
})
  
new Vue({
el: '#product'
})