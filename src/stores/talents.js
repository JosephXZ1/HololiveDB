import { defineStore } from 'pinia';
import { ref } from 'vue';

//Definir nombre de almacen y lógica
//Le dice a Vue que se está creando un espacio global llamado "talentos" que no pertenece a ninguna página en particular, sino a toda la aplicación.
export const almacenTalentos = defineStore('talentos', () =>
{
    const listaMaestra = ref([]);

    async function cargarDirectorio()
    {
        //Si la lista ya tiene datos, no se vuelven a descargar
        if (listaMaestra.value.length > 0) return;

        try
        {
            const respuesta = await fetch('../../public/HoloDB.json');

            if(!respuesta.ok)
            {
                throw new error('el JSON Fallo :(')
            }

            listaMaestra.value = await respuesta.json();
        }
        catch (error)
        {
            console.error("Error al cargar la base de datos:", error);
        }
    }

    //EXPORTAR (Decidir qué se comparte con el resto de la página)
    //NOTA: aquí no se puede usar sintaxis Allman (osea, debe ir corchete de apertura en la línea return, no despues)
    return{ 
        listaMaestra, 
        cargarDirectorio 
    };
});