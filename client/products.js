Vue.component('products', {
    props: ['allproducts'],
    methods: {
        addItem: function(index){
            this.$emit('add', index)
        }
    },
    template: `
        <div class="row">
            <div class="column" v-for="(item, index) in allproducts">
                <div class="content">
                    <img v-bind:src="item.imgurl" class="img" style="width:100%">
                    <ul>
                        <li id="price">Rp {{item.price}}</li>
                        <li style="font-weight: bold" id="brand">{{item.brand}}</li>
                        <li>{{item.description}}</li>
                        <li><button class="add" v-on:click="addItem(index)">add cart</button></li>
                    </ul>
                </div>
            </div>
        </div>
    `
})


