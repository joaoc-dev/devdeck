import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
  ],
  ignoreDependencies: [
    // temporarily ignore @t3-oss/env-nextjs
    '@t3-oss/env-nextjs',
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
