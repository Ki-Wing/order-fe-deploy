function initState() {
    return {
        productsInCart : [],
        totalQuantity:0
    };
}


const practice = {
    state: initState,
    mutations: {
        addCart(state, product) {
            const existProducts = state.productsInCart.find(p=>p.id == product.id);
            if(existProducts){
                existProducts.quantity += product.quantity;
            }else{
                state.productsInCart.push(product);
            }
            state.totalQuantity += product.quantity;
        },

    },
    actions: {
        addCart(context) {
            context.commit('addCart');
        }

    },
    getters: {
        getTotalQuantity: state => state.totalQuantity,
        getProductsInCarts : state => state.productsInCart
    }
}

export default practice;
