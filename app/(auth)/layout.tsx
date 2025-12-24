import { ChildProps } from '@/types'
import React from 'react'

const AuthLayout: React.FC<ChildProps> = ({ children }) => {
	return <section className='flex justify-center mt-44'>{children}</section>
}

export default AuthLayout
