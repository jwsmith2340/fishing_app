//  /functions/db.js test
const db = require('../../functions/db')

test('Testing db.recs function', () => {

    expect(db.recs(`SELECT TEST_ID FROM TEST WHERE TEST_ID = 1`)).toBe([[{test_id: 1}]])

});