import { useFormStateProvider } from 'context'
import { useEffect } from 'react'

export const VercelDeploy = () => {
  const { title, symbol } = useFormStateProvider()

  useEffect(() => {
    const envKeys =
      '&env=NEXT_PUBLIC_SITE_TITLE, NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_CURATION_CONTRACT'
    // const envDescription = undefined
    // const envLink = undefined
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
      <button className="flex items-center pr-3 pl-3 py-1.5 rounded-2xl bg-slate-100">
        Deploy to Vercel
      </button>
    </a>
  )
}
