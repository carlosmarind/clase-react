interface ButtonProps {
    texto: string;
    dataType: string
}

export function Button(props: ButtonProps) {
    return (
        <button data-type={props.dataType}>{props.texto}</button>
    );
}