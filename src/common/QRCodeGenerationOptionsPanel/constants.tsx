import { appRoutes } from '@/appRoutes';
import { dictionary } from '@/shared/ditctionary';

import ContentWrapper from '@/components/ContentWrapper';
import TextIcon from '@/components/icons/TextIcon';
import UrlIcon from '@/components/icons/UrlIcon';
import Text from '@/components/Text';

export const LINKS_DATA = [
  {
    href: appRoutes.publicRoutes.baseUrl,
    content: (
      <ContentWrapper className="flex flex-col items-center gap-1">
        <TextIcon />
        <Text
          content={dictionary.plainTextLink}
          element="span"
        />
      </ContentWrapper>
    ),
  },
  {
    href: appRoutes.publicRoutes.generateQRCodeFromUrl,
    content: (
      <ContentWrapper className="flex flex-col items-center gap-1">
        <UrlIcon />
        <Text
          content={dictionary.url}
          element="span"
        />
      </ContentWrapper>
    ),
  },
];
