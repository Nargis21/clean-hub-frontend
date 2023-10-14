'use client'
import { useForm, FormProvider } from "react-hook-form"


const Form = ({ children, submitHandler, defaultValues }) => {
    const formConfig = {};
    if (!!defaultValues) formConfig['defaultValues'] = defaultValues

    const methods = useForm < FormProps > (formConfig)
    const { handleSubmit, reset } = methods

    const onSubmit = (data) => {
        submitHandler(data)
        reset()
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
};

export default Form;