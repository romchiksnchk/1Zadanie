let product = "Socks";

let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        selectedVariant: 0,
        brand: 'Vue Mastery',
        altText: "A pair of socks",
        link: "More products like this",
        inStock: true,
        cart: 0,
        inventory: 100,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0,
            }
         ],
         sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        
         methods: {
            addToCart() {
                this.cart += 1
            }
         },
         updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
         },
         computed: {
            title() {
                return this.brand + ' ' + this.product;
            },
            image() {
                return this.variants[this.selectedVariant].variantImage;
             },
             inStock(){
                return this.variants[this.selectedVariant].variantQuantity
             },
             
             
        },
        
     }
 })

 Vue.component('product', {
    template: `
    <div class="product">
     ...
    </div>
  `,
    data() {
        return {
            // тут будут данные
        }
    },
    methods: {
        // тут будут методы
    },
    computed: {
        // тут будут вычисляемые свойства
    }
 })
 
 

 
 

 