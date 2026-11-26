export type InputVariant = 'code' | 'password' | 'email' | 'normal'

export type CustomInputProps = {
    placeholder: string,
    isSecurityText?: boolean,
    onChangeText: (text:string) => void
    variant?: InputVariant
    value: string
}