import { createMachine } from 'xstate'

const deployPlatform = createMachine({
  id: 'Deploy Platform',
  initial: 'enteringTitle',
  states: {
    enteringTitle: {
      on: {
        CONFIRM_TITLE: {
          actions: 'assignTitleToContext',
          target: 'enteringCurationPass',
        },
      },
    },
    enteringCurationPass: {
      on: {
        CONFIRM_CURATION_PASS: {
          actions: 'assignCurationPassToContext',
          target: 'enteringMedia',
        },
        BACK: {
          target: 'enteringTitle',
        },
      },
    },
    enteringMedia: {
      on: {
        BACK: {
          target: 'enteringCurationPass',
        },
        CONFIRM_MEDIA: {
          actions: 'addMediaToContext',
          target: 'deployContract',
        },
      },
    },
    deployContract: {
      initial: 'idle',
      states: {
        idle: {},
        loading: {},
        error: {},
        success: {},
      },
      on: {
        BACK: {
          target: 'enteringMedia',
        },
      },
    },
  },
})
