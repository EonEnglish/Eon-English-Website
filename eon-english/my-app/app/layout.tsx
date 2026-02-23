import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
         <link
          href="https://fonts.googleapis.com/css2?family=Neucha&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}