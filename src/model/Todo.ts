export interface AddTaskProps {
    input: string;
    onChangeInput(input: string): void;
    onAdd(text: string): void;
}

export interface TodoListProps {
    todos: {
        id: number,
        text: string,
        editStatus: boolean,
        isDone: boolean
    }[];
    onUpdateInput(id: number, editText: string): void;
    onStartUpdate(id: number): void;
    onCompleteUpdate(id: number): void;
    onRemove(id: number): void;
    onIsDone(id: number): void;
}