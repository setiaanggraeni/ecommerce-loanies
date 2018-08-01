Vue.component('Footers', {
    template: `
    <div>
        <div class="row" id="footer">
            <div class="column AboutUs">
                <h5>About Us</h5>
                <ul>
                <li><a href="#" style="color: grey; font-size: 12px">What is Loanies?</a></li>
                </ul>
            </div>
            <div class="column help">
                <h5>Need any help?</h5>
                <ul>
                <li><a href="#" style="color: grey; font-size: 12px">FAQ</a></li>
                <li><a href="#" style="color: grey; font-size: 12px">How To Buy</a></li>   
                </ul>     
            </div>
            <div class="column blog">
                <h5>New in Loanies</h5>
                <ul>
                <li><a href="#" style="color: grey; font-size: 12px">Welcome Winter!</a></li>
                <li><a href="#" style="color: grey; font-size: 12px">This Week Fashion Find!</a></li>
                </ul>
            </div>
            <div class="column socialMedia">
                <h5>Follow Our Social Media</h5>
                <div class="sns">
                    <a href="/" class="fa fa-facebook" style="font-size: 40px"></a>
                    <a href="/" class="fa fa-twitter" style="font-size: 40px"></a>
                    <a href="/" class="fa fa-google" style="font-size: 40px"></a>
                    <a href="/" class="fa fa-youtube" style="font-size: 40px"></a>
                    <a href="/" class="fa fa-instagram" style="font-size: 40px"></a>
                </div>
            </div>
        </div>
    </div>`
})