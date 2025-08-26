'use client'

import { useEffect, useState } from 'react'
import { createChat } from '@n8n/chat'
import '@n8n/chat/style.css'

// Custom styles to match portfolio theme
const chatStyles = `
:root {
  --chat--color-primary: #915eff;
  --chat--color-primary-shade-50: #8148ff;
  --chat--color-primary-shade-100: #7333ff;
  --chat--color-secondary: #00cea8;
  --chat--color-secondary-shade-50: #00b696;
  --chat--color-white: #f3f3f3;
  --chat--color-light: #aaa6c3;
  --chat--color-light-shade-50: #9691b8;
  --chat--color-light-shade-100: #827cad;
  --chat--color-medium: #565283;
  --chat--color-dark: #050816;
  --chat--color-disabled: #666;
  --chat--color-typing: #aaa6c3;

  --chat--spacing: 1rem;
  --chat--border-radius: 0.75rem;
  --chat--transition-duration: 0.3s;

  --chat--window--width: 400px;
  --chat--window--height: 600px;

  --chat--header-height: auto;
  --chat--header--padding: var(--chat--spacing);
  --chat--header--background: #151030;
  --chat--header--color: #f3f3f3;
  --chat--header--border-top: none;
  --chat--header--border-bottom: 1px solid #100d25;
  --chat--heading--font-size: 1.5em;
  --chat--subtitle--font-size: 0.9em;
  --chat--subtitle--line-height: 1.6;

  --chat--textarea--height: 80px;

  --chat--message--font-size: 0.95rem;
  --chat--message--padding: var(--chat--spacing);
  --chat--message--border-radius: 1rem;
  --chat--message-line-height: 1.6;
  --chat--message--bot--background: #100d25;
  --chat--message--bot--color: #f3f3f3;
  --chat--message--bot--border: 1px solid #151030;
  --chat--message--user--background: #915eff;
  --chat--message--user--color: #ffffff;
  --chat--message--user--border: none;
  --chat--message--pre--background: rgba(145, 94, 255, 0.1);

  --chat--toggle--background: #915eff;
  --chat--toggle--hover--background: #8148ff;
  --chat--toggle--active--background: #7333ff;
  --chat--toggle--color: #ffffff;
  --chat--toggle--size: 64px;
}

/* Custom chat container styling */
.n8n-chat {
  font-family: 'Poppins', sans-serif !important;
}

.n8n-chat * {
  font-family: 'Poppins', sans-serif !important;
}

/* Chat window background */
.n8n-chat .chat-window {
  background: #050816 !important;
  border: 1px solid #151030 !important;
  box-shadow: 0px 35px 120px -15px #211e35 !important;
}

/* Chat messages area */
.n8n-chat .chat-messages {
  background: #050816 !important;
}

/* Input area */
.n8n-chat .chat-input {
  background: #100d25 !important;
  border-top: 1px solid #151030 !important;
}

.n8n-chat .chat-input textarea {
  background: #151030 !important;
  border: 1px solid #100d25 !important;
  color: #f3f3f3 !important;
}

.n8n-chat .chat-input textarea::placeholder {
  color: #aaa6c3 !important;
}

/* Send button */
.n8n-chat .chat-input button {
  background: #915eff !important;
  border: none !important;
}

.n8n-chat .chat-input button:hover {
  background: #8148ff !important;
}
`

export default function ChatWidget() {
  const [chatError, setChatError] = useState(null)

  useEffect(() => {
    // Inject custom styles
    const styleElement = document.createElement('style')
    styleElement.textContent = chatStyles
    document.head.appendChild(styleElement)

    const initChat = async () => {
      try {
        // Use our API route instead of direct n8n webhook
        const webhookUrl = '/api/n8n'
        
        // Test the API endpoint
        const testResponse = await fetch(webhookUrl, {
          method: 'GET',
        }).catch(() => null)

        console.log('API test response:', testResponse?.status)

        // Initialize chat
        await createChat({
          webhookUrl,
          mode: 'window', // Try window mode instead of default
          loadPreviousSession: false, // Disable loading previous session to avoid the error
          initialMessages: [
            'Hi there! 👋',
            'My name is Victor. How can I help you learn more about my work and experience?'
          ],
          i18n: {
            en: {
              title: 'Hi there! 👋',
              subtitle: "Ask me anything about my projects, skills, or experience!",
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Ask about my work, projects, or experience..',
            },
            es: {
              title: '¡Hola! 👋',
              subtitle: "¡Pregúntame sobre mis proyectos, habilidades o experiencia!",
              footer: '',
              getStarted: 'Nueva Conversación',
              inputPlaceholder: 'Pregunta sobre mi trabajo, proyectos o experiencia..',
            },
          },
        })
      } catch (error) {
        console.error('Chat initialization error:', error)
        setChatError(error.message)
      }
    }

    initChat()

    // Cleanup function to remove styles when component unmounts
    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement)
      }
    }
  }, [])

  if (chatError) {
    console.warn('Chat widget failed to load:', chatError)
  }

  return null
}
