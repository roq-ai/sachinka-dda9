import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  name: yup.string().required(),
  path: yup.string().required(),
  organization_id: yup.string().nullable(),
});
