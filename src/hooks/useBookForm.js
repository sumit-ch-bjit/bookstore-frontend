// useBookForm.js

import { useState } from 'react';

const useBookForm = (onSubmit) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        price: '',
        discountPercentage: '',
        description: '',
        publishDate: '',
        ISBN: '',
        stock: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Optionally, you can reset the form data after submission
        setFormData({
            title: '',
            author: '',
            genre: '',
            price: '',
            discountPercentage: '',
            description: '',
            publishDate: '',
            ISBN: '',
            stock: '',
        });
    };

    return {
        formData,
        handleChange,
        handleSubmit,
    };
};

export default useBookForm;
