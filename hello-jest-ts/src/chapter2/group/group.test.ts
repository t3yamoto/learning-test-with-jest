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
