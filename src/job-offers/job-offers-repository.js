import { Table } from '../lib/database.js'
import { KeysMapper } from '../keys_mapper.js'
import { JobOffer } from './job-offers.js'

const TABLE_NAME = 'job_offers'

const mapper = new KeysMapper({
    //  attribute   db column
    id: 'id',
    title: 'title',
    address: 'address',
    modeOfWork: 'mode_of_work',
    comunicationPreferences: 'comunication_preferences',
    vacancy: 'vacancy',
    isTimeLimit: 'is_time_limit',
    isCvRequired: 'is_cv_required',
    description: 'description',
    salary: 'salary',
    state: 'state',
})

let dbTable = new Table(TABLE_NAME)

export const fetchJobOffer = async ({ id }) => {
    const rawData = await dbTable.getRows({
        columns: mapper.getMappedKeys(),
        where: {
            field: mapper.mapKey('id'),
            value: id,
        },
    })

    if (rawData.length == 0) {
        throw 'No job offer available';
    }

    const jobOfferData = mapper.reverse(rawData[0]);
    return new JobOffer(jobOfferData);
}

export const fetchJobOffers = async () => {
    const rowsRawData = await dbTable.getRows({
        columns: mapper.getMappedKeys(),
    })
    if (rowsRawData.length == 0) {
        throw 'No job offers available';
    }

    let jobOffers = rowsRawData.map( ( rawData ) => {
        let data = mapper.reverse( rawData )
        return new JobOffer( data )
    })
    return jobOffers;
}

export const saveNewJobOffer = async ( jobOffer ) => {
    await dbTable.createRow( {fields: mapper.map( jobOffer )})
}
