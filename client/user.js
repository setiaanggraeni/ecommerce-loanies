var productList = new Vue({
  el: '#product',
  data: {
    name: '',
    email: '',
    password: '',
    address: '',
    city:'',
    state: '',
    zipcode: '',
    userLogin: [],
    // show: false
  },
  methods: {
    register(){
      axios.post('http://35.197.148.42/users/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        address: this.address,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        status: false
      })
      .then(user => {
        console.log(user)
        alert('Thank you for register, enjoy your shopping!')
        window.location='index.html'
      })
      .catch(err => {
        console.log(err)
      })
    },
    login(){
      axios.post('http://35.197.148.42/users/login', {
        email: this.email,
        password: this.password
      })
      .then(user => {
          if(user !== null){
            // console.log(user)
            if(user.data.status === true){
              // console.log('ini user',user)
              localStorage.setItem('visitorEmail', user.data.email)
              window.location='upload.html'
            } else {
              // console.log('ini user',user)
              localStorage.setItem('visitorName', user.data.name)
              this.show = true
              this.userLogin = user             
              window.location='index.html'  
            }
          } else {
            console.log('Wrong email/password!')
          }
      })
      .catch(err => {
          console.log(err)
      })
    }
  }
})