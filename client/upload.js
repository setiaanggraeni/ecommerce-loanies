var app = new Vue({
    el: '#product',
    data: {
        result: [],
        img: null,
        price: '',
        description: '',
        brand: '',
        category: ''
    },
    mounted(){
        var user = localStorage.getItem('visitorEmail')
        if(user === null){
            alert('You dont have access to upload product')
            window.location = 'index.html'
        }
    },
    methods: {
        selectedImage(e) {
            this.img = e.target.files[0]
        },
        upload() {
            let formData = new FormData()
            formData.append('image', this.img)
            var self = this
            axios({
                url: 'https://loaniesserver.setiaanggraeni.co/upload',
                method: 'post',
                data: formData
            })
            .then(response => {
                console.log(response)

                axios({
                    url: 'https://loaniesserver.setiaanggraeni.co/uploadmlab',
                    method: 'post',
                    data: {
                        imgurl: response.data.link,
                        price: self.price,
                        brand: self.brand,
                        category: self.category,
                        description: self.description
                    }
                })
                .then(postMlab => {
                    console.log("--------mlab",postMlab);
                    alert('Successfully add new product')
                    localStorage.clear()
                    window.location='index.html'
                })
                .catch(err => {
                console.log(err)
                })
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})