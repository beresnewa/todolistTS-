namespace Form {
    export type FormType = 'inline' | 'block'
    export type FormState = 'active' | 'disabled'

    interface FormInfo {
        type: FormType
        state: FormState
    }
}