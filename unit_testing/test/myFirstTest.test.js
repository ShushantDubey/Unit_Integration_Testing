const {
    sum,
    deleteUserById,
    findUserById,
    testPromises,
} = require('../utils/helper');

beforeEach(() => {
    console.log('running before each test');
});

afterEach(() => {
    console.log('running after each test');
});

beforeAll(() => {
    console.log('running befor all tests');
});

afterAll(() => {
    console.log('running after all tests');
});

describe('Number Operations', () => {
    test('1 plus 1 should be equal to 2', () => {
        const a = 1;
        const b = 1;
        expect(a + b).toBe(2);
    });

    test('5 plus 6 should not be equal to 10', () => {
        const a = 5;
        const b = 6;
        expect(a + b).not.toBe(10);
    });
});

describe('Testing other matcher methods', () => {
    test('Testing that a variable is undefined', () => {
        const number = undefined;
        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
    });

    test('Number Comparison', () => {
        const a = 1;
        const b = 2;
        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeGreaterThanOrEqual(3);
    });

    test('there should be no I in team', () => {
        const string = 'team';
        expect(string).not.toMatch(/I/i);
    });

    test('the shopping list does not have ps4', () => {
        const shoppingList = ['Milk', 'Trash bags', 'Paper towels'];
        expect(shoppingList).not.toContain('ps4');
    });
});

// reference type
describe('Testing Reference equality', () => {
    const user = {
        name: 'John',
    };
    user['age'] = 45;
    test('should return a user object with age as 45', () => {
        expect(user).toEqual({
            name: 'John',
            age: 45,
        });
    });

    test('should return a user with a name and age key', () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        );
    });

    test('Array equality', () => {
        const users = ['clement', 'sarah', 'july'];
        users.push('jacob');

        expect(users).toEqual(['clement', 'sarah', 'july', 'jacob']);
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]));

        const userObjectInArray = [
            {
                name: 'clement',
                age: 12,
            },
            {
                name: 'sarah',
                age: 14,
            },
            {
                name: 'july',
                age: 25,
            },
        ];

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number),
                }),
            ])
        );
    });
});

describe('Testing imported functions', () => {
    let users = [
        {
            name: 'clen',
            age: 12,
            id: 1,
        },
        {
            name: 'jsutin',
            age: 15,
            id: 2,
        },
        {
            name: 'sarah',
            age: 17,
            id: 3,
        },
    ];

    test('sum function should add 2 numbers', () => {
        expect(sum(2, 5)).toBe(7);
    });

    test('delete by id function should delete a user by their id', () => {
        expect(deleteUserById(users, 3)).toEqual([
            {
                name: 'clen',
                age: 12,
                id: 1,
            },
            {
                name: 'jsutin',
                age: 15,
                id: 2,
            },
        ]);
    });

    //done by test driven development
    test('find a user by id from a list of users', () => {
        expect(findUserById(users, 2)).toEqual({
            name: 'jsutin',
            age: 15,
            id: 2,
        });

        expect(findUserById(users, 10)).toBeUndefined();
    });

    it('working with promises-resolves', async () => {
        await expect(testPromises()).resolves.toEqual({msg: 'resolved'});
    });

    it('working with promises-reject', async () => {
        await expect(testPromises()).rejects.toEqual({msg: 'rejected'});
    });
});
