const mainController = {
    index: (req, res) => {
        res.render('home');
    },
    login: (req,res)=>{
        res.render('login')
    },
    cart: (req,res) =>{
        res.render('cart')
    }
}
module.exports = mainController;