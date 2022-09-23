import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { Organization } from '../models';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateOrganizationResource = (): CreateResourceResult<typeof Organization> => ({
  resource: Organization,
  features: [useEnvironmentVariableToDisableActions()],
  options: {},
});
