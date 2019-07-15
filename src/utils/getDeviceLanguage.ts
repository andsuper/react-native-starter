import { NativeModules, Platform } from 'react-native'

/**
 * Returns the device ISO 639-1 language code.
 *
 * @returns {string} language code
 */
export default (): string => {
  const languageCode: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier

  return languageCode.substring(0, 2)
}
