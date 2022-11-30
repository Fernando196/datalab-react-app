import { useEffect, useState } from "react"


const useForm = (initialState, validate, submit) => {
    const [ values, setValues ] = useState(initialState);
    const [ errors, setErros  ] = useState({});
    const [ isSubmitting, setIsSubmitting ] = useState(false);


    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            submit();
        }else{
            setIsSubmitting(false);
        }

    },[errors]);

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        setErros(validate(values));
        setIsSubmitting(true);
    }

    const handleChange = (event) =>{
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting,
        setIsSubmitting
    }
}

export default useForm;