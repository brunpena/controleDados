import * as C from './index.styles.js'
import { categories } from '../../dados/categories.js'
import { useState, useEffect } from "react"
import { formatDateToInput } from '../../funcoes/funcoes.js'

export const EditModal = ({ onClose, item, onSave }) => {
    const [formData, setFormData] = useState({
        ...item,
        date: formatDateToInput(item.date)
    })

    let categoryKeys = Object.keys(categories)

    useEffect(() => {
        setFormData({
            ...item,
            date: formatDateToInput(item.date)
        })
    }, [item])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ 
            ...formData,
            [name]: value
        })
    }

    const handleSave = () => {
        onSave(formData)
    }

    if (!item) return null

    return (
        <C.Modal>
            <C.ModalContent>
                <C.ModalHeader>
                    <h2>Editar Item</h2>
                    <button onClick={onClose}>❌</button>
                </C.ModalHeader>
                <C.ModalBody>
                    <label>Título:</label>
                    <C.Input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        placeholder="Título" 
                    />
                    <label>Valor:</label>
                    <C.Input 
                        type="number" 
                        name="value" 
                        value={formData.value} 
                        onChange={handleChange} 
                        placeholder="Valor" 
                    />
                    <label>Data:</label>
                    <C.Input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                    />
                    <label>Categoria:</label>
                    <C.Select name="category" value={formData.category} onChange={handleChange}>
                        <>
                            <option></option>
                            {categoryKeys.map((key, index) => (
                                <option key={index} value={key}>{categories[key].title}</option>
                            ))}
                        </>
                    </C.Select>
                </C.ModalBody>
                <C.ModalFooter>
                    <button onClick={handleSave}>Salvar</button>
                </C.ModalFooter>
            </C.ModalContent>
        </C.Modal>

    )

}