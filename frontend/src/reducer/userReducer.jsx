const userReducer = (state, action) => {
  switch (action.type) {
    case "user_login":
      return {
        ...state,
        UserID: action.payload.UserID || "",
        UserEmail: action.payload.UserEmail || "",
        UserPassword: action.payload.UserPassword || "",
        UserFirstName: action.payload.UserFirstName || "",
        UserLastName: action.payload.UserLastName || "",
        UserCity: action.payload.UserCity || "",
        UserState: action.payload.UserState || "",
        UserZip: action.payload.UserZip || "",
        UserRegistrationDate: action.payload.UserRegistrationDate || "",
        UserPhone: action.payload.UserPhone || "",
        UserCountry: action.payload.UserCountry || "",
        UserAddress: action.payload.UserAddress || ""
      };
    case "update_user_details":
      return {
        ...state,
        ...action.payload,
      };
      case 'set_orders':
      return {
        ...state,
        order: action.payload || [],
      };
    default:
      return state;
  }
};

export default userReducer;
