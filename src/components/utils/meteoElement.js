export default meteoElement = {
    create: (title = null,meteo,) => {
        const created_at = new Date();
        if(!title) title = meteo.name;
        const result = {
            title,
            meteo,
            meta:{
                updated_at:created_at,
                created_at
            }
        };
        return result;
    }
};