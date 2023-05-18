export const setUser = (myData) => {
    return {
        type: 'SET_USER',
        payload: myData
    };
};

export const deleteUser = (index) => {
    return {
        type: 'DELETE_USER',
        payload: index
    };
};

export const deleteUsers = (checked) => {
    console.log(checked);
    return {
        type: 'DELETE_SELECTED_USERS',
        payload: checked
    }
}










// export function setEmail(email) {
//     return {
//         type: 'SET_EMAIL',
//         payload: email
//     };
// }

// export function setName(name) {
//     return {
//         type: 'SET_NAME',
//         payload: name
//     };
// }

// export function setPhone(phone) {
//     return {
//         type: 'SET_PHONE',
//         payload: phone
//     };
// }

// export function setAge(age) {
//     return {
//         type: 'SET_Age',
//         payload: age
//     };
// }

// export function setPassword(password) {
//     return {
//         type: 'SET_PASSWORD',
//         payload: password
//     };
// }