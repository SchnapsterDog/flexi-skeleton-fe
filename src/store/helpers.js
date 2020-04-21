import store from './index'

export function mapFields(fields) {
    const computed = {};
    for (let field of fields) {
        computed[field] = mapToAccessors(field)
    }
    return computed;
}

function mapToAccessors(field) {
    return ({
        get() {
            return store.state.form[field]
        },
        set(value) {
            return store.commit('setFieldValue', { field, value })
        }
    })
}