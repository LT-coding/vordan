'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const ProgressbarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height='3px'
        color='hsl(var(--primary))'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default ProgressbarProvider
