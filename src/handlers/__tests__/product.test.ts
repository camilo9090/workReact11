import request from "supertest";
import server from "../../server";

describe('POST/api/products', () => {

    it('should display validations errots', async () => {

        const response = await request(server).post('/api/products').send({


        })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

        expect(response.status).not.toBe(404)
    })

    it('should validate that price is greter than 0', async () => {

        const response = await request(server).post('/api/products').send({


            name: "Monitor curvo grande-Test",
            price: 0
        })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

        expect(response.status).not.toBe(404)
    })

    it('should validate that price is a number and greater than 0', async () => {

        const response = await request(server).post('/api/products').send({


            name: "Monitor curvo grande-Test",
            price: "hola"
        })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

        expect(response.status).not.toBe(404)
    })

    it('should create a new product', async () => {
        const response = await request(server).post('/api/products').send({

            name: "teclado-Test",
            price: 100
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(200)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errors')
    })
})
describe('GET/api/products', () => {

    it('GET a JSON response with products', async () => {

        const response = await request(server).get('/api/products')
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')
        expect(response.body.data).toHaveLength(1)

        expect(response.body).not.toHaveProperty('errors')
        expect(response.status).not.toBe(404)
    })

})

describe('GET/api/products/:id', () => {

    it('should return a 404 response for non-existent product', async () => {

        const productId = 2000
        const response = await request(server).get(`/api/products/${productId}`)

        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty('error')
    })

    it('should check a valid ID in the URL', async () => {
        const response = await request(server).get('/api/products/not-valid-url')
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('El id debe ser un numero')

    })

    it('GET a JSON response for a single product', async () => {
        const response = await request(server).get('/api/products/1')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')

    })

})

describe('PUT/api/products/:id', () => {
    it('should display validation error messages when updating a product', async () => {

        const response = await request(server).put('/api/products/1').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(5)

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')

    })
})

describe('PUT/api/products/:id', () => {
   
   
   
    it('should check a valid ID in the URL', async () => {
        const response = await request(server)
        .put('/api/products/not-valid-url').send({

            name: "Monitor curvo grande-Test",
            availability: false,
            price: 300

        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0].msg).toBe('El id debe ser un numero')

    })
    it('should validate that the price is greater than 0', async () => {

        const response = await request(server)
            .put('/api/products/1').send({

                name: "Monitor curvo grande-Test",
                availability: false,
                price: 0

            })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')

    })


 it('should return a 404 response for a non-existent product', async () => {

    const productId = 2000
        const response = await request(server)
            .put(`/api/products/${productId}`).send({

                name: "Monitor curvo grande-Test",
                availability: false,
                price: 300

            })

        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Producto no encontrado')
    

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')

    })
    it('should update an exist product with valid data', async () => {

            const response = await request(server)
                .put(`/api/products/1`).send({
    
                    name: "Monitor curvo grande-Test",
                    availability: true,
                    price: 300
    
                })
    
            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('data')
        
    
            expect(response.status).not.toBe(400)
            expect(response.body).not.toHaveProperty('errors')
    
        })
})