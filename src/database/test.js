const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {

    // inserir dados na tabela

    // await saveOrphanage(db, {
    //     lat: "-21.7810901",
    //     lng: "-48.1519913",
    //     name: "Lar dos meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "0231313131",
    //     images: [
    //         "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1600711725615-d7dfb2215244?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "0"
    // });

    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat,
    //         lng,
    //         name,
    //         about,
    //         whatsapp,
    //         images,
    //         instructions,
    //         opening_hours,
    //         open_on_weekends
    //     ) VALUES (
    //         "-21.7810901",
    //         "-48.1519913",
    //         "Lar dos meninos",
    //         "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //         "16900000000",
    //         "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //         "Horário de visitas Das 18h até 8h",
    //         "0"
    //     );
    // `);

    
    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // consultar somente um orfanato pelo id
    const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '3'");
    console.log(orphanage);
/*
    // deletar dado da tabela
    await db.run("DELETE FROM orphanages WHERE id = '4'");
*/
});