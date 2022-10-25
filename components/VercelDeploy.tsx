import { useFormStateProvider } from 'context'
import { useEffect } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export const VercelDeploy = () => {
  const { title, symbol } = useFormStateProvider()

  useEffect(() => {
    const envKeys =
      '&env=NEXT_PUBLIC_CHAIN_ID,NEXT_PUBLIC_CURATION_CONTRACT,NEXT_PUBLIC_ALCHEMY_KEY_GOERLI'
    // '&env=NEXT_PUBLIC_SITE_TITLE, NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_SITE_DESCRIPTION, NEXT_PUBLIC_TWITTER_HANDLE, NEXT_PUBLIC_WEBSITE_URL, NEXT_PUBLIC_CHAIN_ID, NEXT_PUBLIC_ALCHEMY_KEY_GOERLI, NEXT_PUBLIC_CURATION_CONTRACT'
    const envDescription = '&envDescription=Have questions about these requirements?'
    const envLink =
      '&envLink=https://github.com/public-assembly/neosound/blob/main/.env.example'
    const projectName = '&project-name=' + title
    const repositoryName = '&repository-name=' + title
    const demoTitle = '&demo-title=Neosound'
    const demoDescription =
      '&demo-description=Neosound is a forkable modular music player designed to aid in the creation of collaborative and intimate listening spaces for digital communities.'
    const demoUrl = '&demo-url=https://neosound.xyz/'
    const demoImage =
      '&demo-image=https://ipfs.io/ipfs/bafybeieveiubicn6u2mgo2ltr2qo4a3nkdnhchzmjacymzyekxdckosm4m'
    const sourceUrl =
      'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpublic-assembly%2Fneosound.git' +
      envKeys +
      envDescription +
      envLink +
      projectName +
      repositoryName +
      demoTitle +
      demoDescription +
      demoUrl +
      demoImage
    document.getElementById('source_url')?.setAttribute('href', sourceUrl)
  })

  return (
    <a id="source_url" target="_blank" rel="noreferrer">
      <button>
        <div className="flex items-center gap-1 ml-2 pa-paragraph transition ease-in-out sm:hover:text-[#ecf1f0]">
          <span className="mb-2">deploy to vercel</span>
          <IoIosArrowRoundForward className="mb-1 text-3xl sm:text-4.5" />
        </div>
      </button>
    </a>
  )
}
