import { AnyObject } from 'utils/UtilityTypes';

export const queryParams = (params: AnyObject): string => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      query.append(key, value ? '1' : '0');
    } else if ((typeof value === 'string' && value) || (typeof value === 'number' && value > 0)) {
      query.append(key, String(value));
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        query.append(`${key}[${index}]`, String(item));
      });
    }
  });

  return Array.from(query).length === 0 ? '' : `?${query.toString()}`;
};
