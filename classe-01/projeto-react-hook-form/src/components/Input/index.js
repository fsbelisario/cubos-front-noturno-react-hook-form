import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => (
    <input
        type={props.id === "user-id" ? "number" : "text"}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        ref={ref}
    />
));