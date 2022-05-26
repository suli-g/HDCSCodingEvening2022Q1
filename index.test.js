const findDisarium = require('./index')

expect(findDisarium(1, 600)).toBe("1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 89 | 135 | 175 | 518 | 598")
expect(findDisarium(50, 2000)).toBe("89 | 135 | 175 | 518 | 598 | 1306 | 1676")
expect(findDisarium(150, 3000000)).toBe("175 | 518 | 598 | 1306 | 1676 | 2427 | 2646798")
expect(findDisarium(-6, 200)).toBe("Please enter valid page numbers")
