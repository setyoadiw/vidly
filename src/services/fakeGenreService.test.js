const fakeGenreService = require("./fakeGenreService")
// @ponicode
describe("fakeGenreService.getGenres", () => {
    test("0", () => {
        let callFunction = () => {
            fakeGenreService.getGenres()
        }
    
        expect(callFunction).not.toThrow()
    })
})
