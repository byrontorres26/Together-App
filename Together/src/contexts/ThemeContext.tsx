import { createContext, ReactNode, useContext, useState } from 'react'

export const lightTheme = {
  colors: {
    background: '#F2EBDD',
    card: '#FBF7EE',

    text: '#1B2236',
    textSecondary: '#4A5062',

    primarydark: '#1B2236',
    primaryred: '#B83A2A',
    primaryblue: '#2D55A0',

    border: '#1B2236',
    offsetwhite: '#CFC6B2'
  },
}

export const darkTheme = {
  colors: {
    background: '#141A2B',
    card: '#1E2538',

    text: '#F2EBDD',
    textSecondary: '#B9BECD',

    primarydark: '#F2EBDD',
    primaryred: '#C8473A',
    primaryblue: '#2D55A0',

    border: '#F2EBDD',
    offsetwhite: '#3A4260'
  },
}

export type ThemeColors = typeof lightTheme.colors

type ThemeContextType = {
  isDark?: boolean
  colors: ThemeColors
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark((prev) => !prev)
  const colors = isDark ? darkTheme.colors : lightTheme.colors

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
  return ctx
}