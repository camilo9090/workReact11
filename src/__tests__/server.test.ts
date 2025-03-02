
import db from "../config/db";
import { connectDB } from "../server";


jest.mock('../config/db')


    describe('connectDB',()=>{
it('should handle database connection error',async()=>{

    jest.spyOn(db,'authenticate').
    mockRejectedValueOnce(new Error('error al conectar a la BD'))
    const consoleSpy = jest.spyOn(console,'log')

    await connectDB()

    expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('error al conectar a la BD'))
})
    })
