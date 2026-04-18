import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'

const app = new Hono()

// تقديم الملفات الستاتيكية من مجلد public
app.use('/static/*', serveStatic({ root: './' }))

// الصفحة الرئيسية: تقدم تطبيق "المحاسب البسيط" كاملاً (Single Page App)
app.get('/', (c) => {
  return c.redirect('/static/app.html', 301)
})

// نقطة فحص بسيطة
app.get('/api/health', (c) => {
  return c.json({ ok: true, app: 'المحاسب البسيط', ts: new Date().toISOString() })
})

export default app