import {text} from "node:stream/consumers";


interface  TextInput {
    value: string;
    onChangeText: (text: string) => void;
}

export const TextInputAtom = ({value, onChangeText }): TextInput => {
    return <TextInputAtom value={value}, onChangeText={onChangeText}/>
}