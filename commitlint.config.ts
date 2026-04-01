import { type UserConfig } from '@commitlint/types';

export default {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
      type: {
        enum: {
          feat: {
            description: 'A new feature',
            emoji: '✨ ',
          },
          fix: {
            description: 'A bug fix',
            emoji: '🐛 ',
          },
          docs: {
            description: 'Documentation only changes',
            emoji: '📚 ',
          },
          style: {
            description:
              'Code style changes (formatting, missing semi colons, etc)',
            emoji: '💎 ',
          },
          refactor: {
            description:
              'Code change that neither fixes a bug nor adds a feature',
            emoji: '📦 ',
          },
          perf: {
            description: 'A code change that improves performance',
            emoji: '🚀 ',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            emoji: '🧪 ',
          },
          build: {
            description: 'Changes that affect the build system or dependencies',
            emoji: '🛠️ ',
          },
          ci: {
            description: 'Changes to CI configuration files and scripts',
            emoji: '⚙️ ',
          },
          chore: {
            description: 'Other changes that don’t modify src or test files',
            emoji: '♻️ ',
          },
          revert: {
            description: 'Reverts a previous commit',
            emoji: '🗑️ ',
          },
        },
      },
    },
  },
} satisfies UserConfig;
