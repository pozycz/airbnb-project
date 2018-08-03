
module.exports = {
    normalizeErrors: function(errors) {
        let normilizeErrors = [];

        for (let property in errors) {
            if (errors.hasOwnProperty(property)) {
                normilizeErrors.push({title: property, detail: errors[property].message });
            }
        }

        return normalizeErrors;
    }
}