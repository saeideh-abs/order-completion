import type { Metadata } from 'next'
import '@/styles/global.css'
import { iranYekan } from '@/styles/fonts'
import { cn } from '@/utils'
import { QueryProvider } from '@/context/react-query'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'Form',
  description: 'Further information form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className="h-screen">
      <body className={cn(iranYekan.className, 'text-black m-0 h-full')}>
        <QueryProvider>
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex flex-col grow overflow-auto mt-header">
              {children}
            </main>
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
