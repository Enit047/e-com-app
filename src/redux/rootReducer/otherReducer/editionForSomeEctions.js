export const handlerForRemoveCart = (arr, currentAction) => {
    const decItemQuantity = arr.find(({id}) => id === currentAction.id)

    if(decItemQuantity.quantity === 1){
        return arr.filter(({id}) => id !== currentAction.id)
    }

    return arr.map((item) => item.id === currentAction.id ? {
        ...currentAction,
        quantity: currentAction.quantity - 1
    } : item)
}

export const handlerForAddingCart = (arr, currentAction) => {
    const sameCart = arr.filter(({id}) => id === currentAction.id)

    if(!sameCart.length){
        return [...arr, {...currentAction, quantity: 1}]
    }

    return arr.map(item => item.id === currentAction.id ? {
        ...item,
        quantity: item.quantity + 1
    } : item)
}