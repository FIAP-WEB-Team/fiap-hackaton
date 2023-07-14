import React, { useContext } from 'react';
import styles from './Analysis.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

export default function Analysis() {
    const { signed } = useContext(UserContext);
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/"
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/"
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/"
        }
    ];

    if(!signed) { 
        return <Navigate to="/" />;         
    } 

    return (
        <section className={styles.section}>
            <h1>Análise de Reclamação</h1>
            <article className={styles.section__article}>                     

                <div className={styles.section__article__info}>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16"> <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/> <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/> </svg>
                        Informação
                    </h3>

                    <table>
                        <tr>
                            <td>Solicitante</td>
                            <td>Lianne S.</td> 
                        </tr>    
                        <tr>
                            <td>E-mail</td>
                            <td>lianne@hotmail.com</td>
                        </tr>    
                        <tr>
                            <td>Canal</td>
                            <td>Whatsapp</td>
                        </tr>    
                    </table> 
                </div>

                <div className={styles.section__article__ticket}>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16"> <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/> <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/> </svg>
                        Ticket
                    </h3>

                    <table>
                        <tr>
                            <td>Analista</td>
                            <td>Rean</td> 
                        </tr>    
                        <tr>
                            <td>Tipo</td>
                            <td>Produto não entregue</td>
                        </tr>    
                        <tr>
                            <td>Descrição</td>
                            <td>Item ainda não entregue após 2 meses.</td>
                        </tr>    
                    </table> 
                </div>

                <div className={styles.section__article__photos}>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16"> <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/> </svg>
                        Galeria
                    </h3>

                    <ImageGallery
                        items={images}
                        showPlayButton={true}
                        showFullscreenButton={true}
                        slideInterval={2500}
                        slideOnThumbnailOver={true}
                        showIndex={true} 
                        // style={{ height: "400px" }}
                    /> 
                </div>  

                <form className={styles.section__article__form}>
                    
                    <div>
                    <div className={styles.section__article__form__status}>
                        <Select 
                            description="Status"
                            name="status" 
                            data=""
                            updateFieldHandler=""
                        >
                            <option value="Pending">Pendente</option> 
                            <option value="Forwarded">Encaminhado</option> 
                            <option value="Completed">Completo</option> 
                        </Select>
                    </div>

                    <div className={styles.section__article__form__level}> 
                        <Select 
                            description="Level"
                            name="level" 
                            data=""
                            updateFieldHandler=""
                        >
                            <option>1</option> 
                            <option>2</option> 
                            <option>3</option> 
                        </Select>
                    </div>
                    </div>

                    <Textarea 
                        description="Descrição da análise"
                        name="description" 
                        row="7"
                        handleValidator=""
                    />  

                    <div className={styles.spacing}></div>
                    <Button description="Atualizar" handle="" />

                </form>

            </article> 
        </section>
    )
}
