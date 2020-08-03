namespace IForm {
  export type FormType = 'include' | 'block'
  export type FormState = 'active' | 'disabled'

  export interface FormInfo {
    type: FormType
    state: FormState
  }
}
