'use client'

import { ReactNode, useEffect, useState } from 'react'

interface Props {
	children?: ReactNode
}

export default function NoSSR({ children }: Props) {
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])
	if (!mounted) return null
	return <>{children}</>
}
