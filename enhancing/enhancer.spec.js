const enhancer = require('./enhancer.js');
// test away!
describe("enhancer", () => {
    describe("enhancer.repair()", () => {
        it("returns a repaired item", () => {
            const expectedItem = {
                name: "item",
                enhancement: 20,
                durability: 100 
             }
             const inputItem = {
                 name: "item",
                 enhancement: 20,
                 durability: 1
             }
             const outputItem = enhancer.repair(inputItem)
             expect(outputItem).toStrictEqual(expectedItem)     
        })
    })
    describe("enhancer.succeed()", () => {
        it("increases an item's enhancement by 1", () => {
            const expectedItem = {
                name: "item",
                enhancement: 20,
                durability: 90
            }
            const inputItem = {
                    name: "item",
                    enhancement: 19,
                    durability: 90   
            }
            const outputItem = enhancer.succeed(inputItem)
            expect(outputItem).toStrictEqual(expectedItem)
        })
        it("does not increase an item's enhancement level if it is already 20", () => {
            const expectedItem = {
                name: "item",
                enhancement: 20,
                durability: 100
            }
            const inputItem = {
                name: "item",
                enhancement: 20,
                durability: 100
            }
            const outputItem = enhancer.succeed(inputItem)
            expect(outputItem).toStrictEqual(expectedItem)
        })
    })
    describe("enhancer.fail()", () => {
        it("decreases item's durability by 5 if item's enhancement is less than 15", () => {
            const expectedItem = {
                name: "item",
                enhancement: 14,
                durability: 85
            }
            const inputItem = {
                name: "item",
                enhancement: 14,
                durability: 90
            }
            const outputItem = enhancer.fail(inputItem)
            expect(outputItem).toStrictEqual(expectedItem)
        })
        it("decreases item's durability by 10 if item's enhancement is 15 or more", () => {
            const expectedItem = {
                name: "item",
                enhancement: 15,
                durability: 85
            }
            const inputItem = {
                name: "item",
                enhancement: 15,
                durability: 95
            }
            const outputItem = enhancer.fail(inputItem)
            expect(outputItem).toStrictEqual(expectedItem)
        })
        it("decreases item's enhancement level by 1 if item's enhancement level is greater than 16", () => {
            const expectedItem = {
                name: "item",
                enhancement: 16,
                durability: 85
            }
            const inputItem = {
                name: "item",
                enhancement: 17,
                durability: 95
            }
            const outputItem = enhancer.fail(inputItem)
            expect(outputItem).toStrictEqual(expectedItem)
        })
    })
    describe("enhancer.get()", () => {
        it("doesn't change the item if the enhancement level is zero", () => {
            const expectedItem = {
                name: "item",
                enhancement: 0,
                durability: 100
            }
            const inputItem = {
                name: "item",
                enhancement: 0,
                durability: 100
            }
            const outputItem = enhancer.get(inputItem)
            expect(outputItem).toStrictEqual(expectedItem)
        })
        it("changes item name to reflect item enhancement", () => {
            const expectedItem = {
                name: "[1] item",
                enhancement: 1,
                durability: 100
            }
            const inputItem = {
                name: "item",
                enhancement: 1,
                durability: 100
            }
            const outputItem = enhancer.get(inputItem)
            expect(outputItem).toStrictEqual(expectedItem)
        })
    })
})