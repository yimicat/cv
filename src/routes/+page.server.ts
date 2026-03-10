import type { PageServerLoad } from './$types'
import { TURNSTILE_SECRET_KEY } from '$env/static/private'

async function validateToken(token: string): Promise<boolean> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: TURNSTILE_SECRET_KEY,
      response: token
    })
  })
  const data = await response.json()
  console.log('validateData,', data)
  return data.success
}

export const load: PageServerLoad = async ({ cookies }) => {
  const cook = cookies.get('cf_pass')
  let isTimeOut = true

  if (cook) {
    const outTime = Number.parseInt(cook)
    const nowTime = Date.now()
    console.debug('outTime | nowTime', outTime, nowTime)

    if (outTime > nowTime) {
      isTimeOut = false
    }
  }

  return {
    isCheck: isTimeOut
  }
}

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData()
    const token = formData.get('cf-turnstile-response')?.toString() || ''

    if (!token || !(await validateToken(token))) {
      return { success: false, message: 'Invalid Captcha' }
    }

    const timestamp = Date.now()
    const outime = 1000 * 60 * 60
    const timeout = timestamp + outime
    cookies.set('cf_pass', `${timeout}`, {
      path: '/',
      maxAge: timeout,
      secure: true,
      httpOnly: true
    })
    return { success: true, message: 'Successfully' }
  }
}
