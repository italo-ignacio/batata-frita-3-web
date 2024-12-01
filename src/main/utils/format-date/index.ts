import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date: Date | string, formatType?: string): string => {
  try {
    return format(new Date(date), formatType ?? 'dd/MM/yyyy', {
      locale: ptBR
    });
  } catch {
    return '';
  }
};
