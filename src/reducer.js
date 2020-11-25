export const initialState = {
    user: null,
    playlists:[],
    playing:false,
    item:null ,
    token:"BQBq9ZYJ7s_QjkZ1YnKnuh--xOYX2aTMRqUL97hkTt-b1QoQ6Xua4I64vSo0lvxWHYG9aHjO6n4g-aAzorXhfop1OKtqyKPzz6QlB5A1QG3RV0fuI_0MiF7dy2CLW_KzzlfIjnLX67F58CxbUMwNC5BILB0tXGmfhbGcF3vS1l-gI59k"
};

const reducer = (state, action) => {
    console.log(action);
    // Action -> type,[payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
            default:
                return state;   
    }
};

export default reducer;