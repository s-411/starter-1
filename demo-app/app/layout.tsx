import '@/design-system/styles/globals.css'
import { ThemeProvider } from '@/design-system/lib/theme-provider'

export const metadata = {
  title: 'MM Design System Demo',
  description: 'Testing the design system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
