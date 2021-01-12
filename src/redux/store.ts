import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import testReducer, {TestActionTypes, TestStateType} from "./test-reducer";
import notificationReducer, {NotificationActionTypes, NotificationStateType} from "./notification-reducer";

export type RootStateType = {
    test: TestStateType
    notification: NotificationStateType
}

export type ThunkDispatchType = ThunkAction<void | Promise<void>, RootStateType, unknown, RootActionsTypes>

export type RootActionsTypes =
    | TestActionTypes
    | NotificationActionTypes

const reducers = combineReducers({
    test: testReducer,
    notification: notificationReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

export default store