import { menu } from '../../../admin';
import { PRODUCTS_LIST } from '../../../admin/components.bundler';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { getProducts } from '../hooks/get-products.hook';
import { getSumForOrder } from '../hooks/get-sum.hook';
import { OrderModel } from '../models';

export const CreateOrderResource: ResourceFunction<typeof OrderModel> = () => ({
  resource: OrderModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.sequelize,
    actions: {
      list: {
        after: [getSumForOrder()],
      },
      show: {
        after: [getProducts(), getSumForOrder()],
      },
    },
    properties: {
      sum: {
        isVisible: {
          edit: false,
          list: true,
          filter: false,
          show: true,
        },
        position: 998,
      },
      productsList: {
        isVisible: {
          edit: false,
          list: false,
          filter: false,
          show: true,
        },
        components: {
          show: PRODUCTS_LIST,
        },
        position: 999,
      },
      createdAt: {
        isVisible: {
          show: true,
          edit: false,
        },
      },
      updatedAt: {
        isVisible: {
          show: true,
          edit: false,
        },
      },
    },
  },
});
