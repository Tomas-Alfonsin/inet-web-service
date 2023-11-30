import { addRoute, methods } from "../lib/router.js";
import service from '../service/job-offer.js';

addRoute(methods.POST, '/job-offers', async (_,{}, data) => {
    const jobOffer = await service.post(data);
    return {
        code:201,
        content: JSON.stringify(jobOffer)
    }
})

addRoute(methods.GET, '/job-offers', async (_, { id }) => {
    const jobOffer = await service.get();
    return {
      content: JSON.stringify(jobOffer),
    };
  });

addRoute(methods.GET, '/job-offers/{id}', async (_, { id }) => {
    const jobOffer = await service.getById( id );
    if (jobOffer == null) {
      return {
        code: 404,
        content: JSON.stringify({
          msg: 'jobOffer not found',
        }),
      };
    }
    return {
      content: JSON.stringify(jobOffer),
    };
  });