const crypto = require('crypto')

const products = [
	{
		"id": "74a4d6e1-c0e3-46de-b915-7eb89c2bfa17",
        "name": "Laptop",
		"price": 400,
		"quantity": 1,
		"active": true
	},
	{
		"id": "74a4d6e1-c0e3-46de-b915-7eb89c2bfa18",
        "name": "Keyboard",
		"price": 30,
		"quantity": 1,
		"active": true
	},
	{
		"id": "74a4d6e1-c0e3-46de-b915-7eb89c2bfa19",
		"name": "Monitor",
		"price": 140,
		"quantity": 1,
		"active": true
	}
]

exports.getAllProducts = (req, res) => {
    res.json(products).status(200);
}

exports.getEspecificProduct = (req, res) => {
    const product = products.find(product => product.id == req.params.id)

    if(!product) {
        return res.status(404).json({message: 'Product not found'});
    }

    res.status(200).json(product);
}

exports.createProduct = (req, res) => {
    const {name, price, quantity, active} = req.body

    if(!name) {
        return res.status(422).json({message: 'Product name is riqured'})
    }

    const id = crypto.randomUUID()

    products.push({
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        active: active
    })
    res.status(200).json({messsage: 'Product created successfully', id})
}

exports.updateProduct = (req, res) => {
    const product = products.find(product => product.id == req.params.id)

    if(!product) {
        return res.status(404).json({message: 'Product not found'});
    }

    const {name, price, quantity, active} = req.body

    if(name) {
        product.name = name
    }

    if(price) {
        product.price = price
    }

    if(quantity) {
        product.quantity = quantity
    }

    if('active' in req.body) {
        product.active = active
    }

    res.status(200).json({message: 'Product updated successfully'})
}

exports.deleteProduct = (req, res) => {
    const productIndex = products.findIndex(product => product.id === req.params.id)

    if(productIndex === -1) {
        return res.status(404).json({message: 'Product not found'})
    }

    res.status(200).json({message: 'Product deleted sucessfully'})
}
