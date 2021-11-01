export function createDocumentHead () {
  return {
    elements: new Set([getGoogleSiteVerification()])
  }
}

function getGoogleSiteVerification () {
  const verificationCode = process.env.WMR_GOOGLE_VERIFICATION

  if (!verificationCode) {
    return undefined
  }

  return {
    type: 'meta',
    props: {
      name: 'google-site-verification',
      content: process.env.WMR_GOOGLE_VERIFICATION
    }
  }
}
