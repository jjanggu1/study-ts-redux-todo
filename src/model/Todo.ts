export interface TodoProps {
    input: string;
    onChangeInput(input: string): void;
    onAdd(text: string): void;
}