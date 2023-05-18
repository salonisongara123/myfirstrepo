const initialState = {
    userData: [],
}


export default function UserReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_USER':
            return { ...state, userData: [...state.userData, action.payload] };

        case 'DELETE_USER':
            // console.log(action.payload)
            return { ...state, userData: [...state.userData.splice(0, action.payload), ...state.userData.splice(1)] };

        case 'DELETE_SELECTED_USERS':
            // console.log(action.payload);
            let currentUserData = state.userData;
            let removeIndex = action.payload;
            let updatedUserData = currentUserData.filter((value, i) => !removeIndex.includes(`${i}`));
            console.log("updatedUserData", updatedUserData)

            return { ...state, userData: updatedUserData };


        // case 'SET_EMAIL':
        //     return { ...state, email: action.payload};
        // case 'SET_NAME':
        //     return { ...state, name: action.payload };
        // case 'SET_PHONE':
        //     return { ...state, phone: action.payload };
        // case 'SET_AGE':
        //     return { ...state, age: action.payload };
        // case 'SET_PASSWORD':
        //     return { ...state, password: action.payload };
        default:
            return state;
    }
}
