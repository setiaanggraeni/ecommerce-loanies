Vue.component('navbars', {
    props: ['forNavbar', 'total','show'],
    methods: {
        filterCategory: function(index){
            this.$emit('cat', index)
        },
        logout(){
            this.$emit('out')
        }
    },
    template: `
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color:white;">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="/"><font face="Comic Sans MS">Loanies</font></a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" id="home" href="/"><font face="Courier New">Home</font></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-family: 'Courier New'; color: rgba(0,0,0,.5)" >
                                Category
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" style="font-family: 'Courier New'; color: rgba(0,0,0,.5)" @click="filterCategory('Coat')">Coat</a>
                                <a class="dropdown-item" href="#" style="font-family: 'Courier New'; color: rgba(0,0,0,.5)" @click="filterCategory('Dress')">Dress</a>
                            </div>
                        </li>
                        
                    </ul>
                    
                    <div v-if="show">
                        <form class="form-inline my-0 my-lg-0">
                            <a class="logout mr-sm-2" @click="logout" style="font-family: 'Courier New'; color: rgba(0,0,0,.5)" >Logout</a>
                            <button id="itemCount">{{total}}</button>
                            <img src="img/shopping.jpg" width="30" height="30" class= "icon-cart" alt="" data-toggle="modal" data-target="#myModal">
                        </form>
                    </div>
                    <div v-else>
                        <form class="form-inline my-0 my-lg-0">
                            <a class="login mr-sm-2" href="/login.html" style="font-family: 'Courier New'; color: rgba(0,0,0,.5)" >Login</a>
                            <a class="register mr-sm-2" href="/register.html" style="font-family: 'Courier New'; color: rgba(0,0,0,.5)">Register</a>
                            <button id="itemCount">{{total}}</button>
                            <img src="img/shopping.jpg" width="30" height="30" class= "icon-cart" alt="" data-toggle="modal" data-target="#myModal">
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    `
})