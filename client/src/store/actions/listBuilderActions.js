import * as actionTypes from './actionTypes';

export const editAddItem = () => {
    return {
        type: actionTypes[`EDIT_ADD_ITEM`]
    }
}


export const addNewItem = (iputValue) => {
    return { 
            type: actionTypes[`ADD_NEW_ITEM`],
            newItem: {
                title: iputValue,
                isEditing: false,
                isComplete: false,
                isDeleted: false,
                details: ''
            }
        } 
}

export const deactivateAddItem = (iputValue) => {
    return { type: actionTypes[`END_ADD_ITEM`] }
}

export const endAddItem = (inputValue) => {
  return (dispatch) => {
    if(inputValue) dispatch(addNewItem(inputValue))

    dispatch(deactivateAddItem())  
  }
}

export const editExistigItem = (index) => {
    return {
        type: actionTypes[`EDIT_EXISTING_ITEM`],
        editigItem: index
    }
}

export const updateExistingItem = (iputValue) => {
    return {
        type: actionTypes[`UPDATE_EXISTING_ITEM`],
        title: iputValue
    }
}

export const endEditingItem = (iputValue) => {
    return {
        type: actionTypes[`END_EDITING_ITEM`]
    }
}

export const toggleItemComplete = (index) => {
    return {
        type: actionTypes[`TOGGLE_ITEM_COMPLETE`],
        itemToComplete: index
    }
}

export const deleteItem = (index) => {
    return {
        type: actionTypes[`DELETE_ITEM`],
        itemToDelete: index
    }
}

export const toggleShowDeleted = () => {
    return {
        type: actionTypes[`TOGGLE_SHOW_DELETED`]
    }
}

export const toggleShowCompleted = () => {
    return {
        type: actionTypes[`TOGGLE_SHOW_COMPLETED`]
    }
}

export const editItemDetails = (itemIndex) => {
    return {
        type: actionTypes[`EDIT_ITEM_DETAILS`], 
        detailItem: itemIndex
    }
}

export const closeItemDetails = () => {
    return {
        type: actionTypes[`CLOSE_ITEM_DETAILS`]
    }
}

export const updateItemDetails = (text) => {
    return {
        type: actionTypes['UPDATE_ITEM_DETAILS'],
        details: text
    }
}


