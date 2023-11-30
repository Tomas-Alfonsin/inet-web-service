import { getConnection } from '../lib/connection.js';

const entityTable = 'job_offers';
const idColumn = 'id'

// const post = ({data}) =>
//   new Promise(async (resolve) => {
//     const connection = await getConnection();
//     connection.query(
//       `insert into ?? (id, title, mode_of_work, comunication_preferences, vacancy, is_time_limit, is_cv_required, description, state, salary) VALUES (??, ??, ??, ??, ??, ??, ??, ??, ??, ??);`,
//       [
//         entityTable,
//         data.id,
//         data.title,
//         data.mode_of_work,
//         data.comunication_preferences,
//         data.vacancy,
//         data.is_time_limit,
//         data.is_cv_required,
//         data.description,
//         data.state,
//         data.salary
//       ],
//       (err, result) => {
//         if (err) throw err;
//         resolve(result[0] ?? null);
//       }
//     );
//   });

  const getById = (id) =>
  new Promise(async (resolve) => {
    const connection = await getConnection();
    connection.query(
      `select * from ?? where ?? = ?`,
      [
        entityTable,
        idColumn, 
        id,
      ],
      (err, result) => {
        if (err) throw err;
        resolve(result[0] ?? null);
      }
    );
  });

  const get = () =>
  new Promise(async (resolve) => {
    const connection = await getConnection();
    connection.query(
      `select * from ??`,
      [
        entityTable,
      ],
      (err, result) => {
        if (err) throw err;
        resolve(result ?? null);
      }
    );
  });

export default { getById, get };

// curl -Method Post http://localhost:8080/job-offers -Body '{"id":"28d596f6-8f04-11ee-b9d1-0242ac120002","title":"title test","mode_of_work":"mode_of_work test","comunication_preferences":"preferences test", "vacancy":1,"is_time_limit":1,"is_cv_required":1,"description":"description test", "state":1, "salary":1}'

// {
//     "id":"28d596f6-8f04-11ee-b9d1-0242ac120002",
//     "title":"title test",
//     "mode_of_work":"mode_of_work test",
//     "comunication_preferences":"preferences test",
//     "vacancy":1,
//     "is_time_limit":1,
//     "is_cv_required":1,
//     "description":"description test",
//     "state":1, "salary":1
//     }