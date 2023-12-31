import '../index.css'

export const metadata = {
  title: 'Victor Lantigua | Portfolio',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>{children}</div>
        <script type='module' src='/src/main.jsx'></script>
      </body>
    </html>
  )
}
