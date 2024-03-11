const validateValue = (value) => {
    if (value === null || value === undefined || value < 0 || value > 100) {
        return false;
    }

    return true;
};

module.exports = validateValue;
