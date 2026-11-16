export type CustomButtonVariant = "primary" | "secondary" | "tertiary"

export type ButtonProps = {
    title: string;
    onPressButton: ()=> void; 
    variant?: CustomButtonVariant;
    disable?: boolean
}