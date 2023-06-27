import * as yup from 'yup';

export const constructionToolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  duration: yup.number().integer().required(),
  availability_status: yup.boolean().required(),
  outlet_id: yup.string().nullable(),
});
