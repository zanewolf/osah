const Airtable = require('airtable');
const  base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_PEOPLE_TABLE_NAME)
const tableCourses = base(process.env.AIRTABLE_COURSES_TABLE_NAME)
const tableData = base(process.env.AIRTABLE_DATA_TABLE_NAME)

const getMinifiedRecord=(record)=>{
    // if(!record.fields.Newsletter){
    //     record.fields.NewsLetter=false;
    // }
    return{
        id:record.id,
        fields:record.fields
    }
}

const minifyRecords = (records)=>{
    return records.map(record=>getMinifiedRecord(record))

}

async function getPeople() {
    const records = await table.select({}).all();
    const minifiedRecords = await minifyRecords(records);

    console.log(minifiedRecords);

    return minifiedRecords;
}

 async function getCourses() {
    const records = await tableCourses.select({}).all();
    const minifiedRecords = await minifyRecords(records);

    console.log(minifiedRecords);

    return minifiedRecords;
}

async function getData() {
    const records = await tableData.select({}).all();
    const minifiedRecords = await minifyRecords(records);

    console.log(minifiedRecords);

    return minifiedRecords;
}

export {getPeople,getCourses,getData}