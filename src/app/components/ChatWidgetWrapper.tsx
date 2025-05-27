'use client'

import dynamic from 'next/dynamic'

// Dynamic import of ChatWidget component
const ChatWidget = dynamic(() => import('./ChatWidget'), {
  ssr: false,
})

export default function ChatWidgetWrapper() {
  return <ChatWidget />
}
