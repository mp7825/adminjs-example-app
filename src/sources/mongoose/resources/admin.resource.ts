import { AdminModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';

export const CreateAdminResource = (): CreateResourceResult<typeof AdminModel> => ({
  resource: AdminModel,
  features: [
    (options): object => ({
      ...options,
      listProperties: ['_id', 'email'],
      showProperties: ['_id', 'email'],
      editProperties: ['email'],
    }),
  ],
  options: {
    navigation: menu.mongoose,
    sort: {
      direction: 'asc',
      sortBy: 'email',
    },
    actions: {
      delete: { isAccessible: false },
      bulkDelete: { isAccessible: false },
      edit: { isAccessible: false },
      new: { isAccessible: false },
    },
  },
});
