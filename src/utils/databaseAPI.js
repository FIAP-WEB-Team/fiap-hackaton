// const urlPath = 'https://cors-anywhere.herokuapp.com/https://complaintsbackc.azurewebsites.net/complaints';
const urlPath = 'https://complaintsbackc.azurewebsites.net/complaints';

export async function returnComplaints() {
    const url = urlPath + '/get';
    const response = await fetch(url); 
    const data = await response.json();
    return data;
}

export async function returnComplaint(id) {
    const url = urlPath + '/getwithid/'+id;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function createNewComplaint(newComplaint) {
    const url = urlPath + '/set';

    const bytePhotosString = newComplaint.bytePhotos.map((photo) => photo.base64);

    const payload = {
        ...newComplaint,
        bytePhotos: bytePhotosString,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        // console.log(payload);

        if(response.ok) {
            console.log('Novo registro criado');
            return true;
        }else {
            console.error('Erro ao criar novo registro:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Erro ao criar novo registro:', error);
        return false;
    }
}

export async function updateComplaint(complaint) {
    const url = urlPath + '/update';

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(complaint),
        });

        if(response.ok) {
            console.log('Registro atualizado');
            return true;
        }else {
            console.error('Erro ao atualizar registro:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Erro ao atualizar registro:', error);
        return false;
    }
}
