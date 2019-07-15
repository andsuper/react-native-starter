import { NativeModules, Platform } from 'react-native'

/**
 * Returns the device language code.
 *
 * @returns {string} language code
 */
export default (): string => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2)
    : NativeModules.I18nManager.localeIdentifier.substring(0, 2)
}
