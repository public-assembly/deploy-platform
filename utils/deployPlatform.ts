import { assign, createMachine } from 'xstate'

export interface DeployPlatformContext {
  title?: Title
  curationPass?: CurationPass
}

type Title = string

type CurationPass = string

export type MultiStepFormMachineEvent =
  | {
      type: 'BACK'
    }
  | {
      // Event objects can also have other properties, which represent data associated with the event
      type: 'CONFIRM_TITLE'
      title: Title
    }
  | {
      type: 'CONFIRM_CURATION_PASS'
      value: CurationPass
    }
  | {
      type: 'CONFIRM'
    }

export const deployPlatform = createMachine<
  DeployPlatformContext,
  MultiStepFormMachineEvent
>(
  {
    // Machine identifier
    id: 'Deploy Platform',

    // Initial state
    initial: 'enteringTitle',

    // State definitions
    states: {
      enteringTitle: {
        on: {
          CONFIRM_TITLE: {
            target: 'enteringCurationPass',
            actions: ['assignTitleToContext', 'goToNextPage'],
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
    },
  },
  {
    actions: {
      assignTitleToContext: assign((context, event) => {
        if (event.type !== 'CONFIRM_TITLE') return {}
        return {
          title: event.title,
        }
      }),
    },
    services: { deployContract: () => () => {} },
  }
)

// ADD IN LATER

// enteringMedia: {
//   on: {
//     BACK: {
//       target: 'enteringCurationPass',
//     },
//     CONFIRM_MEDIA: {
//       actions: 'addMediaToContext',
//       target: 'deployContract',
//     },
//   },
// },

// deployContract: {
//     initial: 'idle',
//     states: {
//       idle: {},
//       loading: {},
//       error: {},
//       success: {},
//     },
//     on: {
//       BACK: {
//         target: 'enteringMedia',
//       },
//     },
//   },
