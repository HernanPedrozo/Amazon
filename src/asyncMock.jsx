const products = [
    {
        "id": 1,
        "category" : "monitor",
        "name": "Monitor Led 24 Asus Full Hd 165Hz",
        "price": 47.789,
        "image": "/img/MonitorLed24.jpeg",
        "stock": 1,
        "featured": "false"
        },  
    {
        "id": 2,
        "category" : "placa de video",
        "name": "Placa De Video GeForce RTX 3080 Ti 12Gb Msi",
        "price": 400.999,
        "image": "/img/GeForceRTX3080.jpeg",
        "stock": 1,
        "destacado": "false"
        },
    {
        "id": 3,
        "category" : "procesador",
        "name": "Procesador Amd Ryzen 7 5700G 4.6 Ghz - AM4",
        "price": 51.999,
        "image": "/img/Ryzen75700G.jpeg",
        "stock": 1,
        "destacado": "true"
        },
    {
        "id": 4,
        "category" : "microfono",
        "name": "Micrófono HyperX Quadcast S Rgb",
        "price": 20.499,
        "image": "/img/microfono-hyperx.jpeg",
        "stock": 1,
        "destacado": "false"
        },
    {
        "id": 5,
        "category" : "gabinete",
        "name": "Gabinete Mid Tower Thermaltake V250 rgb",
        "price": 9.599,
        "image": "/img/gabinete-midtower.jpeg",
        "stock": 1,
        "destacado": "false"
        },    
    {
        "id": 6,
        "category" : "motherboard",
        "name": "Motherboard AM4 - Gigabyte GA-B450M DS3H",
        "price": 11.299,
        "image": "/img/motherboard-gigabyte.jpeg",
        "stock": 1,
        "destacado": "true"
        },
    {
        "id": 7,
        "category" : "memoria",
        "name": "Memoria Ram DDR4 - 8Gb 3600 Mhz Corsair Vengeance",
        "price": 7.999,
        "image": "/img/memoria-ram.jpeg",
        "stock": 1,
        "destacado": "true"

        },
    {
        "id": 8,
        "category" : "disco Solido",
        "name": "Disco Solido Ssd 480Gb Kingston A400",
        "price": 9.299,
        "image": "/img/disco-solido-ssd.jpeg",
        "stock": 1,
        "destacado": "true"
        }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{

            resolve(products)
            
        }, 3000)
    })
}

export const getByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            const filteredProducts = products.filter((product) => product.category === category)
            resolve(filteredProducts)
            
        }, 3000)
    })
}
