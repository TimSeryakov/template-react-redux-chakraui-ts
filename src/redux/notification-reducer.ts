// ---------------------------------------------------------------------------------------------------------------------
// Init State
// ---------------------------------------------------------------------------------------------------------------------

export const initialState: NotificationStateType = {
    notificationMessage: null
}

// ---------------------------------------------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------------------------------------------

export type NotificationStateType = {
    notificationMessage: { notificationText: string, notificationType: NotificationMessageType } | null
}

export type NotificationMessageType = "info" | "success" | "warning" | "error" | "default"


// ---------------------------------------------------------------------------------------------------------------------
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type NotificationActionTypes =
    | ReturnType<typeof setNotificationMessageAC>
    | ReturnType<typeof setNotificationMessageEmptyAC>

// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

enum NOTIFICATION {
    SET_NOTIFICATION_MESSAGE = "NOTIFICATION/SET_SERVER_MESSAGE",
    SET_NOTIFICATION_MESSAGE_EMPTY = "NOTIFICATION/SET_SERVER_MESSAGE_EMPTY",
}

//
export enum NOTIFICATION_MESSAGES {
    ADD_SUCCESS = "Successfully added",
    ADD_ERROR = "Error while adding"
}

// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

const notificationReducer = (state: NotificationStateType = initialState, action: NotificationActionTypes): NotificationStateType => {
    switch (action.type) {
        case NOTIFICATION.SET_NOTIFICATION_MESSAGE: {
            return {
                ...state,
                notificationMessage: {notificationText: action.notificationText, notificationType: action.notificationType},
            }
        }
        case NOTIFICATION.SET_NOTIFICATION_MESSAGE_EMPTY: {
            return {
                ...state,
                notificationMessage: null,
            }
        }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators
// ---------------------------------------------------------------------------------------------------------------------

export const setNotificationMessageAC = (notificationText: string, notificationType: NotificationMessageType) =>
    ({type: NOTIFICATION.SET_NOTIFICATION_MESSAGE, notificationText, notificationType}) as const

export const setNotificationMessageEmptyAC = () =>
    ({type: NOTIFICATION.SET_NOTIFICATION_MESSAGE_EMPTY}) as const


export default notificationReducer


