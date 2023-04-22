// 2.4.1 テストケースのグループ化

import { describe } from "node:test"

describe('グループ名', () => {
    test('テストケース1', () => {
        expect(true).toBe(true)
    })
    test('テストケース2', () => {
        expect(true).toBe(true)
    })
    test('テストケース3', () => {
        expect(true).toBe(true)
    })

    describe('グループ名2', () => {
        test('テストケース4', () => {
        expect(true).toBe(true)
        })
    })
})

// 2.4.2 パラメタライズドテスト

test.each([
    {a: 1, b: 1, expected: 2},
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 1, expected: 3},
])('.add($a, $b)', ({ a, b, expected }) => {
    expect(a + b).toBe(expected)
})

const calculateSalesTax = (price: number) =>
    price > 0 ? Math.floor((price / 100) * 10) : 0

test.each([
    {price: 100, expected: 10},
    {price: 99, expected: 9},
    {price: 1, expected: 0},
    {price: 0.1, expected: 0},
    {price: 0, expected: 0},
])('calculates the sales tax for a price equal to $price', ({ price, expected }) => {
    expect(calculateSalesTax(price)).toBe(expected)
})

// 2.4.3 前後処理を設定

// グループ1
describe('before/after timing', () => {
    // グループ1の前後処理
    beforeAll(() => console.log('1 - beforeAll'))
    afterAll(() => console.log('1 - afterAll'))
    beforeEach(() => console.log('1 - beforeEach'))
    afterEach(() => console.log('1 - afterEach'))
    // グループ1のテスト
    test('', () => console.log('1 - test1'))
    // グループ2
    describe('Scoped / Nested block', () => {
        // グループ2の前後処理
        beforeAll(() => console.log('2 - beforeAll'))
        afterAll(() => console.log('2 - afterAll'))
        beforeEach(() => console.log('2 - beforeEach'))
        afterEach(() => console.log('2 - afterEach'))
        // グループ2のテスト1
        test('', () => console.log('2 - test1'))
        // グループ2のテスト2
        test('', () => console.log('2 - test2'))
    })
})
