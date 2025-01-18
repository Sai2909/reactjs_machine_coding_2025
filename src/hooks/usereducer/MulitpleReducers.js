import { useReducer } from "react";

const userReducer = (state, action) => {
    switch (action.type) {
        case 'setUser':
            return { ...state, user: action.payload };
        default:
            return state;
    }
}; const postReducer = (state, action) => {
    switch (action.type) {
        case 'addPost':
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
};

const combinedReducer = (state, action) => {
    return {
        user: userReducer(state.user, action),
        posts: postReducer(state.posts, action),
    };
}; const initialState = {
    user: null,
    posts: [],
}; function App() {
    const [state, dispatch] = useReducer(combinedReducer, initialState); return (<div>
        {/* Your components here */}
    </div>
    );
}