import { randomUUID } from 'crypto'
import { saveNewJobOffer } from './job-offers-repository.js'

export function JobOffer({ title, address, modeOfWork, comunicationPreferences, vacancy, isTimeLimit, isCvRequired, description, salary, state}){
    this.title = title
    this.address = address
    this.modeOfWork = modeOfWork
    this.comunicationPreferences = comunicationPreferences
    this.vacancy = vacancy
    this.isTimeLimit = isTimeLimit
    this.isCvRequired = isCvRequired
    this.description = description
    this.salary = salary
    this.state = state
}

/**
 * @returns { JobOffer }
 */
export const createJobOffer = ({ title, address, modeOfWork, comunicationPreferences, vacancy, isTimeLimit, isCvRequired, description, salary, state}) => {
    let jobOffer = new JobOffer({
        id: randomUUID(),
        title: title,
        address: address,
        modeOfWork: modeOfWork,
        comunicationPreferences: comunicationPreferences,
        vacancy: vacancy,
        isTimeLimit: isTimeLimit,
        isCvRequired: isCvRequired,
        description: description,
        salary: salary,
        state: state,
    })
    saveNewJobOffer( jobOffer )
    return jobOffer
}

