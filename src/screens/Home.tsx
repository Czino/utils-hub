import { Headline } from '../components/Headline'
import en from '../i18n/en'
import { i18n } from '../i18n/i18n'
import { ScreenWithSideNavigation } from '../templates/ScreenWithSideNavigation'

export const Home = () => (
  <ScreenWithSideNavigation>
    <Headline>{i18n(en.home.title)}</Headline>
    <p>{i18n(en.home.description)}</p>
  </ScreenWithSideNavigation>
)
