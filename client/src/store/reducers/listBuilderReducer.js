import * as actionTypes from '../actions/actionTypes';

const initialState = {
    addItemActive: false,
    showCompleted: false,
    showDeleted: false,
    isModalOpen: false,
    currentDetailsValue: '',
    list: []
}

const editAddItem = (state, action) => {
    return {...state, ...action, ...{ addItemActive: true } }
}

const endAddItem = (state, action) => {
    return {
        ...state, 
        ...action, 
        ...{ addItemActive: false } 
    }
}

const addNewItem = (state, action) => {
    return {
        ...state, 
        ...action, 
        list: [...state.list, action.newItem], 
    }
}

const editExistingItem = (state, action) => {
    return {
        ...state, 
        ...action, 
        list: state.list.map((item, i) => {
            return i === action.editigItem ? {...item, isEditing: true} : item
        }),
    }
}

const updateExistingItem = (state, action) => {
    return {
        ...state, 
        type: action.type, 
        list: state.list.map((item, i) => {
            return i === state.editigItem ? {...item, title: action.title} : item
        }),
    }
}

const endEditingItem = (state, action) => {
    return {
        ...state, 
        type: action.type, 
        list: state.list.map((item, i) => {
            return i === state.editigItem ? {...item, isEditing: false} : item
        }),
    }
}

const toggleItemComplete = (state, action) => {
    return {
        ...state, 
        type: action.type, 
        list: state.list.map((item, i) => {
            return i === action.itemToComplete ? {...item, isComplete: !item.isComplete} : item
        }),
    }
}

const deleteItem = (state, action) => {
    return {
        ...state, 
        ...action,
        list: state.list.map((item, i) => {
            return i === action.itemToDelete ? {...item, isDeleted: !item.isDeleted} : item
        }),
    }
}

const toggleShowDeleted = (state, action) => {
    return {...state, ...action, ...{ showDeleted: !state.showDeleted } }
}

const toggleShowCompleted = (state, action) => {
    return {...state, ...action, ...{ showCompleted: !state.showCompleted } }
}

const editItemDetails = (state, action) => {
    const currentItem = state.list.find((item, i) => i === action.detailItem )
    
    return {
        ...state, 
        ...action,
        currentDetailsValue: currentItem.details,
        ...{ isModalOpen: true }
    }
}

const closeItemDetails = (state, action) => {
    return {
        ...state, 
        ...action, 
        currentDetailsValue: '',
        ...{ isModalOpen: false }
    }
}

const updateItemDetails = (state, action) => {
    return {
        ...state, 
        type: action.type, 
        currentDetailsValue: action.details,
        list: state.list.map((item, i) => {
            return i === state.detailItem ? {...item, details: action.details} : item
        }),
    }
} 

const createReducer = () => {
    return function reducer (state = initialState, action) {
        switch ( action.type ) {  
            case actionTypes[`EDIT_ADD_ITEM`]: return editAddItem( state, action )
            case actionTypes[`END_ADD_ITEM`]: return endAddItem( state, action )
            case actionTypes[`ADD_NEW_ITEM`]: return addNewItem( state, action )
            case actionTypes[`EDIT_EXISTING_ITEM`]: return editExistingItem( state, action )
            case actionTypes[`UPDATE_EXISTING_ITEM`]: return updateExistingItem( state, action )
            case actionTypes[`END_EDITING_ITEM`]: return endEditingItem( state, action )
            case actionTypes[`TOGGLE_ITEM_COMPLETE`]: return toggleItemComplete( state, action )
            case actionTypes[`DELETE_ITEM`]: return deleteItem( state, action )
            case actionTypes[`TOGGLE_SHOW_DELETED`]: return toggleShowDeleted( state, action )
            case actionTypes[`TOGGLE_SHOW_COMPLETED`]: return toggleShowCompleted( state, action )
            case actionTypes[`EDIT_ITEM_DETAILS`]: return editItemDetails( state, action )
            case actionTypes[`CLOSE_ITEM_DETAILS`]: return closeItemDetails( state, action )
            case actionTypes[`UPDATE_ITEM_DETAILS`]: return updateItemDetails( state, action )          
            
            default: return state
        }
    }
}

export default createReducer