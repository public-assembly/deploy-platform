import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { VercelDeploy } from 'components/VercelDeploy'
import { Seo } from 'components/Seo'

const Deploy: NextPage = () => (
  <div>
    <Seo title="Drop Page" description="Drop music on your own custom domain." />
    <Header
      route="https://github.com/SweetmanTech/deploy-platform"
      routeName="open source"
    />
    <HeroWrapper>
      <div className="flex flex-col gap-6 sm:gap-8">
        <HeroText
          text={
            <>
              create your&nbsp;<wbr></wbr>
              <span className="hidden sm:block"></span>own&nbsp;
              <span className="pa-displayLight">drop page</span>
            </>
          }
        />
        <VercelDeploy />
      </div>
    </HeroWrapper>
  </div>
)

export default Deploy
