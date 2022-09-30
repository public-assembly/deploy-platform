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
      type: 'INPUT_TITLE'
      title: Title
    }
  | {
      type: 'CONFIRM_TITLE'
    }
  | {
      type: 'CONFIRM_CURATION_PASS'
      curationPass: CurationPass
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

    // context: {
    //   title: '',
    //   curationPass: '',
    // },

    // State definitions
    states: {
      enteringTitle: {
        on: {
          INPUT_TITLE: {
            actions: ['assignTitleToContext'],
          },
          CONFIRM_TITLE: {
            // Target denotes what the appropriate next state is
            target: 'enteringCurationPass',
            actions: ['goToNextPage'],
          },
          BACK: {
            target: 'enteringTitle',
          },
        },
      },
      enteringCurationPass: {
        on: {
          CONFIRM_CURATION_PASS: {
            actions: 'assignCurationPassToContext',
            // target: 'enteringMedia',
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
        if (event.type !== 'INPUT_TITLE') return {}
        return {
          title: event.title,
        }
      }),
    },
    // services: { deployContract: () => () => {} },
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
