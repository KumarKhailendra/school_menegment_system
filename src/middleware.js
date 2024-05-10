import { NextResponse } from 'next/server'
 

export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/register' || path === '/forget'

  const token = request.cookies.get('refreshtoken')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}


export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/forget'
  ]
}