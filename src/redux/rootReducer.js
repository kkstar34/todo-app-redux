


const initialState = {
    todos : [
        {
            id : 1,
            description : "Netoyer la chambre",
            isDone : false,
            number : 52,
        }, 
        {
            id : 2,
            description : "Netoyer le salon",
            isDone : false,
            number : 65,
        },
        {
            id : 3,
            description : "Faire la vaiselle",
            isDone : false,
            number : 60
        }

    ],
}
function rootReducer(state = initialState, action) {

    switch(action.type) {
        case "REMOVE-TODO" : {
            let newTodos = [...state.todos];
            const index = state.todos.findIndex(todo => todo.id === action.payload);
            newTodos.splice(index, 1);
            return {
                ...state,
                todos : newTodos
            }
        }

        case "COMPLETE-TODO" : {
            let newTodos = [...state.todos];
            let todo = state.todos.find(todo => todo.id === action.payload);
            todo.isDone = !todo.isDone;

            return {
                ...state,
                todos : newTodos
            }
        }


        case "ADD-TODO" : {
            let newTodos = [...state.todos];
            newTodos.push(action.payload);
            return {
                ...state,
                todos : newTodos
            }
        }
        default : {
            return state;
        }
    }
  
}

export default rootReducer;