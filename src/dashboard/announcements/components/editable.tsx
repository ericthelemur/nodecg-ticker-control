
import { ElementType, useRef, useState } from 'react';
import { CheckLg, PenFill, XLg } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export interface EditableProps {
    text: string;
    setText: (text: string) => void;
    type?: string;
    className?: string;
    textClasses?: string;
    prefix?: JSX.Element | string;
    as?: ElementType;
}

export default function Editable(props: EditableProps) {
    const { text, setText, type } = props;
    const [editVal, setEditVal] = useState<string | null>(null);
    const editBox = useRef<HTMLInputElement>(null);
    const resetEditVal = () => setEditVal(null);

    if (editVal === null) {
        return <span className={`editable ${props.className || ""} ${props.textClasses || ""}`}
            onClick={() => setEditVal(text)}>
            {props.prefix} {text} <PenFill className="icon" />
        </span>
    } else {
        const submit = () => {
            setText(editBox.current!.value);
            resetEditVal();
        };
        const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Escape") resetEditVal();
            if (e.key === "Enter") submit();
            // else if (["Enter", "Backspace", "Control", "Shift"].includes(e.key)) return;
            // else if (type === "number" && !/[0-9\.]/.test(e.key)) e.preventDefault();
        };

        return (
            <>
                <Form.Control ref={editBox} className={"editable " + (props.className || "")} autoFocus
                    defaultValue={editVal} type={type ? type : "text"}
                    onKeyDown={keyPress} as={props.as || undefined} onFocus={e => e.target.select()}
                />
                <Button variant="primary" type="submit" onClick={submit}><CheckLg /></Button>
                <Button variant="outline-primary" onClick={resetEditVal}><XLg /></Button>
            </>
        )
    }
}