import {ChangeEvent} from 'react';

type InputPropsType = {
	currentText: string
	setCurrentText: (s:string)=>void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(e.currentTarget.value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
