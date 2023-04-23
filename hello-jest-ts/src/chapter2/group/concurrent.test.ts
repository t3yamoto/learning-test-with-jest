// 2.4.5 テストを並列で実行

// 1秒後に 'lemon' 文字列を返します
const fetchData = () => new Promise(resolve => setTimeout(resolve, 1000, 'lemon'))

// fetchData関数を100回実行するテスト
test.concurrent.each(
    Array.from(new Array(100).keys()).map(n => ({
        n,
        expected: 'lemon',
    })),
)('fetchData $n', async ({ n, expected }) => {
    console.log(n)
    await expect(fetchData()).resolves.toBe(expected)
})
