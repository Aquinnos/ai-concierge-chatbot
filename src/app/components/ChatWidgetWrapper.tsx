'use client'

import dynamic from 'next/dynamic'

/*
 * This component is used to dynamically import the ChatWidget component
 * to ensure it is only rendered on the client side.
 * This prevents issues with server-side rendering and ensures that the widget
 * can access browser-specific APIs.
 */
const ChatWidget = dynamic(() => import('./ChatWidget'), {
  ssr: false,
})

export default function ChatWidgetWrapper() {
  return <ChatWidget />
}
