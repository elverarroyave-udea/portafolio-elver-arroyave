import React from 'react'
import { Icon } from '@iconify/react'

interface CircularIconButtonProps {
  icon: string
  onClick?: () => void
}

const Index = ({ icon, onClick }: CircularIconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full bg-primary text-white mt-4"
      style={{ width: 48, height: 48 }}
    >
      <Icon icon={icon} width={24} height={24} />
    </button>
  )
}

export default Index