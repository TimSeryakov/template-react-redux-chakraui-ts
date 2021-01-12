// ---------------------------------------------------------------------------------------------------------------------
// Init State
// ---------------------------------------------------------------------------------------------------------------------

export const initialState: TestStateType = {
    isLoaded: false,
    testData: [] as TestDataType[],
    currentTestData: {} as  TestDataType
}

// ---------------------------------------------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------------------------------------------

export type TestStateType = {
    isLoaded: boolean
    testData: TestDataType[],
    currentTestData: TestDataType
}

export type TestDataType = {
    ID: string
    title: string
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators Types
// ---------------------------------------------------------------------------------------------------------------------

export type TestActionTypes =
    | ReturnType<typeof setTestDataLoadedAC>
    | ReturnType<typeof setTestDataAC>
    | ReturnType<typeof setCurrentTestDataAC>


// ---------------------------------------------------------------------------------------------------------------------
// Enum (const)
// ---------------------------------------------------------------------------------------------------------------------

enum TEST {
    SET_LOADED = "TEST/SET_LOADED",
    SET_TEST_DATA = "TEST/SET_TEST_DATA",
    SET_CURRENT_TEST_DATA = "TEST/SET_CURRENT_TEST_DATA",
}

// ---------------------------------------------------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------------------------------------------------

const testReducer = (state: TestStateType = initialState, action: TestActionTypes): TestStateType => {
    switch (action.type) {
        case TEST.SET_LOADED: {
            return {
                ...state,
                isLoaded: action.isLoaded,
            }
        }
        case TEST.SET_TEST_DATA: {
            return {
                ...state,
                testData: action.testData,
            }
        }
        case TEST.SET_CURRENT_TEST_DATA: {
            return {
                ...state,
                currentTestData: action.testData,
            }
        }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Action Creators
// ---------------------------------------------------------------------------------------------------------------------

export const setTestDataLoadedAC = (isLoaded: boolean) =>
    ({type: TEST.SET_LOADED, isLoaded}) as const

export const setTestDataAC = (testData: TestDataType[]) =>
    ({type: TEST.SET_TEST_DATA, testData}) as const

export const setCurrentTestDataAC = (testData: TestDataType) =>
    ({type: TEST.SET_CURRENT_TEST_DATA, testData}) as const


export default testReducer


