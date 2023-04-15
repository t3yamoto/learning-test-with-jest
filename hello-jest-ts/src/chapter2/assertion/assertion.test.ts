test('testを使用してテストケースを作成する', () => {
    const result = true
    const expected = true
    expect(result).toBe(expected)
})

it('itを使用してテストケースを作成する', () => {
    expect(true).toBe(true)
})


const numberValue = 0
const stringValue = '文字列'
const booleanValue = true

// toBeでプリミティブな値を評価
test('evaluates as equal for all the same primitive values when using the toBe function', () => {
    expect(numberValue).toBe(0)
    expect(stringValue).toBe('文字列')
    expect(booleanValue).toBe(true)
})

// toEqualでプリミティブな値を評価
test('evaluates as equal for all the same primitive values when using the toEqual function', () => {
    expect(numberValue).toEqual(0)
    expect(stringValue).toEqual('文字列')
    expect(booleanValue).toEqual(true)
})

// toStrictEqualでプリミティブな値を評価
test('evaluates as equal for all the same primitive values when using the toStrictEqual function', () => {
    expect(numberValue).toStrictEqual(0)
    expect(stringValue).toStrictEqual('文字列')
    expect(booleanValue).toStrictEqual(true)
})
