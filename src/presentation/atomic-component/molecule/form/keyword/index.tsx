import { type FC, useEffect } from 'react';
import { FormButton, InputController } from 'presentation/atomic-component/atom';
import { useKeywords } from 'data/use-case';
import type { Keywords } from 'domain/models';

interface KeywordsFormProps {
  keyword?: Keywords;
  closeModal: () => void;
}

const validate = {
  shouldValidate: true
};

export const KeywordsForm2: FC<KeywordsFormProps> = ({ keyword, closeModal }) => {
  const {
    handleSubmit,
    onSubmit,
    control,
    formState: { isSubmitting },
    setValue
  } = useKeywords({
    closeModal,
    keyword
  });

  useEffect(() => {
    if (keyword) {
      setValue('term', keyword.term, validate);
      setValue('negativeTerms', keyword.negativeTerms, validate);
    }
  }, [keyword]);

  return (
    <form className={'flex flex-col gap-5 p-6 w-full'} onSubmit={handleSubmit(onSubmit)}>
      <InputController
        autoFocus
        control={control}
        labelTop={'Termo de busca'}
        name={'term'}
        placeholder={'Digite o termo de busca'}
      />

      <InputController
        control={control}
        labelTop={'Termo excludente'}
        name={'negativeTerms.0'}
        placeholder={'Digite o Termo excludente - opcional'}
      />

      <div className={'mx-auto mt-6 min-w-[236px]'}>
        <FormButton isSubmitting={isSubmitting} label={'Salvar'} />
      </div>
    </form>
  );
};
