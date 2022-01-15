import Routes from '../constants/Routes'
import application from '../helpers/application'

export default async function ({ redirect, route }) {
  const validSettings = await application.validateSettings()
  if (route.name !== 'index' && !validSettings) {
    redirect(Routes.root)
  }
}
