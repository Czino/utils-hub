import { Headline } from '../components/Headline'
import { Link } from '../components/Link'
import en from '../i18n/en'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'

export const Home = () => (
  <ScreenWithSideNavigation>
    <Headline>{en.home.title}</Headline>
    {/* TODO localize me */}
    <p>
      Welcome to UtilityHub, your premier online destination for a vast array of digital utilities designed to enhance
      efficiency and streamline your workflow.
    </p>
    <p>
      The platform is constantly evolving, with new utilities added regularly to meet the ever-changing demands of our
      users. We are committed to excellence, offering reliable and accurate tools that you can count on.
    </p>
    <p>
      For now we only have a few <Link href="/utils/list">list utilities</Link> and{' '}
      <Link href="/utils/text">text utilities</Link> but more is to come!
    </p>
  </ScreenWithSideNavigation>
)
