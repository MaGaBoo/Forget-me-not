import { useState } from 'react'

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue)

    // Push new value into list

    const push = (element) => {
        setValue(oldValue => [...oldValue, element])
    }

    // Remove value from list

    const remove = (index) => {
        setValue(oldValue => oldValue.filter((_, i) => i !== index))
    }

    // Check if list is empty

    const isEmpty = () => value.length === 0

    return { value, setValue, push, remove, isEmpty }
}

// TODO: Implement more features for lists

export default useList
