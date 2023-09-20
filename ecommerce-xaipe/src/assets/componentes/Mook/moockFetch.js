const products = [ // simulamos una respuesta de una API
    {id: 1, name: 'Alfajores de maicena', category: 'Alfajor', price: 1200, stock: 120, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'public/alfajoresMaicena.img.jpg'},
    {id: 2, name: 'Brownie', price: 2000, category:'Tarta' , stock: 50, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'brownie.img.jpg'},
    {id: 3, name: 'Budin', price: 2500, category: 'Pan',stock: 20, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'budin.img.jpg'},
    {id: 4, name: 'Cheesecake block', category:'Tarta' , price: 4000, stock: 50, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'cheeseCake.img.jpg'},
    {id: 5, name: 'Cheesecake', category: 'Tarta', price: 5000, stock: 25, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'tartaCheescake.img.jpg'}
]

export const mFetch  = (pid) =>  new Promise((res,rej) => { 
    //acciones.
    //const condition = true
    
        setTimeout(()=>{
            res(pid ? products.find(product => product.id == pid) : products)
        }, 2000)
        
})
