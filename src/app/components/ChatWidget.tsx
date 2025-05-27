'use client'

import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { PaperAirplaneIcon, XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

// Interface for the messages state
interface Message {
  text: string
  isUser: boolean
  source?: 'local' | 'openai'
}

export default function ChatWidget() {
  // State variables to manage the chat widget's open/close state, messages, input, loading state, and language
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<'hr' | 'en'>('hr')

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Scroll to the bottom of the chat when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  /*
   * Handles the form submission when the user sends a message.
   * It prevents the default form submission behavior, checks if the input is empty or if a request is already in progress,
   * and then sends the user's message to the server.
   * After receiving a response, it updates the messages state with the new message.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setIsLoading(true)

    try {
      const response = await axios.post('/api/chat', {
        message: userMessage,
        lang: language,
      })

      setMessages((prev) => [
        ...prev,
        {
          text: response.data.answer,
          isUser: false,
          source: response.data.source,
        },
      ])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages((prev) => [
        ...prev,
        {
          text: 'Sorry, I encountered an error. Please try again.',
          isUser: false,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 right-auto z-50 md:bottom-4 md:right-4 md:left-auto md:translate-x-0">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl w-full max-w-[98vw] h-[70vh] flex flex-col transform transition-all duration-300 ease-in-out md:w-96 md:h-[600px]">
          <div className="p-3 md:p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h3 className="font-semibold text-lg">AI Concierge</h3>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'hr' | 'en')}
                  className="text-sm bg-white/10 text-white border-white/20 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="hr">HR</option>
                  <option value="en">EN</option>
                </select>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full text-gray-400">
                <p className="text-center">
                  {language === 'hr'
                    ? 'Pozdrav! Kako vam mogu pomoći?'
                    : 'Hello! How can I help you?'}
                </p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'bg-white shadow-md text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  {!message.isUser && message.source && (
                    <p className="text-xs mt-1 opacity-70">Source: {message.source}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white shadow-md rounded-2xl p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === 'hr' ? 'Unesite pitanje...' : 'Ask a question...'}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl px-4 py-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:hover:shadow-none"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
