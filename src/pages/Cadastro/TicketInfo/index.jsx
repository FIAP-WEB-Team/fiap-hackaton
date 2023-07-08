import React, { useState } from 'react';
import Input from '../../../components/Input';
import styles from './TicketInfo.module.scss';
import Select from '../../../components/Select';
import Textarea from '../../../components/Textarea';

export default function TicketInfo( {data, handleValidator, updateFieldHandler} ) {   
    const [uploadedImages, setUploadedImages] = useState([]);

    const clickHandleFileChange = () => {
        document.getElementById('file').click();
    };
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        handleUpload(file);
    };

    const handleUpload = (image) => {
        const validFileExtensions = ['.jpg', '.jpeg', '.bmp', '.gif', '.png'];

        if (!image) {
            alert('No image selected.');
            return;
        }

        const { name } = image;
        const fileExtension = name.substring(name.lastIndexOf('.')).toLowerCase();

        if (!validFileExtensions.includes(fileExtension)) {
            alert('Image is not valid.');
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            setUploadedImages((prevImages) => [
                ...prevImages,
                { id: Date.now(), base64 },
            ]);
            updateFieldHandler('photos', [
                ...data.photos,
                { id: Date.now(), base64 },
            ]);
            console.log(data.photos, uploadedImages);
        };
        reader.readAsDataURL(image);
    };
  
    const handleDelete = (imageId) => {
        const confirmed = window.confirm('Quer remover a imagem?');

        if(confirmed) {
            const updatedImages = uploadedImages.filter(
                (image) => image.id !== imageId
            );
            setUploadedImages(updatedImages);
            updateFieldHandler('photos', updatedImages);
            console.log(updatedImages);
        }    
    };

    return (
        <>
            <div className={styles.divStep}>
                <div className={styles.divStep__stepCount}>2</div>
                <div className={styles.divStep__stepDescription2}>
                    <h2>Sobre a sua atuação</h2>
                    <span>Etapa 2 de 2</span>
                </div>
            </div>

            <div className='ticket'>                

                <Select 
                    description="Tipo de reclamação"
                    name="type" 
                    data={data}
                    updateFieldHandler={updateFieldHandler}
                >
                    <option value='' selected disabled>Selecione</option> 
                    <option>Item defeituoso</option> 
                    <option>Item não entregue</option>    
                    <option>Entregue produto errado</option>    
                    <option>Outros</option>  
                </Select>

                <Textarea 
                    description="Descrição"
                    name="description" 
                    row="7"
                    handleValidator={handleValidator}
                />                      

                <Select 
                    description="Level"
                    name="level" 
                    data={data}
                    updateFieldHandler={updateFieldHandler}
                >
                    <option>1</option> 
                    <option>2</option> 
                    <option>3</option> 
                </Select>

                <div className={styles.divStepBefore}>
                    <div className={styles.divStepBefore__stepDescription}>
                        <span onClick={clickHandleFileChange}>+ Adicionar anexo(s)</span>
                    </div> 
                    <input type="file" id="file" name="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none'}} />
                </div> 

                <div className={styles.gallery} >
                {
                    uploadedImages.map((image) => (
                        <div key={image.id} className={styles.gallery__item} >
                            <img src={image.base64} alt="Uploaded" />
                            <button onClick={() => handleDelete(image.id)}>Remover</button>
                        </div>
                    ))
                }
                </div>
                
            </div>
        </>
    )
}
