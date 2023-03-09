import { useFormStateProvider } from 'context'
import { useEffect } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export const VercelDeploy = () => {
  const { title } = useFormStateProvider()

  useEffect(() => {
    const envKeys =
      '&env=NEXT_PUBLIC_TITLE,NEXT_PUBLIC_DESCRIPTION_TEXT,NEXT_PUBLIC_ALCHEMY_ID,NEXT_PUBLIC_IMAGE_HOST,NEXT_PUBLIC_CHAIN_ID,NEXT_PUBLIC_CONTRACT_ADDRESS,NEXT_PUBLIC_CROSSMINT_CLIENT_ID,COINMARKETCAP_API_KEY'
    // '&env=NEXT_PUBLIC_SITE_TITLE, NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_SITE_DESCRIPTION, NEXT_PUBLIC_TWITTER_HANDLE, NEXT_PUBLIC_WEBSITE_URL, NEXT_PUBLIC_CHAIN_ID, NEXT_PUBLIC_ALCHEMY_KEY_GOERLI, NEXT_PUBLIC_CURATION_CONTRACT'
    const envDescription = '&envDescription=Have questions about these requirements?'
    const envLink =
      '&envLink=https://github.com/SweetmanTech/NOT_YET_NO/blob/main/.env.local.example'
    const projectName = '&project-name=hello sweets' + title
    const repositoryName = '&repository-name=hello sweets' + title
    const demoTitle = '&demo-title=Drop Page'
    const demoDescription =
      '&demo-description=A forkable drop page help musicians be more sovereign with their drops.'
    const demoUrl = '&demo-url=https://notyetno.xyz/'
    const demoImage =
      '&demo-image=https://ipfs.io/ipfs/bafybeieveiubicn6u2mgo2ltr2qo4a3nkdnhchzmjacymzyekxdckosm4m'
    const sourceUrl =
      'https://vercel.com/new/clone?repository-url=https://github.com/SweetmanTech/NOT_YET_NO.git' +
      envKeys +
      envDescription +
      envLink +
      projectName +
      repositoryName +
      demoTitle +
      demoDescription +
      demoUrl +
      demoImage
    console.log(sourceUrl)
    document.getElementById('source_url')?.setAttribute('href', sourceUrl)
  })

  return (
    <a id="source_url" target="_blank" rel="noreferrer">
      <button>
        <div className="flex items-center gap-1 ml-2 pa-paragraph transition ease-in-out sm:hover:text-[#ecf1f0]">
          <span className="mb-2">create drop page</span>
          <IoIosArrowRoundForward className="mb-1 text-3xl sm:text-4.5" />
        </div>
      </button>
    </a>
  )
}
