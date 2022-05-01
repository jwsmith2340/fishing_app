async function run() {

    try {
    
        const db = require('../functions/db')

        let responses;

        let fly_recs;

        responses = await db.recs(`SELECT TEST_ID FROM TEST WHERE TEST_ID = 1`)
console.log('this is the expected for test::: ', responses)
        fly_recs = responses[0]

        //db.insert('FLY', '(FLY_NAME,FLY_SIZE,FLY_COLOR)', ['Pheasant Tail', 14, 'Brown']);

        // if (fly_recs) {

        //     let fly_rec;

        //     let fly_id;
        //     let fly_name;
        //     let fly_size;
        //     let fly_color;

        //     for (let fly_counter = 0; fly_counter < fly_recs.length; fly_counter++) {

        //         fly_rec = fly_recs[fly_counter];

        //         fly_id = fly_rec.FLY_ID;
        //         fly_name = fly_rec.FLY_NAME;
        //         fly_size = fly_rec.FLY_SIZE;
        //         fly_color = fly_rec.FLY_COLOR;

        //         console.log(fly_counter,fly_rec)

        //     }

        // }
        
    } catch {

        console.log('catch error')

    }

    process.exit(1)

}

run();