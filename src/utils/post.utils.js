
export const getCurrentCategories = (name, checked, categories) => {

    const currentCategories = checked ?
        [...categories, name] :
        categories.filter(cat => cat !== name)

    return currentCategories
}