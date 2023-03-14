import passwordsFeature from '@adminjs/passwords';
import argon2 from 'argon2';
import { menu } from '../../../admin';
import { ResourceFunction } from '../../../admin/types';
import { AdminModel } from '../models';

export const CreateAdminResource: ResourceFunction<typeof AdminModel> = () => ({
  resource: AdminModel,
  features: [
    (options): object => ({
      ...options,
      listProperties: ['_id', 'email'],
      showProperties: ['_id', 'email'],
      editProperties: ['email', 'newPassword'],
    }),
    passwordsFeature({
      properties: {
        password: 'newPassword',
        encryptedPassword: 'password',
      },
      hash: argon2.hash,
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
