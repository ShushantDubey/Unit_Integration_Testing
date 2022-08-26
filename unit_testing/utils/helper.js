exports.sum = (a, b) => {
    return a + b;
};

exports.deleteUserById = (array = [], id = '') => {
    return array.filter((user) => user.id !== id);
};

exports.findUserById = (array = [], id = '') => {
    return array.find((obj) => obj.id === id);
};

exports.testPromises = () => {
    return new Promise((resolve, reject) => {
        const num = 3;
        setTimeout(() => {
            if (num > 5) resolve({msg: 'resolved'});
            else reject({msg: 'rejected'});
        }, 2000);
    });
};
