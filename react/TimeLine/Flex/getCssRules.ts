const getCssRules = (rules: Object, isMobile = false) => {
    const result = {};

    Object.entries(rules).forEach(([rule, value]) => {
        if (typeof value === 'object') {
            if (isMobile && typeof value.mobile !== 'undefined') {
                result[rule] = value.mobile;
            } else {
                result[rule] = value.desktop;
            }
        } else {
            result[rule] = value
        }
    });

    return result;
}

export default getCssRules;
