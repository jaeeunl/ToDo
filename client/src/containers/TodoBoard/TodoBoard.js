import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../../components/UI/List/List'
import Options from '../../components/UI/Options/Options'
import ItemDetailsModal from '../../components/UI/ItemDetailModal/ItemDetailsModal'
import * as actions from '../../store/actions/index'

export class Board extends Component {
    render() {
        let classList = 'todo-list'
        if(this.props.showCompleted) classList = classList + ' show-completed'
        if(this.props.showDeleted) classList = classList + ' show-deleted'

        return (
            <div className={classList}>
                <List 
                    list={this.props.list}
                    editItem={this.props.editExistigItem}
                    updateItem={this.props.updateExistingItem}
                    endEditingItem={this.props.endEditingItem}
                    toggleItemComplete={this.props.toggleItemComplete}
                    deleteItem={this.props.deleteItem}
                    addItemActive={this.props.addItemActive}
                    editAddItem={this.props.editAddItem}
                    endAddItem={this.props.endAddItem}
                    editItemDetails={this.props.editItemDetails}
                    closeItemDetails={this.props.closeItemDetails}
                    isModalOpen={this.props.isModalOpen}
                    />
                < Options 
                    isShowingCompleted={this.props.showCompleted}
                    isShowingDeleted={this.props.showDeleted}
                    toggleShowCompleted={this.props.toggleShowCompleted}
                    toggleShowDeleted={this.props.toggleShowDeleted} 
                    />
                { this.props.isModalOpen ? 
                    <ItemDetailsModal 
                        currentDetailsValue={this.props.currentDetailsValue}
                        updateDetails={this.props.updateItemDetails}
                        closeItemDetails={this.props.closeItemDetails}
                        /> : 
                    null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ...state.listReducer }
};

const mapDispatchToProps = dispatch => {
    return {
        editAddItem: (isActive) => dispatch( actions.editAddItem(isActive) ),
        endAddItem: (e) => {
            if(e.type === 'blur' || e.key ==='Enter') dispatch( actions.endAddItem(e.target.value) )
        },
        editExistigItem: (index) => dispatch( actions.editExistigItem(index) ),
        updateExistingItem: (e) => dispatch( actions.updateExistingItem(e.target.value) ),
        endEditingItem: (e) => {
            if(e.type === 'blur' || e.key ==='Enter') dispatch( actions.endEditingItem() )
        },
        toggleItemComplete: (e, index) => {
            e.stopPropagation()
            dispatch( actions.toggleItemComplete(index) )
        },
        deleteItem: (e, index) => {
            e.stopPropagation()
            dispatch( actions.deleteItem(index) )
        },
        toggleShowCompleted: () => dispatch( actions.toggleShowCompleted() ),
        toggleShowDeleted: () => dispatch( actions.toggleShowDeleted() ),
        editItemDetails: (e, index) => {
            e.stopPropagation()
            dispatch( actions.editItemDetails(index) )
        },
        closeItemDetails: (e) => dispatch( actions.closeItemDetails() ),
        updateItemDetails: (e) => dispatch( actions.updateItemDetails(e.target.value) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Board )