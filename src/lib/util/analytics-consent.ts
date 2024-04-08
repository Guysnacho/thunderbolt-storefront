import { sendGAEvent } from "@next/third-parties/google"

const analyticsKey = "allowed-analytics"

export const allConsentGranted = () => {
  console.debug("Granted Consent")
  sendGAEvent("consent", "update", {
    ad_user_data: "granted",
    ad_personalization: "granted",
    ad_storage: "granted",
    analytics_storage: "granted",
  })
  localStorage.setItem(analyticsKey, "true")
}

export const allConsentDenied = (isDefault: boolean) => {
  if (isDefault) {
    console.debug("Denied Consent | Default")
    sendGAEvent("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    })
  } else {
    console.debug("Denied Consent | Update")
    sendGAEvent("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    })
  }
  localStorage.setItem(analyticsKey, "false")
}

export const getAnaliticsStatus = () => {
  const analyticsAllowed = localStorage.getItem(analyticsKey)
  if (analyticsAllowed != null) {
    return analyticsAllowed === "true"
  }
  return false
}
